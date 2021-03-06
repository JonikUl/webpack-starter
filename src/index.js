import component from './simple-components/dom';
import './theme/main.css';

let element = component();

document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./simple-components/dom', () => {
    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
  });
}

import './simple-components/javascript'