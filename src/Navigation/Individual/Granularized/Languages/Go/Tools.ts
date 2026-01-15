import type { Subpage } from '@/types/navigation';

const Tools: Subpage = {
  name: "Tools",
  subpages: [
    {
      name: "CLI",
      subpages: [
        {
          name: "go run/build",
          path: "/go/tools/cli/run-build"
        },
        {
          name: "go fmt/mod tidy",
          path: "/go/tools/cli/fmt-mod"
        }
      ]
    },
    {
      name: "Quality",
      subpages: [
        {
          name: "go vet & staticcheck",
          path: "/go/tools/quality/vet-staticcheck"
        },
        {
          name: "lint (golangci-lint)",
          path: "/go/tools/quality/golangci-lint"
        }
      ]
    },
    {
      name: "IDE",
      subpages: [
        {
          name: "VS Code (gopls)",
          path: "/go/tools/ide/vscode-gopls"
        },
        {
          name: "GoLand",
          path: "/go/tools/ide/goland"
        }
      ]
    }
  ]
};

export default Tools;