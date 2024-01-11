import { createMockServer, initializeRouter, allowRelativeURLs } from '../../setupTests';
import { screen, waitFor, render, within } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createHandlers } from '../mocks/handlers/handlers';
import reportSeedsV1 from '../mocks/data/reportSeedsV1.json';
import reportSeedsV2 from '../mocks/data/reportSeedsV2.json';

describe('01 - Display a list of reports on the home page ("/")', async () => {
  let App, store, server, initialReports, version = "V1";
  let reportSeeds = reportSeedsV1;
  
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
    await import('../components/ReportsIndex');
    store  = (await import("../store")).default();
    App = await initializeRouter("/");
    
    localStorage.clear();
    const { handlers } = createHandlers(version, reportSeeds);
    server.resetHandlers(handlers);
  });
  
  describe('Using endpoints on the V1 Server', () => {
    beforeAll(() => {
      version = "V1";
      reportSeeds = reportSeedsV1;
      
      initialReports = reportSeeds;
      for (let report of Object.values(initialReports)) {
        initialReports[report.id] = { id: report.id };
      }
    });
    
    it('should update the Redux store with data from GET /api/reports after first render', async () => {
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );

      await waitFor(() => expect(store.getState()).toEqual({
        reports: initialReports
      }));
    });

    it('should render a list of reports received from GET /api/reports', async () => {
      const store  = (await import("../store")).default();
      const App = await initializeRouter("/");
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );

      await waitFor(() => expect(store.getState()).toEqual({
        reports: initialReports
      }));

      const reportList = screen.getByRole('list');
      const reportItems = within(reportList).getAllByRole('listitem');
      expect(reportItems).toHaveLength(5);

      const reportsArr = Object.values(initialReports);
      for (let idx = 0; idx < reportsArr.length; idx++) {
        const report = reportsArr[idx];
        const reportItem = reportItems[idx];
        expect(within(reportItem).getByText(`Report #${report.id}`)).toBeInTheDocument();
      }
    });
  });

  describe('Using endpoints on the V2 Server', () => {
    beforeAll(() => {
      version = "V2";
      reportSeeds = reportSeedsV2;
      
      initialReports = reportSeeds;
      for (let report of Object.values(initialReports)) {
        initialReports[report.id] = { id: report.id };
      }
    });
  
    it('should render a list of reports with an edit link and delete button for each report received from GET /api/reports', async () => {
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );

      await waitFor(() => expect(store.getState()).toEqual({
        reports: initialReports
      }));

      const reportList = screen.getByRole('list');
      const reportItems = within(reportList).getAllByRole('listitem');
      expect(reportItems).toHaveLength(2);

      const reportsArr = Object.values(initialReports);
      for (let idx = 0; idx < reportsArr.length; idx++) {
        const report = reportsArr[idx];
        const reportItem = reportItems[idx];
        const reportLink = within(reportItem).getByRole('link', { name: `Report #${report.id}` });
        expect(reportLink).toHaveAttribute('href', `/reports/${report.id}`);
        const reportEditLink = within(reportItem).getByRole('link', { name: "Edit" });
        expect(reportEditLink).toHaveAttribute('href', `/reports/${report.id}/edit`);
        expect(within(reportItem).getByRole('button', { name: "Delete" })).toBeInTheDocument();
      }
    });
  });
});
