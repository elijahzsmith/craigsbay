class ListingSerializer < ActiveModel::Serializer
  attributes :id, :location, :image_url, :what_it_is, :category, :description, :user_id, :winner_id, :end_time
end
