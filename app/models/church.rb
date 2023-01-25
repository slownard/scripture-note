class Church < ApplicationRecord
    has_many :notes 
    has_many :users, through: :notes

    has_one_attached :avatar

    def avatar_url
        Rails.application.routes.url_helpers.url_for(avatar) if avatar.attached?
    end
end
