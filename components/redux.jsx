import React, { useState } from 'react';
import { Button, TextField, Input } from '@material-ui/core';
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './store';
import style from './style.css';

const ReduxComponent = () => {
  const mainStore = useSelector((state) => state);
  const dispatch = useDispatch();
  const [inputState, setInputState] = useState('');

  console.log(mainStore, 'ОСНОВНОЕ ХРАНИЛИЩЕ');

  const handleChange = (value) => {
    setInputState(value);
  };

  return (
    <div>
      <Input
        value={inputState}
        onChange={(e) => handleChange(e.target.value)}
      />
      <Button
        onClick={() => {
          dispatch({
            type: 'ADD_TODO',
            text: `${inputState}`,
          });
        }}
      >
        Добавить
      </Button>
      <Button onClick={() => dispatch({ type: 'RESET_LIST' })}>Удалить</Button>
      <div>
        {mainStore.map((i) => <div className={style.to_do}>{i.text}</div>)}
      </div>
    </div>
  );
};

const Main = () => (
  <Provider store={store}>
    <ReduxComponent />
  </Provider>
);

export default Main;
