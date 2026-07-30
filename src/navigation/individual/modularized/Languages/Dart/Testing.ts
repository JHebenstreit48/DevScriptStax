import type { Subpage } from '@/types/navigation';

const Testing: Subpage = {
  name: "Testing",
  subpages: [
    {
      name: "Unit",
      subpages: [
        {
          name: "package:test",
          path: "/dart/testing/unit/package-test"
        },
        {
          name: "Matchers",
          path: "/dart/testing/unit/matchers"
        }
      ]
    },
    {
      name: "Fakes & Mocks",
      subpages: [
        {
          name: "mocktail",
          path: "/dart/testing/mocking/mocktail"
        },
        {
          name: "Hand-rolled Fakes",
          path: "/dart/testing/mocking/fakes"
        }
      ]
    },
    {
      name: "Integration",
      subpages: [
        {
          name: "HTTP Mocking",
          path: "/dart/testing/integration/http-mocking"
        },
        {
          name: "File I/O",
          path: "/dart/testing/integration/file-io"
        }
      ]
    },
    {
      name: "Quality & CI",
      subpages: [
        {
          name: "Coverage",
          path: "/dart/testing/quality/coverage"
        },
        {
          name: "CI Setup",
          path: "/dart/testing/quality/ci"
        }
      ]
    }
  ]
};

export default Testing;