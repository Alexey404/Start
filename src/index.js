import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'
import App from './App'
import './index.css'
import store from './Redux/redux-store'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <BrowserRouter>
    <QueryParamProvider ReactRouterRoute={Route}>
      <StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </StrictMode>
    </QueryParamProvider>
  </BrowserRouter>,
  document.getElementById('root')
)

reportWebVitals()
