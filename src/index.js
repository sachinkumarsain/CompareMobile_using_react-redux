import React from 'react';
import ReactDOM from 'react-dom/client';
import First from './CompareMoblie/First';
import Store from './CompareMoblie/Store';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={Store}>
        <First/>
    </Provider>
 
);

