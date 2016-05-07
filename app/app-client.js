/*global React */
'use strict';

let render;

render = function () {
  React.render(
    <div>Hello World</div>,
    document.getElementById('content')
  );
};

render();
