import * as React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { Home } from './pages/home.page'

export const Router = () => (
  <BrowserRouter>
    <Route exact path="/" component={Home} />
  </BrowserRouter>
)
