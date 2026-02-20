#!/bin/sh
set -e

echo "🚀 Starting application..."

# Ensure data directory exists and seed with defaults if empty
echo "📁 Checking data directory..."
mkdir -p /app/data/admin

if [ ! -f /app/data/admin/snippets.json ]; then
  echo "📋 Seeding default snippets.json..."
  cp /app/data-defaults/snippets.json /app/data/admin/snippets.json
fi

if [ ! -f /app/data/admin/page-snippets.json ]; then
  echo "📋 Seeding default page-snippets.json..."
  cp /app/data-defaults/page-snippets.json /app/data/admin/page-snippets.json
fi

if [ ! -f /app/data/admin/settings.json ]; then
  echo "📋 Creating default settings.json..."
  echo '{"flesvoedingcalculator":{"hide_all_ads":"false"},"togwaarde":{"hide_all_ads":"false"}}' > /app/data/admin/settings.json
fi

echo "✅ Data directory ready"

# Start the Next.js application
echo "🌐 Starting Next.js server..."
exec npm start
