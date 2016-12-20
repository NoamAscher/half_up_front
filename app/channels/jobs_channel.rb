class JobsChannel < ApplicationCable::Channel
  def subscribed
    jobs = Jobs.find(params[:id])
    stream_for jobs
  end
end