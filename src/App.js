import './App.css';
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {Reducer} from './components/Reducer/Reducer'
import Todo from './components/Todo'
import thunk from 'redux-thunk'
import React from 'react'

const store=createStore(Reducer,applyMiddleware(thunk))

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Todo />
      </Provider>
    </div>
  );
}

export default App;
