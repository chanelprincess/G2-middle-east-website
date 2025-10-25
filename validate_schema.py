#!/usr/bin/env python3
"""
Tim Jacobs Schema.org JSON-LD Validator
Validates the schema structure and provides testing instructions
"""

import json
import sys
from typing import Dict, List, Any

def load_schema(file_path: str) -> Dict[str, Any]:
    """Load schema from JSON file"""
    try:
        with open(file_path, 'r') as f:
            return json.load(f)
    except FileNotFoundError:
        print(f"❌ Error: File not found: {file_path}")
        sys.exit(1)
    except json.JSONDecodeError as e:
        print(f"❌ Error: Invalid JSON: {e}")
        sys.exit(1)

def validate_required_fields(schema: Dict[str, Any]) -> List[str]:
    """Validate required Schema.org Person fields"""
    issues = []
    
    required_fields = [
        '@context', '@type', 'name', 'jobTitle', 'worksFor', 
        'description', 'url', 'image', 'sameAs'
    ]
    
    for field in required_fields:
        if field not in schema:
            issues.append(f"Missing required field: {field}")
    
    return issues

def validate_urls(schema: Dict[str, Any]) -> List[str]:
    """Validate all URLs use HTTPS"""
    issues = []
    
    # Check main URL
    if 'url' in schema and not schema['url'].startswith('https://'):
        issues.append(f"Main URL should use HTTPS: {schema['url']}")
    
    # Check sameAs URLs
    if 'sameAs' in schema:
        for url in schema['sameAs']:
            if not url.startswith('https://'):
                issues.append(f"sameAs URL should use HTTPS: {url}")
    
    # Check author articles
    if 'author' in schema:
        for i, article in enumerate(schema['author']):
            if 'url' in article and not article['url'].startswith('https://'):
                issues.append(f"Author article {i+1} URL should use HTTPS: {article['url']}")
    
    return issues

def analyze_schema(schema: Dict[str, Any]) -> None:
    """Analyze and report on schema contents"""
    
    print("=" * 60)
    print("Tim Jacobs Schema.org JSON-LD Analysis")
    print("=" * 60)
    print()
    
    # Basic info
    print(f"📋 Schema Type: {schema.get('@type', 'Unknown')}")
    print(f"👤 Name: {schema.get('name', 'Unknown')}")
    print(f"💼 Job Title: {schema.get('jobTitle', 'Unknown')}")
    print()
    
    # Count fields
    print("📊 Schema Statistics:")
    print(f"   • Total fields: {len(schema)}")
    print(f"   • sameAs URLs: {len(schema.get('sameAs', []))}")
    print(f"   • Author articles: {len(schema.get('author', []))}")
    print(f"   • subjectOf articles: {len(schema.get('subjectOf', []))}")
    print(f"   • Keywords: {len(schema.get('keywords', []))}")
    print(f"   • knowsAbout topics: {len(schema.get('knowsAbout', []))}")
    print(f"   • About entries: {len(schema.get('about', []))}")
    print(f"   • Organizations (memberOf): {len(schema.get('memberOf', []))}")
    print()
    
    # Validation
    print("✅ Validation Results:")
    
    required_issues = validate_required_fields(schema)
    url_issues = validate_urls(schema)
    
    if not required_issues and not url_issues:
        print("   ✅ All required fields present")
        print("   ✅ All URLs use HTTPS")
        print("   ✅ Schema structure is valid")
    else:
        if required_issues:
            print("   ⚠️  Required field issues:")
            for issue in required_issues:
                print(f"      • {issue}")
        
        if url_issues:
            print("   ⚠️  URL issues:")
            for issue in url_issues:
                print(f"      • {issue}")
    
    print()
    
    # Article details
    if 'author' in schema and schema['author']:
        print("📝 Author Articles:")
        for i, article in enumerate(schema['author'][:5], 1):
            print(f"   {i}. {article.get('headline', 'No headline')[:60]}...")
            print(f"      URL: {article.get('url', 'No URL')}")
            print(f"      Publisher: {article.get('publisher', {}).get('name', 'Unknown')}")
            print()
        
        if len(schema['author']) > 5:
            print(f"   ... and {len(schema['author']) - 5} more articles")
            print()
    
    # Sample keywords
    if 'keywords' in schema and schema['keywords']:
        print("🔑 Sample Keywords:")
        for keyword in schema['keywords'][:10]:
            print(f"   • {keyword}")
        if len(schema['keywords']) > 10:
            print(f"   ... and {len(schema['keywords']) - 10} more")
        print()
    
    # Sample sameAs URLs
    if 'sameAs' in schema and schema['sameAs']:
        print("🔗 sameAs URLs:")
        for i, url in enumerate(schema['sameAs'], 1):
            print(f"   {i}. {url}")
        print()
    
    print("=" * 60)

def main():
    """Main validation function"""
    
    schema_file = '/tmp/tim_jacobs_schema.json'
    
    print()
    print("Loading schema from:", schema_file)
    print()
    
    schema = load_schema(schema_file)
    analyze_schema(schema)
    
    print()
    print("=" * 60)
    print("🧪 TESTING INSTRUCTIONS")
    print("=" * 60)
    print()
    print("Option 1: Google Rich Results Test (URL)")
    print("-" * 60)
    print("1. Deploy your site to production")
    print("2. Visit: https://search.google.com/test/rich-results")
    print("3. Enter your production URL (e.g., https://g2middleeast.com/team)")
    print("4. Click 'TEST URL'")
    print()
    print("Option 2: Google Rich Results Test (Code)")
    print("-" * 60)
    print("1. Visit: https://search.google.com/test/rich-results")
    print("2. Click the 'CODE' tab")
    print("3. Copy the contents of:", schema_file)
    print("4. Paste into the code field")
    print("5. Click 'TEST CODE'")
    print()
    print("Option 3: Schema.org Validator")
    print("-" * 60)
    print("1. Visit: https://validator.schema.org/")
    print("2. Paste the schema JSON")
    print("3. Review validation results")
    print()
    print("Option 4: Copy Schema to Clipboard")
    print("-" * 60)
    print(f"cat {schema_file} | pbcopy   # macOS")
    print(f"cat {schema_file} | xclip -selection clipboard   # Linux")
    print()
    print("=" * 60)
    print()
    
    # Output formatted JSON for easy copying
    print("📄 Formatted Schema (ready to copy):")
    print("=" * 60)
    print(json.dumps(schema, indent=2))
    print("=" * 60)
    print()

if __name__ == '__main__':
    main()
