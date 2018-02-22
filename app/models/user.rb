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

    accepts_nested_attributes_for :parks
    accepts_nested_attributes_for :dogs

    def self.from_token_request request
        username = request.params["auth"] && request.params["auth"]["username"]
        self.find_by username: username
    end

    def to_token_payload
        return {id: self.id}
    end
end
