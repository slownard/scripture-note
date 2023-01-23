class Note < ApplicationRecord
  belongs_to :church
  belongs_to :user

  has_one_attached :file, dependent: :destroy
end
