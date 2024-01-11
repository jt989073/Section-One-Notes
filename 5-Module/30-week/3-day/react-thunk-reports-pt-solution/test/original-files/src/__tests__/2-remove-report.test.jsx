import { createMockServer, initializeRouter, allowRelativeURLs } from '../../setupTests';
import { screen, waitFor, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { createHandlers } from '../mocks/handlers/handlers';
import reportSeedsV1 from '../mocks/data/reportSeedsV1.json';
import reportSeedsV2 from '../mocks/data/reportSeedsV2.json';

import { DB_KEYS } from '../mocks/storage';
const { reports: REPORT_DB_KEYS } = DB_KEYS;

describe('02 - Remove a report by clicking a "Delete" button on the home page ("/")', () => {
  let App, store, server, initialReports, version = "V1";
  let reportSeeds = reportSeedsV1, getItemFromStorage, user;

  beforeAll(() => {
    localStorage.clear();
    const { handlers } = createHandlers(version, reportSeeds);
    server = createMockServer(handlers);
    server.openServer();
    
    // Must be called after openServer()
    allowRelativeURLs();
  });
  
  afterAll(() => {
    server.closeServer();
  });
  
  beforeEach(async () => {
    store  = (await import("../store")).default();
    App = await initializeRouter("/");
      
    localStorage.clear();
    let handlers;
    ({ handlers, getItemFromStorage } = createHandlers(version, reportSeeds));
    server.resetHandlers(handlers);
    
    user = userEvent.setup();
  });
  
  describe('Using endpoints on the V1 Server', () => {
    beforeAll(() => {
      version = "V1";
      reportSeeds = reportSeedsV1;
      
      initialReports = reportSeedsV1;
      for (let report of Object.values(initialReports)) {
        initialReports[report.id] = { id: report.id };
      }
    });

    it('should call DELETE /api/reports/:id and update the Redux store when the report\'s "Delete" button is clicked', async () => {
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );

      await waitFor(() => expect(store.getState()).toEqual({
        reports: initialReports
      }));

      const reports = Object.values(initialReports);
      const shuffledReportIndexes = Object.keys(reports).shuffle();
      const deleteRecordButtons = screen.getAllByRole('button', {
        name: 'Delete'
      });
      expect(deleteRecordButtons).toHaveLength(5);

      let newReports = { ...initialReports };
      for (let idx of shuffledReportIndexes) {
        const report = reports[idx];
        expect(screen.getByText(`Report #${report.id}`)).toBeInTheDocument();
        await user.click(deleteRecordButtons[idx]);
        expect(screen.queryByText(`Report #${report.id}`)).not.toBeInTheDocument();
        delete newReports[report.id];
        expect(store.getState()).toEqual({
          reports: newReports
        });
        const deletedServerReports = getItemFromStorage(REPORT_DB_KEYS.DELETE);
        expect(report.id).toEqual(deletedServerReports[deletedServerReports.length - 1].id);
      }
      expect((screen.queryAllByRole('button', {
        name: 'Delete'
      }))).toHaveLength(0);
    });

    it('should NOT remove the report from the page or the Redux store when DELETE /api/reports/:id returns an error', async () => {
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );
      
      await waitFor(() => expect(store.getState()).toEqual({
        reports: initialReports
      }));

      const deleteRecordButtons = screen.getAllByRole('button', {
        name: 'Delete'
      });
      expect(deleteRecordButtons).toHaveLength(5);

      const reports = Object.values(initialReports);
      const shuffledReportIndexes = Object.keys(reports).shuffle();
      window.simulateDeleteError();
      for (let idx of shuffledReportIndexes) {
        const report = reports[idx];
        expect(screen.getByText(`Report #${report.id}`)).toBeInTheDocument();
        await user.click(deleteRecordButtons[idx]);
      }

      expect((screen.getAllByRole('button', {
        name: 'Delete'
      }))).toHaveLength(5);
      const deletedServerReports = getItemFromStorage(REPORT_DB_KEYS.DELETE);
      expect(deletedServerReports).toHaveLength(0);

      for (let idx of shuffledReportIndexes) {
        const report = reports[idx];
        expect(screen.getByText(`Report #${report.id}`)).toBeInTheDocument();
      }
    });
  });

  describe('Using endpoints on the V2 Server', () => {
    beforeAll(() => {
      version = "V2";
      reportSeeds = reportSeedsV2;
      
      initialReports = reportSeedsV2;
      for (let report of Object.values(initialReports)) {
        initialReports[report.id] = { id: report.id };
      }
    });
    
    it('should call DELETE /api/reports/:id and update the Redux store when the report\'s "Delete" button is clicked', async () => {
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );

      await waitFor(() => expect(store.getState()).toEqual({
        reports: initialReports
      }));

      const reports = Object.values(initialReports);
      const shuffledReportIndexes = Object.keys(reports).shuffle();
      const deleteRecordButtons = screen.getAllByRole('button', {
        name: 'Delete'
      });
      expect(deleteRecordButtons).toHaveLength(2);

      let newReports = { ...initialReports };
      for (let idx of shuffledReportIndexes) {
        const report = reports[idx];
        expect(screen.getByText(`Report #${report.id}`)).toBeInTheDocument();
        await user.click(deleteRecordButtons[idx]);
        expect(screen.queryByText(`Report #${report.id}`)).not.toBeInTheDocument();
        delete newReports[report.id];
        expect(store.getState()).toEqual({
          reports: newReports
        });
        const deletedServerReports = getItemFromStorage(REPORT_DB_KEYS.DELETE);
        expect(report.id).toEqual(deletedServerReports[deletedServerReports.length - 1].id);
      }
      expect((screen.queryAllByRole('button', {
        name: 'Delete',
      }))).toHaveLength(0);
    });
  });
});
