const MILESTONE_DATA_ATTRIBUTE_NAME = 'data-milestone-id';

var dispatcher = new WebSocketRails('localhost:3000/websocket', false);


// function handleUpdateTitle(event) {
//   dispatcher.trigger('update_title', { title: event.target.innerText });
// }

// function handleUpdateDetails(event) {
//   dispatcher.trigger('update_details', { details: event.target.innerText });
// }

function handleUpdate(event) {
  dispatcher.trigger('update', {
    field: $(this).data("update-field"),
    idMilestone: $(this).closest("[data-milestone-id]").data('milestone-id'),
     //name/details/startdate
    text: $(this).text()
  });

}
function handleNewMilestone(event) {
  console.log(event.id)
  dispatcher.trigger('updatemilestone', {
    milestoneid: event
  });
}

function renderMilestone(milestone) {
  let container = $('<article>').addClass("milestone");
  let list = $('<dl>');
  list.attr(MILESTONE_DATA_ATTRIBUTE_NAME, milestone.id);

  let nameLabel = $('<dt>');
  nameLabel.text('Name');
  let nameValue = $('<dd>').addClass('name freelancer-editable');
  nameValue.text(milestone.name);
  list.append(nameLabel, nameValue);

  let startDateLabel = $('<dt>');
  startDateLabel.text('Start Date');
  let startDateValue = $('<dd>').addClass('start-date freelancer-editable');
  startDateValue.text(milestone.start_date);
  list.append(startDateLabel, startDateValue);

  let endDateLabel = $('<dt>');
  endDateLabel.text('End Date');
  let endDateValue = $('<dd>').addClass('end-date freelancer-editable');
  endDateValue.text(milestone.end_date);
  list.append(endDateLabel, endDateValue);

  let requirementSummaryLabel = $('<dt>');
  requirementSummaryLabel.text('Summary of Requirements');
  let requirementSummaryValue = $('<dd>').addClass('summary freelancer-editable');
  requirementSummaryValue.text(milestone.requirements_summary);
  list.append(requirementSummaryLabel, requirementSummaryValue);

  let button = $('<button>').addClass('save-milestone-btn');
  button.attr(MILESTONE_DATA_ATTRIBUTE_NAME, milestone.id);

  newList = $(`
    <div class='foo'>
      <p> yo mama </p>

    `)

  container.append(list, button);
  return container;
}

// }
// debugger;
// document.addEventListener('DOMContentLoaded', function() {
$(function(){
  var liveInfo = getLiveInfo();
  var requirement = $(".requirement");
  $('#allMilestones').find('dd').attr("contenteditable", !liveInfo.isEmployer);
  $('#allMilestones').on('input', function (event) {
    console.log('all milestone parent received', event.type, event);
    // content editable events are input events which can be propagated up to parent elements
    // since we only set the contenteditable attribute on DD elements, and their DL parents have the milestone ID value, we will extract it accordingly
  });


  $('#allMilestones').on('click', function (event) {
    console.log('detected click', arguments);
    if (event.target.nodeName === 'BUTTON') {
      var milestoneId = $(event.target).attr(MILESTONE_DATA_ATTRIBUTE_NAME);
      var list = $('#allMilestones').find('dl[data-milestone-id=' + milestoneId + ']');
      var values = $.map($.makeArray(list.find('dd')), function (dd) {
        console.log(arguments);
        return $(dd).text();
      });
      var fields = ["name", "start_date", "end_date", "requirements_summary"];

      var data = fields.reduce(function(previous, current, index) {
        previous[current] = values[index];
        return previous;
      }, {});

      var job_id = parseInt(window.location.pathname.substring(6));
      var url = '/jobs/' + job_id + '/milestones/' + milestoneId;
      $.ajax({
        type: "PUT",
        url: url,
        data: data
      })
      }
    ;
  });

  $('.button_to').on('ajax:success', function(event, data, status, xhr){
    console.log("THIS IS XHR", xhr)
    $('#allMilestones').append(renderMilestone(xhr.responseJSON));
    $('#allMilestones').find('dd').attr("contenteditable", !liveInfo.isEmployer);
    $('.button_to').on('click', handleNewMilestone(xhr.responseJSON));
  });

  // debugger;
  if(liveInfo.isEmployer) {

    dispatcher.bind("replace_field", function(message) {
      var element = $("dl[data-milestone-id='" + message.idMilestone + "'] ." +  message.field)
      element.text(message.text);
    });

    dispatcher.bind("new_milestone", function(message) {
      console.log("MESSAGE", message.milestoneid)
      // $('#allMilestones').find("dl[data-milestone-id='" + message.milestoneid + "']")
      $('#allMilestones').append(renderMilestone(message.responseJSON));


    });

  } else {
    //isFreelancer
    $('.milestone .freelancer-editable #allMilestones').attr("contenteditable", true);
    // $('.milestone .freelancer-editable #allMilestones').on('input', handleUpdate);
    $('#allMilestones').on('input', '[data-update-field]', handleUpdate);

  }
});
