import React from 'react';
import { render } from 'react-dom';
import UpDownCounter from './upDownComponent';

function App () {
  return <div>
    <UpDownCounter/>
    <UpDownCounter/>
    <UpDownCounter/>
  </div>

}

render (<App/>, document.getElementById("root"));