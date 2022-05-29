class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :username

  has_many :favorites,  serializer: UserFavoriteSerializer
end
