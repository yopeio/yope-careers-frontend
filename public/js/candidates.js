
class Candidates extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.prompt = 'Your personal recruiter';
    this.state = {
      candidates: []
    };
  }

  render() {
    return React.createElement(
      "div",
      { className: "well" },
      React.createElement(
        "p",
        null,
        this.prompt
      ),
      React.createElement(
        "div",
        { className: "form-group" },
        React.createElement("input", { ref: "query", className: "form-control", type: "text", placeholder: "search for a candidate" })
      ),
      React.createElement(
        "div",
        { className: "form-group" },
        React.createElement(
          "a",
          { className: "btn btn-primary", value: "Submit", onClick: this.submit },
          "Submit"
        )
      ),
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "h1",
          null,
          "List of Candidates"
        ),
        React.createElement(
          "table",
          { className: "table-striped table-condensed table table-bordered table-hover" },
          React.createElement(
            "tbody",
            null,
            this.state.candidates.map(candidate => React.createElement(
              "tr",
              { key: candidate.id },
              React.createElement(
                "td",
                null,
                candidate.profile.firstName,
                " ",
                candidate.profile.lastName
              )
            ))
          )
        )
      )
    );
  }

  //submit(event) {
  //}

  submit(event) {
    let query = this.refs.query;
    let candidate = { type: "CANDIDATE", profile: { lastName: query.value } };

    fetch(this.props['data-url'], {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        page: '0',
        size: '10',
        candidate: candidate
      })
    }).then(response => response.json()).then(candidates => this.setState({ candidates: candidates.body.elements }));
  }
}