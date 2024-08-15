import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App';
import { FireBaseContext} from './Components/store/FireBasecontext';
import Context from './Components/store/FireBasecontext';
import  Firebase from './firebase/config.jsx'


// ReactDOM.createroot(
//   <FireBaseContext.Provider value={{Firebase}}>
//     <App />
//   </FireBaseContext.Provider>,
//   document.getElementById('root')
// );

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <FireBaseContext.Provider value={{Firebase}}>
        <Context>
        <App />
        </Context>
      </FireBaseContext.Provider>
    </React.StrictMode>,
  )
