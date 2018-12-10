import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import * as serviceWorker from './serviceWorker';

import { ContextOneProvider } from "./context";
//import SimpleCard from './SimpleCard'

//ReactDOM.render(<Counter />, document.getElementById('root'));

function main(target, container) {
    ReactDOM.render(target, container);
  }
  
  main(
    <ContextOneProvider>
      <Counter />
      {/* <SimpleCard /> */}
    </ContextOneProvider>,
    document.getElementById("root")
  )

  serviceWorker.register();
