class Church < ApplicationRecord
    has_many :notes 
    has_many :users, through: :notes

    has_one_attached :avatar
end
