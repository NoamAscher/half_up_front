var Job = React.createClass({

  jobRow: function() {
    return(
      <tr>
        <td>{this.props.job.id}</td>
        <td>{this.props.job.budget}</td>
        <td>{this.props.job.created_at}</td>
      </tr>
    );
  },

  render: function() {
    return this.jobRow();
  }
});