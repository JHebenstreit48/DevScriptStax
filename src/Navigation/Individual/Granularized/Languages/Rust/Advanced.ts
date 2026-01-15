import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Async & Concurrency",
      subpages: [
        {
          name: "Async/Await",
          path: "/languages/rust/advanced/async-concurrency/async-await"
        },
        {
          name: "Threads & Channels",
          path: "/languages/rust/advanced/async-concurrency/threads-channels"
        },
        {
          name: "Tokio Basics",
          path: "/languages/rust/advanced/async-concurrency/tokio-basics"
        }
      ]
    },
    {
      name: "Web (Rust)",
      subpages: [
        {
          name: "HTTP Servers (Axum)",
          path: "/languages/rust/advanced/web/axum-http-servers"
        },
        {
          name: "HTTP Servers (Actix)",
          path: "/languages/rust/advanced/web/actix-http-servers"
        },
        {
          name: "Request/Response",
          path: "/languages/rust/advanced/web/request-response"
        }
      ]
    },
    {
      name: "WASM",
      subpages: [
        {
          name: "wasm-bindgen",
          path: "/languages/rust/advanced/wasm/wasm-bindgen"
        },
        {
          name: "wasm-pack",
          path: "/languages/rust/advanced/wasm/wasm-pack"
        }
      ]
    },
    {
      name: "Interop & Perf",
      subpages: [
        {
          name: "FFI (C/C++)",
          path: "/languages/rust/advanced/interop-perf/ffi"
        },
        {
          name: "Profiling & Optimizing",
          path: "/languages/rust/advanced/interop-perf/profiling-optimizing"
        }
      ]
    },
    {
      name: "Quality",
      subpages: [
        {
          name: "Testing (cargo test)",
          path: "/languages/rust/advanced/quality/testing-cargo-test"
        },
        {
          name: "Benchmarking (criterion)",
          path: "/languages/rust/advanced/quality/benchmarking-criterion"
        }
      ]
    }
  ]
};

export default Advanced;