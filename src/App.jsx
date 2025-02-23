import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Router from './routers/Router';
import { Provider } from 'react-redux';
import store from './redex/configStore';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <Router />
          </Layout>
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
