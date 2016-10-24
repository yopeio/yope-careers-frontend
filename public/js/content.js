var candidates = require('./js/candidates.js');

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.prompt = 'Your personal recruiter';
  }
  mysubmit(event) {
    let query = this.refs.query;
    console.log(ReactDOM.findDOMNode(query).value);
  }
  render() {
    return React.createElement(
      'div',
      { className: 'well' },
      React.createElement(
        'p',
        null,
        this.prompt
      ),
      React.createElement(
        'div',
        { className: 'form-group' },
        React.createElement('input', { ref: 'query', className: 'form-control', type: 'text', placeholder: 'search for a candidate' })
      ),
      React.createElement(
        'div',
        { className: 'form-group' },
        React.createElement(
          'a',
          { className: 'btn btn-primary', value: 'Submit', onClick: this.submit },
          'Submit'
        )
      )
    );
  }
}