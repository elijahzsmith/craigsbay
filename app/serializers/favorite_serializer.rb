class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :listing_id
  
  belongs_to :listing
end
