import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Router from './routers/Router';
import { Provider } from 'react-redux';
import store from './redex/configStore';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <Router />
          </Layout>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
