# class MilestonesChannel < ApplicationCable::Channel
  # Called when the consumer has successfully
  # become a subscriber of this channel.
  # def subscribed
  #   milestones = Milestones.find(params[:id])
  #   stream_for milestones
  #
# end

class MilestonesChannel < ApplicationCable::Channel
  def follow(data)
    stop_all_streams
    milestones = Milestones.find(params[:id])
    stream_for milestones
     # stream_from "messages:#{data['message_id'].to_i}:comments"
  end

  def unfollow
    stop_all_streams
  end
end
