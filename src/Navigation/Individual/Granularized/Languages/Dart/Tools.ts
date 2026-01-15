import type { Subpage } from '@/types/navigation';

const Tools: Subpage = {
  name: "Tools",
  subpages: [
    {
      name: "CLI",
      subpages: [
        {
          name: "dart run",
          path: "/dart/tools/cli/dart-run"
        },
        {
          name: "dart format",
          path: "/dart/tools/cli/dart-format"
        }
      ]
    },
    {
      name: "Package Mgmt",
      subpages: [
        {
          name: "pubspec.yaml",
          path: "/dart/tools/pkg/pubspec"
        },
        {
          name: "pub get/upgrade",
          path: "/dart/tools/pkg/pub-get-upgrade"
        }
      ]
    },
    {
      name: "IDE Support",
      subpages: [
        {
          name: "VS Code",
          path: "/dart/tools/ide/vscode"
        },
        {
          name: "IntelliJ/Android Studio",
          path: "/dart/tools/ide/intellij"
        }
      ]
    },
    {
      name: "Analyzer & Lints",
      subpages: [
        {
          name: "dart analyze",
          path: "/dart/tools/analyze/dart-analyze"
        },
        {
          name: "lints & rules",
          path: "/dart/tools/analyze/lints-rules"
        }
      ]
    }
  ]
};

export default Tools;