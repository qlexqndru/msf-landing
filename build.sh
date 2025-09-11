#!/bin/bash
set -e

# Remove problematic files if they exist
rm -f package-lock.json
rm -rf node_modules
rm -rf .next
rm -rf out

# Install dependencies
npm install

# Build the project
npm run build