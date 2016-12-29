class JobsChannel < ApplicationCable::Channel
  # Called when the consumer has successfully
  # become a subscriber of this channel.
  def subscribed
    jobs = Jobs.find(params[:id])
    stream_for jobs
  end
end