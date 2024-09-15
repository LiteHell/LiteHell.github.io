import React from 'react';
import ReactDOM from 'react-dom/client';
import isBrowser from '../isBrowser';
import Portfolio from './portfolio';

if (isBrowser()) {
  const rootDiv = document.querySelector('body > #root')!;
  const portfolio = <Portfolio />;
  if (rootDiv.classList.contains('hydrated')) {
    ReactDOM.hydrateRoot(rootDiv, portfolio);
  } else {
    const root = ReactDOM.createRoot(rootDiv);
    root.render(portfolio);
  }
}
