class User < ApplicationRecord
  has_many :notes 
  has_many :churches, through: :notes


  has_one_attached :avatar
  has_secure_password
end
