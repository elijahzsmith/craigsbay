class User < ApplicationRecord
    has_secure_password

    has_many :favorites
    has_many :listings, through: :favorites

    # Validations: username
    validates :username, presence: true
    validates :username, uniqueness: true
    # Validations: password
    validates :password, presence: true
    validates :password, length: { minimum: 2 }
    # Validations: age
    validates :age, presence: true
    # validates :age, numericality: { greater_than_or_equal_to: 18 }
end
 