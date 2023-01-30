class User < ApplicationRecord
  has_many :notes 
  has_many :churches, through: :notes


  has_one_attached :avatar
  has_secure_password

  def avatar_url
    Rails.application.routes.url_helpers.url_for(avatar) if avatar.attached?
end


end
