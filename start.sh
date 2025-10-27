#!/bin/sh
set -e

echo "🚀 Starting application..."

# Run database schema migrations
echo "📊 Running database schema migrations..."
if npm run db:migrate; then
  echo "✅ Schema migrations completed successfully"

  # Run data migration to import JSON data
  echo "📦 Running data migration..."
  if npm run db:migrate-data; then
    echo "✅ Data migration completed successfully"
  else
    echo "⚠️  Data migration failed, but continuing to start app..."
  fi
else
  echo "⚠️  Schema migration failed, skipping data migration..."
fi

# Start the Next.js application
echo "🌐 Starting Next.js server..."
exec npm start
