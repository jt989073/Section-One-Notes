import { setupWorker } from 'msw/browser';
import { createHandlers } from './handlers/handlers';

let reports = {}, version;

if (import.meta.env.VITE_MOCKED_SERVER_VERSION === "2") {
  version = "V2";
  reports = (await import("./data/reportSeedsV2.json")).default;
} else {
  version = "V1";
  reports = (await import("./data/reportSeedsV1.json")).default;
}

const { handlers } = createHandlers(version, reports);
// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...handlers);
