class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :username, :email, :listings

  has_many :favorites,  serializer: UserFavoriteSerializer
end
