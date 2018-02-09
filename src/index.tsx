import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import 'glamor/reset'
import './index.css'

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement)
registerServiceWorker()
