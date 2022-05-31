class TimerSerializer < ActiveModel::Serializer
  attributes :id

  belongs_to :listing
end
