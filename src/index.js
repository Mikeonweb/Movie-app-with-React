// react 17 import method - not suported in 18
// import React from 'react';
// import ReactDom from 'react-dom';

// import App from './App.js';
// ReactDom.render(<App />, document.getElementById('root'));

//react 18 import method
import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.js';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<App />);
