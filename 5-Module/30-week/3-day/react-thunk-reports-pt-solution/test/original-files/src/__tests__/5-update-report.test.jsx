import { createMockServer, initializeRouter, allowRelativeURLs } from '../../setupTests';
import { screen, waitFor, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { createHandlers } from '../mocks/handlers/handlers';
import reportSeedsV1 from '../mocks/data/reportSeedsV1.json';
import reportSeedsV2 from '../mocks/data/reportSeedsV2.json';

describe('05 - Update a report at "/reports/:reportId/edit"', () => {
  let App, store, server, version = "V1", reportSeeds = reportSeedsV1, user;
  
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
    const report = reportSeeds[2];
    store  = (await import("../store")).default();
    App = await initializeRouter(`/reports/${report.id}/edit`);
    
    localStorage.clear();
    const { handlers } = createHandlers(version, reportSeeds);
    server.resetHandlers(handlers);
    
    user = userEvent.setup();
  });

  async function updateReport({ report, testInputUnderstanding, testInputImprovement, error = false }) {
    const understandingInput = screen.getByRole('textbox', {
      name: 'Understanding:'
    });
    const improvementInput = screen.getByRole('textbox', {
      name: 'Improvement:'
    });

    expect(understandingInput).toHaveValue(report.understanding);
    expect(improvementInput).toHaveValue(report.improvement);

    await user.clear(understandingInput);
    await user.clear(improvementInput);
    
    if (testInputUnderstanding != '')
      await user.type(understandingInput, testInputUnderstanding);
    if (testInputImprovement != '')
      await user.type(improvementInput, testInputImprovement);

    if (error)
      window.simulateUpdateError();
    
    const submitBtn = screen.getByRole('button', { name: 'Update Report' });
    await user.click(submitBtn);
  }
  
  describe('Using endpoints on the V1 Server', () => {
    beforeAll(() => {
      version = "V1";
      reportSeeds = reportSeedsV1;
    });
    
    it('should update the report in the Redux store and navigate to its detail page when successfully submitted at PUT /api/reports/:reportId', async () => {
      const report = reportSeeds[2];
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );
      await waitFor(() => expect(store.getState()).toEqual({
        reports: { [report.id]: report }
      }));

      const testInputUnderstanding = 'test update input understanding';
      const testInputImprovement = 'test update input improvement';

      await updateReport({ report, testInputUnderstanding, testInputImprovement });
      
      const testUpdateResponse = {
        id: report.id,
        understanding: `${testInputUnderstanding} (recently updated)`,
        improvement: `${testInputImprovement} (recently updated)`
      };
      expect(store.getState()).toEqual({
        reports: { [testUpdateResponse.id]: testUpdateResponse }
      });

      // Check that it navigates to the show page of updated report
      expect(screen.getByRole('columnheader', /Report #${report.id}/)).toBeInTheDocument();
    });

    it('should display errors on the form and NOT update the report in the Redux store when PUT /api/reports/:reportId returns an error', async () => {
      const report = reportSeeds[2];
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );
      
      await waitFor(() => expect(store.getState()).toEqual({
        reports: { [report.id]: report }
      }));

      const testInputUnderstanding = 'test update input understanding';
      const testInputImprovement = '';
      
      expect(screen.queryByText(/Improvement is required/)).not.toBeInTheDocument();

      await updateReport({ report, testInputUnderstanding, testInputImprovement, error: true });

      expect(screen.getByText(/Improvement is required/)).toBeInTheDocument();
      expect(store.getState()).toEqual({
        reports: { [report.id]: report }
      });
      
      // Check that it stays on the Update Report page on error
      expect(screen.getByRole('heading', { level: 2, name: /Update Report/ })).toBeInTheDocument();
    });
  });

  describe('Using endpoints on the V2 Server', () => {
    beforeAll(() => {
      version = "V2";
      reportSeeds = reportSeedsV2;
    });

    it('should update the report in the Redux store and navigate to its detail page when successfully submitted at PUT /api/reports/:reportId', async () => {
      const report = reportSeeds[2];
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );
      await waitFor(() => expect(store.getState()).toEqual({
        reports: { [report.id]: report }
      }));

      const testInputUnderstanding = 'test update input understanding';
      const testInputImprovement = 'test update input improvement';

      await updateReport({ report, testInputUnderstanding, testInputImprovement });

      const testUpdateResponse = {
        id: report.id,
        understanding: 'test update input understanding - edited',
        improvement: 'test update input improvement - edited',
      };
      expect(store.getState()).toEqual({
        reports: { [testUpdateResponse.id]: testUpdateResponse }
      });

      // Check that it navigates to the show page of recently updated report
      expect(screen.getByRole('columnheader', /Report #${report.id}/)).toBeInTheDocument();
    });
  });
});
