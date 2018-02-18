class User < ApplicationRecord
    has_secure_password

    has_many :dogs

    belongs_to :neighborhood

    has_many :user_parks
    has_many :parks, through: :user_parks

    validates :username, presence: true
    validates :password, length: { minimum: 6,
    wrong_length: "Password must be at least 6 characters." }, allow_nil: true
    validates :email, presence: true
    validates :neighborhood_id, presence: true
end
