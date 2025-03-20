#!/bin/bash
# test-plugin.sh - Run before and after each major revision

echo "===== Jackalope Planet Test System ====="
echo "Testing for proper implementation of changes"

# 1. Check current branch
BRANCH=$(git branch --show-current)
echo "Testing branch: $BRANCH"

# 2. Build assets
echo "Building assets..."
npm run build

# 3. Run lint checks if available
if [ -f "package.json" ] && grep -q "lint" "package.json"; then
  echo "Running lint checks..."
  npm run lint
fi

# 4. Clear WP caches
echo "Clearing WordPress caches..."
cd /Users/masonlawlor/Sites/bonsai/site
wp @development cache flush
wp @development acorn optimize:clear
wp @development transient delete-all

# 5. Verify plugin activation
echo "Verifying plugin status..."
PLUGIN_STATUS=$(wp @development plugin status jackalope-planet)
echo "$PLUGIN_STATUS"

# 6. Deactivate and reactivate plugin
echo "Cycling plugin activation..."
wp @development plugin deactivate jackalope-planet
wp @development plugin activate jackalope-planet

# 7. Add version marker to JS
cd /Users/masonlawlor/Sites/bonsai/site/web/app/plugins/jackalope-planet
BRANCH_VERSION="$BRANCH-$(date +%Y%m%d%H%M)"
echo "Setting version marker: $BRANCH_VERSION"

# Check if version marker already exists
if grep -q "const JACKALOPE_VERSION" "src/js/jackalope-planet.js"; then
  # Update existing version marker
  sed -i '' -e "s/const JACKALOPE_VERSION = '.*';/const JACKALOPE_VERSION = '$BRANCH_VERSION';/" src/js/jackalope-planet.js
else
  # Insert version marker after import statements
  sed -i '' -e "/import/!b;n;n;a\\
const JACKALOPE_VERSION = '$BRANCH_VERSION';\\
console.log(\`Jackalope Planet \${JACKALOPE_VERSION} loaded\`);
" src/js/jackalope-planet.js
fi

# Rebuild with version marker
echo "Rebuilding with version marker..."
npm run build

echo "Test system setup complete!"
echo "-----------------------------"
echo "Next steps:"
echo "1. Visit your site and open browser console"
echo "2. Look for version marker: $BRANCH_VERSION"
echo "3. Complete visual feature checklist from .cursorrules"
echo "-----------------------------"
