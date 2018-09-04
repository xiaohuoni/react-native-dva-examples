import React from 'react'
import { AppRegistry } from 'react-native'

import dva from './src/utils/dva'
import Router, { routerMiddleware, routerReducer } from './src/router'
import appModel from './src/models/app'
import "./src/global"

const app = dva({
  initialState: {},
  models: [appModel],
  extraReducers: { router: routerReducer },
  onAction: [routerMiddleware],
  onError(e) {
    console.log('onError', e)
  },
})

const App = app.start(<Router />)

export default App
