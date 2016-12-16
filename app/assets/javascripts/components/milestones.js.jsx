var Milestones = React.createClass({
  getInitialState: function() {
    return { milestones: this.props.data };
  },

  getDefaultProps: function() {
    return { milestones: [] };
  },

  render: function() {
    return(
      <div className='milestones'>
        <h3 className='title'>
          Listing Some Data for All Milestones (All of them)
        </h3>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Payment Percentage</th>
              <th>Start Date</th>
              <th>End Date</th>
            </tr>
          </thead>
          <tbody>
            {this.state.milestones.map(function(milestone) {
              return <Milestone key={milestone.id} milestone={milestone} />
             }.bind(this))}
          </tbody>
        </table>
      </div>
    );
  }
});