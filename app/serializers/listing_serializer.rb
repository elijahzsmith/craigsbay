class ListingSerializer < ActiveModel::Serializer
  attributes :id, :location, :image_url, :what_it_is, :category, :description, :user_id, :winner, :end_time

  def winner
    winner = User.find(:winner_id)
  end

end
