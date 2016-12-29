var Milestones = React.createClass({
  getInitialState: function() {
    //let parsedMstones = JSON.parse(this.props.data);
   // return { milestones: parsedMstones };
    return { milestones: this.props.data };
  },

  getDefaultProps: function() {
    return { milestones: [] };
  },

  render: function() {

    let milestones2 = this.state.milestones.map((milestone) => {
      return this.renderMilestone(milestone);
    });

    return(
      <div>
      <div>{milestones2}</div>
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
      </div>
    );
  }, //,

  renderMilestone(milestone) {
    return (
      <article key={milestone.id}>
        <p>Name { milestone.name }</p>
        <p>Payment Percentage { milestone.payment_percentage }</p>
        <p>Start Date { milestone.start_date }</p>
        <p>End Date { milestone.end_date }</p>
        <br />
      </article>
    );
  }

  // componentDidMount() {
  //   this.setupSubscription();
  // },

  // updateMilestones(milestone) {
  //   let milestoney = JSON.parse(milestone);
  //   this.setState({milestone: milestoney});
  // },

  // setupSubscription(){

  //   App.milestones = App.cable.subscriptions.create("MilestonesChannel", {
  //     milestone_name: this.state.milestone.name,

  //     connected: function () {
  //       setTimeout(() => this.perform('follow',
  //                                     { milestone_name: this.milestone_name}), 1000 );
  //     },

  //     received: function (data) {
  //       this.updateMilestones(data.milestone);
  //     },

  //     updateMilestones: this.updateMilestones

  //   });
  // }
});