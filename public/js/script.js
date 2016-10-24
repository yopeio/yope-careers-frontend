let dataUrl = 'http://localhost:8081/user/search';
ReactDOM.render(React.createElement(
  'div',
  null,
  React.createElement(Candidates, { 'data-url': dataUrl })
), document.getElementById('content'));