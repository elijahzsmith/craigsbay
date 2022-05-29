class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :username, :email

  has_many :favorites,  serializer: UserFavoriteSerializer
end
