import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Networking",
      subpages: [
        {
          name: "Networks & Drivers",
          path: "/tools/containerization/docker/advanced/networking/networks"
        },
        {
          name: "Ports, DNS, Connectivity",
          path: "/tools/containerization/docker/advanced/networking/ports-dns"
        }
      ]
    },
    {
      name: "Volumes & Storage",
      subpages: [
        {
          name: "Volumes / Persistence",
          path: "/tools/containerization/docker/volumes"
        },
        {
          name: "Bind Mounts & Backup",
          path: "/tools/containerization/docker/advanced/storage/mounts-backup"
        }
      ]
    },
    {
      name: "Security",
      subpages: [
        {
          name: "Best Practices",
          path: "/tools/containerization/docker/security"
        },
        {
          name: "Secrets & Scanning",
          path: "/tools/containerization/docker/advanced/security/secrets-scanning"
        }
      ]
    },
    {
      name: "Performance",
      subpages: [
        {
          name: "Image Optimization",
          path: "/tools/containerization/docker/image-optimization"
        },
        {
          name: "Build Cache & buildx",
          path: "/tools/containerization/docker/advanced/perf/build-cache-buildx"
        }
      ]
    },
    {
      name: "Compose Advanced",
      subpages: [
        {
          name: "Profiles & Overrides",
          path: "/tools/containerization/docker/advanced/compose/profiles-overrides"
        },
        {
          name: "Prod Deploy & Env Files",
          path: "/tools/containerization/docker/advanced/compose/prod-env"
        }
      ]
    },
    {
      name: "Debug & Troubleshoot",
      subpages: [
        {
          name: "Logs / Exec / Inspect",
          path: "/tools/containerization/docker/advanced/debug/logs-exec-inspect"
        },
        {
          name: "Common Issues",
          path: "/tools/containerization/docker/advanced/debug/common-issues"
        }
      ]
    }
  ]
};

export default Advanced;