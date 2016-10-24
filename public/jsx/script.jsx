let dataUrl = 'http://localhost:8081/user/search'
ReactDOM.render(
  <div>
    <Candidates data-url={dataUrl}/>
  </div>,
  document.getElementById('content')
)