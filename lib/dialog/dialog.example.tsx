import React, {Fragment, useState} from 'react';
import Dialog, {confirm, alert, model} from './dialog';

export default function () {
  const [x, setX] = useState(false);

  return (
    <div>
      <h1>dialog</h1>
      <div>
        <button onClick={() => setX(!x)}>点我dialog</button>
        <Dialog visible={x} buttons={
          <Fragment>
            <button onClick={() => {setX(false);}}>OK</button>
            <button onClick={() => {setX(false);}}>Cancel</button>
          </Fragment>
        } onClose={() => {setX(false);}} closeOnClickMask={false}>
          <strong>我是dialog</strong>
        </Dialog>
      </div>

      <h1>model</h1>
      <div>
        <button onClick={() => model('hi')}>model</button>
      </div>

      <h1>alert</h1>
      <div>
        <button onClick={() => alert('1')}>alert</button>
      </div>

      <h1>confirm</h1>
      <div>
        <button onClick={() => confirm('1', () => {}, () => {})}>
          confirm
        </button>
      </div>
    </div>
  );
}