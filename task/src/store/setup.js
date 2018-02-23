import { AsyncStorage } from 'react-native';
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
import { persistStore, autoRehydrate } from 'redux-persist';
import promise from './promise';
import array from './array';
import whitelist from './whitelist';
import reducers from '../reducers';

export default function setup(done) {
  const isDev = global.isDebuggingInChrome || __DEV__;
  const logger = createLogger({
      duration : true
  });
  const middleware = [
      autoRehydrate(),
      applyMiddleware(...[thunk, promise, array, logger])
  ];

  if (isDev) {
    middleware.push(applyMiddleware(require('redux-immutable-state-invariant').default()));
  }
  
  const store = createStore(reducers, {}, compose(...middleware));

  // Attach the store to the Chrome debug window
  if (global.isDebuggingInChrome) {
    window.store = store;
  }

  persistStore(store, { whitelist, storage: AsyncStorage }, () => done(store));
}
