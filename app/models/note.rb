class Note < ApplicationRecord
  belongs_to :church
  belongs_to :user

  has_one_attached :file, dependent: :destroy

  def file_url
    Rails.application.routes.url_helpers.url_for(file) if file.attached?
  end
end
