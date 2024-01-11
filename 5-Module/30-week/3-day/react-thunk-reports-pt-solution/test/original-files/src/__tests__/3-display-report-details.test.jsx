import { createMockServer, initializeRouter, allowRelativeURLs } from '../../setupTests';
import { screen, waitFor, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { createHandlers } from '../mocks/handlers/handlers';
import reportSeedsV1 from '../mocks/data/reportSeedsV1.json';
import reportSeedsV2 from '../mocks/data/reportSeedsV2.json';

describe('03 - Display a report\'s details on "/reports/:reportId"', () => {
  let App, store, server, reportsArr, version = "V1", reportSeeds = reportSeedsV1;
  
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
    const report = reportsArr[0];
    store  = (await import("../store")).default();
    App = await initializeRouter(`/reports/${report.id}`);
    
    localStorage.clear();
    const { handlers } = createHandlers(version, reportSeeds);
    server.resetHandlers(handlers);
  });
  
  describe('Using endpoints on the V1 Server"', () => {
    beforeAll(() => {
      version = "V1";
      reportSeeds = reportSeedsV1;
      
      reportsArr = Object.values(reportSeedsV1);
    });

    it('should update the Redux store with data from GET /api/reports/:reportId after first render', async () => {
      const { rerender } = render(
        <Provider store={store}>
          <App />
        </Provider>
      );

      for (let reportIdx = 0; reportIdx < reportsArr.length; reportIdx++) {
        const report = reportsArr[reportIdx];
        if (reportIdx !== 0) {
          store  = (await import("../store")).default();
          App = await initializeRouter(`/reports/${report.id}`);
          rerender(
            <Provider store={store}>
              <App />
            </Provider>
          );
        }
        await waitFor(() => expect(store.getState()).toEqual({
          reports: { [report.id]: report }
        }));
      }
    });

    it('should show a report\'s improvement and understanding received from GET /api/reports/:reportId', async () => {
      const { rerender } = render(
        <Provider store={store}>
          <App />
        </Provider>
      );
      
      for (let reportIdx = 0; reportIdx < reportsArr.length; reportIdx++) {
        const report = reportsArr[reportIdx];
        if (reportIdx !== 0) {
          store  = (await import("../store")).default();
          App = await initializeRouter(`/reports/${report.id}`);
          rerender(
            <Provider store={store}>
              <App />
            </Provider>
          );
        }
        await waitFor(() => expect(store.getState()).toEqual({
          reports: { [report.id]: report }
        }));
        await waitFor(() => expect(document.body).toHaveTextContent(`Improvement:${report.improvement}`));
        expect(document.body).toHaveTextContent(`Understanding:${report.understanding}`);
      }
    });
  });

  describe('Using endpoints on the V2 Server"', () => {
    beforeAll(() => {
      version = "V2";
      reportSeeds = reportSeedsV2;
    });

    it('should have two reports in the Redux store if user navigates from one detail page to another', async () => {
      const user = userEvent.setup();
      const [report1, report2] = Object.values(reportSeedsV2);
      const App = await initializeRouter(`/reports/${report1.id}`);
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );

      await waitFor(() => expect(store.getState()).toEqual({
        reports: { [report1.id]: report1 }
      }));

      const goToReportInput = screen.getByRole('spinbutton');
      await user.clear(goToReportInput);
      await user.type(goToReportInput, `${report2.id}`);
      
      const submitBtn = screen.getByRole('button', { name: 'Go!' });
      await user.click(submitBtn);
      
      expect(store.getState()).toEqual({
        reports: {
          [report1.id]: report1,
          [report2.id]: report2
        }
      });
    });

    it('should show a report\'s improvement and understanding received from GET /api/reports/:reportId and include a "Back to Report Index" link', async () => {
      let store  = (await import("../store")).default();
      let App = await initializeRouter(`/`);
      const { rerender } = render(
        <Provider store={store}>
          <App />
        </Provider>
      );

      for (let report of Object.values(reportSeedsV2)) {
        let store  = (await import("../store")).default();
        let App = await initializeRouter(`/reports/${report.id}`);
        rerender(
          <Provider store={store}>
            <App />
          </Provider>
        );
        await waitFor(() => expect(store.getState()).toEqual({
          reports: { [report.id]: report }
        }));
        await waitFor(() => expect(document.body).toHaveTextContent(`Improvement:${report.improvement}`));
        expect(document.body).toHaveTextContent(`Understanding:${report.understanding}`);
        const backToReportsLink = screen.getByRole('link', {
          name: 'Back to Report Index',
        });
        expect(backToReportsLink).toBeInTheDocument();
        expect(backToReportsLink).toHaveAttribute('href', `/`);
      }
    });
  });
});
