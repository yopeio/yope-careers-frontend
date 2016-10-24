
class Candidates extends React.Component {
  constructor(props) {    
    super(props)
    this.submit = this.submit.bind(this)
    this.prompt = 'Your personal recruiter'
    this.state = {
      candidates: []
    }
  }

  render() {
    return <div className="well">
        <p>{this.prompt}</p>
        <div className="form-group">
          <input ref="query" className="form-control" type="text" placeholder="search for a candidate"/>
        </div>
        <div className="form-group">
          <a className="btn btn-primary" value="Submit" onClick={this.submit}>Submit</a>
        </div>
        <div className="container">
        <h1>List of Candidates</h1>
        <table className="table-striped table-condensed table table-bordered table-hover">
          <tbody>{this.state.candidates.map((candidate)=>
            <tr key={candidate.id}>
              <td>{candidate.profile.firstName} {candidate.profile.lastName}</td>
            </tr>)}
          </tbody>
        </table>
      </div>
      </div>
        
  }

  //submit(event) {
  //}

  submit(event) {
    let query = this.refs.query
    let candidate = { type: "CANDIDATE", profile: {lastName: query.value}};

    fetch(this.props['data-url'], {
      method: 'POST', 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        page: '0',
        size: '10',
        candidate: candidate
      })
    })
      .then((response)=>response.json())
      .then((candidates)=>this.setState({candidates: candidates.body.elements}))
  }
}