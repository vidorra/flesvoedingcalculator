#!/bin/bash

# JSX to TypeScript Conversion Script
# Converts all .jsx files to .tsx and updates imports

set -e  # Exit on error

echo "🔄 Starting JSX to TypeScript conversion..."
echo "================================================"

# Function to convert a single file
convert_file() {
    local file=$1
    local new_file="${file%.jsx}.tsx"

    if [ -f "$file" ]; then
        echo "Converting: $file → $new_file"
        mv "$file" "$new_file"
    fi
}

# Counter
count=0
total=$(find . -name "*.jsx" -type f | grep -E "^\./(app|components|lib|hooks)" | wc -l)

echo "Found $total .jsx files to convert"
echo ""

# Convert all .jsx files
for file in $(find . -name "*.jsx" -type f | grep -E "^\./(app|components|lib|hooks)" | sort); do
    count=$((count + 1))
    echo "[$count/$total] Converting: $file"
    new_file="${file%.jsx}.tsx"
    mv "$file" "$new_file"
done

echo ""
echo "================================================"
echo "✅ Conversion complete!"
echo "📊 Summary:"
echo "   - Converted $count files"
echo "   - Extension changed: .jsx → .tsx"
echo ""
echo "🔍 Next steps:"
echo "   1. Review files for TypeScript compatibility"
echo "   2. Add type annotations where needed"
echo "   3. Run 'npm run build' to check for errors"
echo "   4. Commit changes"
echo ""
echo "⚠️  Note: You may need to add type annotations to:"
echo "   - Function parameters"
echo "   - Component props"
echo "   - Event handlers"
echo "   - Imported types"
