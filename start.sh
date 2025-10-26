#!/bin/sh
set -e

echo "🚀 Starting application..."

# Run database migrations
echo "📊 Running database migrations..."
if npm run db:migrate; then
  echo "✅ Migrations completed successfully"
else
  echo "⚠️  Migration failed, but continuing to start app..."
fi

# Start the Next.js application
echo "🌐 Starting Next.js server..."
exec npm start
