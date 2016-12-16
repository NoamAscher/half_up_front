var Milestones = React.createClass({
  getInitialState: function() {
    return { milestones: this.props.data };
  },

  getDefaultProps: function() {
    return { milestones: [] };
  },

  // componentDidMount() {
  //   this.socket = new WebSocketRails('127.0.0.1:3000/websocket', false);
  //   console.log("Milestones componentDidMount");
  //   this.socket.onopen = () => {
  //     console.log("Connected to server");
  //     this.socket.onmessage = (event) => {
  //       // if the message is a user count update
  //       // (upon connection or disconnection):
  //       if (JSON.parse(event.data).userCount) {
  //         this.setState({userCount: JSON.parse(event.data).userCount});
  //       // message handling behaviour all other situations:
  //       } else {
  //         var messages = this.state.messages;
  //         messages = messages.concat(JSON.parse(event.data));
  //         this.setState({messages: messages});
  //       }
  //     };
  //   };
  // }

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