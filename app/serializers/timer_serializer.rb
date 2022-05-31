class TimerSerializer < ActiveModel::Serializer
  attributes :id, :winner

  belongs_to :listing

  def winner
    User.find(self.object.listing.winner_id)
  end
  
end
