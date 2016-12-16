var Jobs = React.createClass({
  getInitialState: function() {
    return { jobs: this.props.data };
  },

  getDefaultProps: function() {
    return { jobs: [] };
  },

  render: function() {
    return(
      <div className='jobs'>
        <h2 className='title'>
          Jobs
        </h2>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Budget</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {this.state.jobs.map(function(job) {
              return <Job key={job.id} job={job} />
             }.bind(this))}
          </tbody>
        </table>
      </div>
    );
  }
});