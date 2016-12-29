json.(milestone, :created_at, :updated_at, :payment_percentage, :name)
json.milestones do |milestone|
  json.extract! milestone, :name, :payment_percentage
end