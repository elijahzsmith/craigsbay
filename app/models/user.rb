class User < ApplicationRecord
    has_secure_password

    has_many :favorites
    has_many :listings
    # has_many :listings, through: :favorites

    # Validations: username
    validates :username, presence: true
    validates :username, uniqueness: true
    # Validations: password
    validates :password, presence: true, on: :create 
    validates :password, length: { minimum: 2 }, on: :create
    # Validations: age
    validates :age, presence: true
    # validates :age, numericality: { greater_than_or_equal_to: 18 }

    validates :email, format: /\w+@\w+\.{1}[a-zA-Z]{2,}/, presence: true, uniqueness: true
    validate :permitted_emails

    def permitted_emails
        unless email.match?(/gmail.com|yahoo.com|icloud.com/)
            errors.add(:permitted_emails, "Sorry, that email isn't permitted.")
        end
    end 

end