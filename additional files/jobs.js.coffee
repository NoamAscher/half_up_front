@Jobs = React.createClass
  getInitialState: ->
    jobs: @props.data
  getDefaultProps: ->
    jobs: []
  render: ->
    React.DOM.div
      className: 'jobs'
      React.DOM.h2
        className: 'title'
        'Jobs'
      React.DOM.table
        className: 'table table-bordered'
        React.DOM.thead null,
          React.DOM.tr null,
            React.DOM.th null, 'Id'
            React.DOM.th null, 'Budget'
            React.DOM.th null, 'Created At'
        React.DOM.tbody null,
          for job in @state.jobs
            React.createElement Job, key: job.id, job: job


