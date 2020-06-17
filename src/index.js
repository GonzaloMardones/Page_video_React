import React from 'react'
import ReactDoM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux' 

import App from './routes/App'

ReactDoM.render(
    <Provider>
        <App/>
    </Provider>,
     
    document.getElementById('app')
)