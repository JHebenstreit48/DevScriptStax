import {
  isRouteErrorResponse,
  useLocation,
  useRouteError,
  Link,
} from "react-router-dom";

import { isKnownPath } from "@/domain/navigation/knownPaths";
import "@/scss/Page/Error.scss";

type PageState = "planned" | "not_found" | "unavailable";

export default function ErrorPage() {
  const err = useRouteError();
  const { pathname } = useLocation();

  const statusCode = isRouteErrorResponse(err) ? err.status : undefined;

  const state: PageState =
    statusCode === 404
      ? isKnownPath(pathname)
        ? "planned"
        : "not_found"
      : "unavailable";

  const title =
    state === "planned"
      ? "This page is in progress"
      : state === "not_found"
      ? "Page not found"
      : "Temporarily unavailable";

  const message =
    state === "planned"
      ? "This section is part of an actively developed notes platform. Navigation may be scaffolded before content is published as structure and integration are finalized."
      : state === "not_found"
      ? "This URL doesn’t match a published page. If you followed a link, it may have moved."
      : "Something didn’t load correctly. Please try again.";

  const statusLabel =
    state === "planned" ? "Planned" : state === "not_found" ? "Not found" : "Unavailable";

  // show debug details in dev only (keeps prod more polished)
  const showDetails = import.meta.env.DEV;

  return (
    <div className="errorPage">
      <div className="errorCard">
        <h1 className="errorTitle">{title}</h1>
        <p className="errorBody">{message}</p>

        <div className="errorMeta">
          <span className="errorStatus">
            <strong>Status:</strong> {statusLabel}
          </span>

          {showDetails && (
            <div className="errorDetails">
              <span>
                Path: <code>{pathname}</code>
              </span>
              {statusCode ? (
                <span>
                  HTTP: <code>{statusCode}</code>
                </span>
              ) : null}
            </div>
          )}
        </div>

        <div className="errorActions">
          <Link to="/" className="errorBtn errorBtnPrimary">
            Home
          </Link>
          <button className="errorBtn" onClick={() => window.history.back()}>
            Go back
          </button>
        </div>
      </div>
    </div>
  );
}