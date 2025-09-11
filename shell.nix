{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = with pkgs; [
    nodejs_20
    nodePackages.npm
    nodePackages.yarn
    nodePackages.pnpm
    git
  ];

  shellHook = ''
    echo "🚀 Moldova Security Forum 2024 Development Environment"
    echo "Node.js version: $(node --version)"
    echo "NPM version: $(npm --version)"
    echo ""
    echo "Available commands:"
    echo "  npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias '@/*'"
    echo "  npm run dev"
    echo "  npm run build"
    echo "  npm run lint"
    echo ""
    echo "Ready to start development! 🎯"
  '';
}