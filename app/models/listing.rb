class Listing < ApplicationRecord
    belongs_to :user
    has_many :favorites
    has_many :users, through: :favorites
    has_one :timer

end
