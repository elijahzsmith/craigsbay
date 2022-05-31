class ListingSerializer < ActiveModel::Serializer
  attributes :id, :location, :image_url, :what_it_is, :category, :description, :user_id, :winner_id, :end_time

  # def winner
  #   User.find(self.object.winner_id)
  # end

end
