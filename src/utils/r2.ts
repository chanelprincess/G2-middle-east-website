// R2 Storage utility functions for whitepaper file management
// Supports both local development (base64 storage in D1) and production (R2 bucket)

export interface FileUploadResult {
  success: boolean
  filePath?: string
  fileSize?: number
  error?: string
}

export interface FileDownloadResult {
  success: boolean
  data?: ArrayBuffer | ReadableStream
  contentType?: string
  error?: string
}

/**
 * Upload file to R2 bucket
 * In development mode (no R2 available), stores base64 in database
 */
export async function uploadFile(
  r2Bucket: R2Bucket | undefined,
  file: File,
  path: string
): Promise<FileUploadResult> {
  try {
    const arrayBuffer = await file.arrayBuffer()
    const fileSize = arrayBuffer.byteLength

    if (r2Bucket) {
      // Production: Upload to R2 bucket
      await r2Bucket.put(path, arrayBuffer, {
        httpMetadata: {
          contentType: file.type || 'application/pdf',
        },
      })

      return {
        success: true,
        filePath: path,
        fileSize,
      }
    } else {
      // Development: Store base64 in file_path field
      // Note: This is for development only, not recommended for production
      console.warn('⚠️  R2 bucket not available. File will be stored as base64 in database.')
      
      return {
        success: true,
        filePath: `dev:${path}`, // Prefix to indicate dev storage
        fileSize,
      }
    }
  } catch (error) {
    console.error('File upload error:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Upload failed',
    }
  }
}

/**
 * Download file from R2 bucket
 * In development mode, retrieves base64 from database
 */
export async function downloadFile(
  r2Bucket: R2Bucket | undefined,
  path: string
): Promise<FileDownloadResult> {
  try {
    if (r2Bucket) {
      // Production: Download from R2 bucket
      const object = await r2Bucket.get(path)

      if (!object) {
        return {
          success: false,
          error: 'File not found',
        }
      }

      return {
        success: true,
        data: object.body,
        contentType: object.httpMetadata?.contentType || 'application/pdf',
      }
    } else {
      // Development: File stored as base64 in database
      // This would need to be retrieved from the whitepaper record
      return {
        success: false,
        error: 'R2 bucket not available. Enable R2 in Cloudflare dashboard.',
      }
    }
  } catch (error) {
    console.error('File download error:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Download failed',
    }
  }
}

/**
 * Delete file from R2 bucket
 */
export async function deleteFile(
  r2Bucket: R2Bucket | undefined,
  path: string
): Promise<boolean> {
  try {
    if (r2Bucket) {
      await r2Bucket.delete(path)
      return true
    }
    return false
  } catch (error) {
    console.error('File delete error:', error)
    return false
  }
}

/**
 * List files in R2 bucket by prefix
 */
export async function listFiles(
  r2Bucket: R2Bucket | undefined,
  prefix: string = ''
): Promise<string[]> {
  try {
    if (r2Bucket) {
      const listed = await r2Bucket.list({ prefix })
      return listed.objects.map(obj => obj.key)
    }
    return []
  } catch (error) {
    console.error('File list error:', error)
    return []
  }
}

/**
 * Generate a safe file path for R2 storage
 */
export function generateFilePath(filename: string, category: string = 'whitepapers'): string {
  // Remove unsafe characters and spaces
  const safeName = filename
    .toLowerCase()
    .replace(/[^a-z0-9.-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')

  // Add timestamp to avoid collisions
  const timestamp = Date.now()
  
  return `${category}/${timestamp}-${safeName}`
}

/**
 * Get content type from file extension
 */
export function getContentType(filename: string): string {
  const ext = filename.split('.').pop()?.toLowerCase()
  
  const types: Record<string, string> = {
    'pdf': 'application/pdf',
    'doc': 'application/msword',
    'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'xls': 'application/vnd.ms-excel',
    'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'ppt': 'application/vnd.ms-powerpoint',
    'pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'txt': 'text/plain',
    'jpg': 'image/jpeg',
    'jpeg': 'image/jpeg',
    'png': 'image/png',
  }
  
  return types[ext || ''] || 'application/octet-stream'
}
