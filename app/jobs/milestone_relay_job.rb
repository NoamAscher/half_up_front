class MilestoneRelayJob < ApplicationJob
  def perform(milestone)
    milestone =  MessagesController.render(partial: 'jobs/milestone',
                                         locals: {milestone: milestone})
    milestones = Milestones.find(params[:id])
    ActionCable.server.broadcast milestones,
                                 milestone: milestone
  end
end