#!/usr/bin/env bash

set -e

if [ -z "$1" ]; then
  echo "Usage: ./deploy.sh [preview|prod]"
  echo ""
  echo "  preview  Start local dev server with wrangler dev"
  echo "  prod     Deploy Worker to production (ayrhart.net)"
  exit 1
fi

case "$1" in
  preview)
    echo "Starting local dev server..."
    npx wrangler dev
    ;;
  prod)
    echo "Deploying Worker to production..."
    npx wrangler deploy
    echo "Production deployed to ayrhart.net"
    ;;
  *)
    echo "Error: Invalid argument '$1'"
    echo "Usage: ./deploy.sh [preview|prod]"
    exit 1
    ;;
esac
