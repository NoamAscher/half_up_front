@Job = React.createClass
  render: ->
    React.DOM.tr null,
      React.DOM.td null, @props.job.id
      React.DOM.td null, @props.job.budget
      React.DOM.td null, @props.job.created_at