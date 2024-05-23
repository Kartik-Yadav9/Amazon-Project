import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import Amazonweb from './Amazonweb';
import { StateProvider } from './StateProvider';
import reducer, { innerInitialState } from './reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    {/* first initialState is prop used in StateProvider component and other is empty basket in reducer */}

   <StateProvider initialState={innerInitialState} reducer={reducer}>
      <Amazonweb/>
   </StateProvider>

 
    
  </React.StrictMode>
);


