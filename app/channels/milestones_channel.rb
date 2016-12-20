class MilestonesChannel < ApplicationCable::Channel
  def subscribed
    milestones = Milestones.find(params[:id])
    stream_for milestones
  end
end