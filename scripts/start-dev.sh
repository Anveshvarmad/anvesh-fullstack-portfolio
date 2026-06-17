#!/usr/bin/env bash
set -e

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
BACKEND_DIR="$ROOT_DIR/backend"
FRONTEND_DIR="$ROOT_DIR/frontend"

if [ ! -d "$BACKEND_DIR/.venv" ]; then
  echo "Missing backend virtual environment. Run the setup commands in README.md first."
  exit 1
fi

source "$BACKEND_DIR/.venv/bin/activate"

cleanup() {
  kill "$DJANGO_PID" "$VITE_PID" 2>/dev/null || true
}
trap cleanup EXIT

cd "$BACKEND_DIR"
python manage.py runserver 127.0.0.1:8000 &
DJANGO_PID=$!

cd "$FRONTEND_DIR"
npm run dev -- --host 127.0.0.1 &
VITE_PID=$!

wait
