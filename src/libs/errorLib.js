import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

const isLocal = process.env.NODE_ENV === "development";

export function initSentry() {
  if (isLocal) {
    return;
  }
  Sentry.init({
    dsn:
      "https://74a99bb72aa141c1a3cc139656325ea8@o467888.ingest.sentry.io/5494996",
    integrations: [new Integrations.BrowserTracing()],

    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0,
  });
}
export function logError(error, errorInfo = null) {
  if (isLocal) {
    return;
  }
  Sentry.withScope((scope) => {
    errorInfo && scope.setExtras(errorInfo);
    Sentry.captureException(error);
  });
}

export function onError(error) {
    let errorInfo = {};
    let message = error.toString();

    // Auth errors
   if (!(error instanceof Error) && error.message) {
     errorInfo = error;
     message = error.message;
     error = new Error(message);
     // API errors
   } else if (error.config && error.config.url) {
     errorInfo.url = error.config.url;
   }

   logError(error, errorInfo);
   
   alert(message);
}