import { createMockServer, initializeRouter, allowRelativeURLs } from '../../setupTests';
import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { createHandlers } from '../mocks/handlers/handlers';
import reportSeedsV1 from '../mocks/data/reportSeedsV1.json';
import reportSeedsV2 from '../mocks/data/reportSeedsV2.json';

import { DB_KEYS } from '../mocks/storage';
const { reports: REPORT_DB_KEYS } = DB_KEYS;

describe('04 - Create a report at "/reports/new"', () => {
  let App, store, server, setItemInStorage, version = "V1"; 
  let reportSeeds = reportSeedsV1, user;

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
    App = await initializeRouter("/reports/new");
    
    localStorage.clear();
    let handlers;
    ({ handlers, setItemInStorage } = createHandlers(version, reportSeeds));
    server.resetHandlers(handlers);
    
    user = userEvent.setup();
  });
  
  async function createReport({ testInputUnderstanding, testInputImprovement, id, error = false }) {
    const understandingInput = screen.getByRole('textbox', {
      name: 'Understanding:'
    });
    const improvementInput = screen.getByRole('textbox', {
      name: 'Improvement:'
    });

    expect(understandingInput).toHaveValue('');
    expect(improvementInput).toHaveValue('');

    if (testInputUnderstanding != '')
      await user.type(understandingInput, testInputUnderstanding);
    if (testInputImprovement != '')
      await user.type(improvementInput, testInputImprovement);

    if (error)
      window.simulateCreateError();
    else
      setItemInStorage(REPORT_DB_KEYS.NEW_ID, id);
    
    const submitBtn = screen.getByRole('button', { name: 'Create Report' });
    await user.click(submitBtn);
  }
  
  describe('Using endpoints on the V1 Server', () => {
    beforeAll(() => {
      version = "V1";
      reportSeeds = reportSeedsV1;
    });
    
    it('should insert the new report into the Redux store and navigate to its detail page when POST /api/reports returns successfully', async () => {
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );
      
      await waitFor(() => expect(store.getState()).toEqual({ reports: {} }));

      const testInputUnderstanding = 'test create input understanding';
      const testInputImprovement = 'test create input improvement';
      const id = 10;
      
      await createReport({ testInputUnderstanding, testInputImprovement, id });

      const testPostResponse = {
        id,
        understanding: `${testInputUnderstanding} (newly created)`,
        improvement: `${testInputImprovement} (newly created)`
      };
      expect(store.getState()).toEqual({
        reports: { [testPostResponse.id]: testPostResponse }
      });

      // Check that it navigates to the show page of newly created report
      expect(screen.getByRole('columnheader', /Report #${id}/)).toBeInTheDocument();
    });

    it('should display errors on the form and NOT insert the report into the Redux store when POST /api/reports returns an error', async () => {
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );
      
      await waitFor(() => expect(store.getState()).toEqual({ reports: {} }));

      const testInputImprovement = 'test create input improvement';
      const testInputUnderstanding = '';
      const id = 10;
      
      expect(screen.queryByText(/Understanding is required/)).not.toBeInTheDocument();

      await createReport({ testInputUnderstanding, testInputImprovement, id, error: true });

      expect(screen.getByText(/Understanding is required/)).toBeInTheDocument();
      expect(store.getState()).toEqual({ reports: {} });

      // Check that it stays on the Create Report page on error
      expect(screen.getByRole('heading', { level: 2, name: /Create Report/ })).toBeInTheDocument();
    });
  });

  describe('Using endpoints on the V2 Server', () => {
    beforeAll(() => {
      version = "V2";
      reportSeeds = reportSeedsV2;
    });

    it('should insert the new report into the Redux store and navigate to its detail page when POST /api/reports returns successfully', async () => {
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );
      await waitFor(() => expect(store.getState()).toEqual({ reports: {} }));

      const testInputUnderstanding = 'test create input understanding';
      const testInputImprovement = 'test create input improvement';
      const id = 10;
      
      await createReport({ testInputUnderstanding, testInputImprovement, id });

      const testPostResponse = {
        id: 10,
        understanding: `${testInputUnderstanding} - recently added`,
        improvement: `${testInputImprovement} - recently added`
      };
      expect(store.getState()).toEqual({
        reports: { [testPostResponse.id]: testPostResponse }
      });

      // Check that it navigates to the show page of newly created report
      expect(screen.getByRole('columnheader', /Report #${id}/)).toBeInTheDocument();
    });
  });
});
