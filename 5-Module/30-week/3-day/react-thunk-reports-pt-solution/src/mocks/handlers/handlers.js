import { http, HttpResponse, passthrough } from 'msw';
import { initializeStorage, DB_KEYS } from '../storage.js';

const { reports: REPORT_DB_KEYS } = DB_KEYS;

export function createHandlers(version, initialData, customHandlers = []) {
  const { getItemFromStorage, setItemInStorage } = version === "V1" ?
    initializeStorage(version, {
      [REPORT_DB_KEYS.SEED]: initialData,
      [REPORT_DB_KEYS.NEW_ID]: 6
    }) :
    initializeStorage(version, {
      [REPORT_DB_KEYS.SEED]: initialData,
      [REPORT_DB_KEYS.NEW_ID]: 7,
      [REPORT_DB_KEYS.CREATE_ERROR]: {
        status: 400,
        errors: {
          improvement: "Improvement must be more than 20 characters long",
        },
      },
      [REPORT_DB_KEYS.UPDATE_ERROR]: {
        status: 400,
        errors: {
          understanding: "Understanding must be more than 30 characters long",
        },
      },
      [REPORT_DB_KEYS.DELETE_ERROR]: {
        status: 403,
        message: "Forbidden",
      },
    }
  );

  function compileReports() {
    const reports = getItemFromStorage(REPORT_DB_KEYS.SEED);
    const createdReports = getItemFromStorage(REPORT_DB_KEYS.CREATE);
    const updatedReports = getItemFromStorage(REPORT_DB_KEYS.UPDATE);
    const deletedReports = getItemFromStorage(REPORT_DB_KEYS.DELETE);
    for (let report of createdReports) {
      reports[report.id] = report;
    }
    for (let report of updatedReports) {
      reports[report.id] = report;
    }
    for (let report of deletedReports) {
      delete reports[report.id];
    }
    return reports;
  }

  const handlers = [
    ...customHandlers,
    http.get("http://localhost:5173/api/reports", () => {
      return HttpResponse.json(
        Object.values(compileReports()).map((report) => ({ id: report.id })),
        { status: 200 }
      );
    }),
    http.get("http://localhost:5173/api/reports/:id", ({ params }) => {
      const { id } = params;
      const reports = compileReports();
      if (!(id in reports)) {
        return HttpResponse.json({ message: "Not Found" }, { status: 404 });
      }
      return HttpResponse.json(reports[id], { status: 200 });
    }),
    http.post("http://localhost:5173/api/reports", async ({ request }) => {
      const { improvement, understanding } = await request.json();
      if (getItemFromStorage(REPORT_DB_KEYS.IS_CREATE_ERROR_ACTIVE)) {
        const updateError = getItemFromStorage(REPORT_DB_KEYS.CREATE_ERROR);
        const { status, errors } = updateError;
        if (!status || !errors)
          throw new Error(
            "CREATE_ERROR needs object with status and errors keys"
          );
        return HttpResponse.json({ errors }, { status });
      }
      const newId = getItemFromStorage(REPORT_DB_KEYS.NEW_ID);
      if (!newId)
        throw new Error(
          "Test spec needs an NEW_ID in localStorage's mocked db"
        );
      const newReport = {
        id: newId,
        improvement:
          (improvement || "") + (version === "V1"
            ? " (newly created)"
            : " - recently added"),
        understanding:
          (understanding || "") + (version === "V1"
            ? " (newly created)"
            : " - recently added")
      };
      const createdReports = getItemFromStorage(REPORT_DB_KEYS.CREATE);
      createdReports.push(newReport);
      setItemInStorage(REPORT_DB_KEYS.CREATE, createdReports);
      setItemInStorage(REPORT_DB_KEYS.NEW_ID, newId + 1);
      return HttpResponse.json(newReport, { status: 201 });
    }),

    // updateHandler is defined at the bottom of this file
    http.put("http://localhost:5173/api/reports/:id", updateHandler),
    http.patch("http://localhost:5173/api/reports/:id", updateHandler),
    http.delete("http://localhost:5173/api/reports/:id", ({ params }) => {
      const isDeleteErrorActive = getItemFromStorage(
        REPORT_DB_KEYS.IS_DELETE_ERROR_ACTIVE
      );
      if (isDeleteErrorActive) {
        const deleteError = getItemFromStorage(REPORT_DB_KEYS.DELETE_ERROR);
        const { status, message } = deleteError;
        if (!status || !message)
          throw new Error(
            "DELETE_ERROR needs object with status and message keys"
          );
        return HttpResponse.json({ message }, { status });
      }
      const { id } = params;
      const reports = compileReports();
      if (!(id in reports)) {
        return HttpResponse.json({ message: "Not Found" }, { status: 404 });
      }
      const deletedReports = getItemFromStorage(REPORT_DB_KEYS.DELETE);
      deletedReports.push(reports[id]);
      setItemInStorage(REPORT_DB_KEYS.DELETE, deletedReports);
      return HttpResponse.json(
        { message: "Successfully deleted" },
        { status: 200 }
      );
    }),
    http.get("http://localhost:5173/*", () => passthrough()),
  ];

  async function updateHandler({ request, params }) {
    const { id } = params;
    const { improvement, understanding } = await request.json();
    if (getItemFromStorage(REPORT_DB_KEYS.IS_UPDATE_ERROR_ACTIVE)) {
      const updateError = getItemFromStorage(REPORT_DB_KEYS.UPDATE_ERROR);
      const { status, errors } = updateError;
      if (!status || !errors)
        throw new Error(
          "UPDATE_ERROR needs object with status and errors keys"
        );
      return HttpResponse.json({ errors }, { status });
    }
    const reports = compileReports();
    if (!(id in reports)) {
      return HttpResponse.json({ message: "Not Found" }, { status: 404 });
    }
    const report = reports[id];
    if (report.improvement !== improvement) {
      report.improvement =
        improvement + (version === "V1" ? " (recently updated)" : " - edited");
    }
    if (report.understanding !== understanding) {
      report.understanding =
        understanding + (version === "V1" ? " (recently updated)" : " - edited");
    }
    const updatedReports = getItemFromStorage(REPORT_DB_KEYS.UPDATE);
    updatedReports.push(report);
    setItemInStorage(REPORT_DB_KEYS.UPDATE, updatedReports);
    return HttpResponse.json(report, { status: 200 });
  }

  return {
    handlers,
    getItemFromStorage,
    setItemInStorage,
  };
}
