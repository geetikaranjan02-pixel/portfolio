#!/bin/bash
cd "$(dirname "$0")"
echo "🚀 Starting portfolio server..."
echo "📍 Open your browser to: http://localhost:8000"
echo "✏️  Edit config.json, save, and refresh the page to see changes"
echo "⏹️  Press Ctrl+C to stop the server"
echo ""
python3 -m http.server 8000
