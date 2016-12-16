var Milestone = React.createClass({

  milestoneRow: function() {
    return(
      <tr>
        <td>{this.props.milestone.name}</td>
        <td>{this.props.milestone.payment_percentage}</td>
        <td>{this.props.milestone.start_date}</td>
        <td>{this.props.milestone.end_date}</td>
      </tr>
    );
  },

  render: function() {
    return this.milestoneRow();
  }
});