import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers/combineReducers'
import rootSaga from './sagas/rootSaga'

export default function mainStore(initialState) {

  const sagaMiddleware = createSagaMiddleware();

  const finalCreateStore = compose(
    applyMiddleware(
      sagaMiddleware
    )
  )(createStore);


  let store = finalCreateStore(reducers, initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  sagaMiddleware.run(rootSaga);
  return store;
}