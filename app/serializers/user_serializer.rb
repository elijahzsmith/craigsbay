class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :username, :email, :password_digest

  has_many :listings

  has_many :favorites,  serializer: UserFavoriteSerializer
end
