class Listing < ApplicationRecord
    belongs_to :user
    has_many :favorites, dependent: :destroy
    has_many :users, through: :favorites
    has_one :timer, dependent: :destroy

    

end
