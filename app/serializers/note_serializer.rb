class NoteSerializer < ActiveModel::Serializer
  attributes :id, :title, :verse, :file_url



  # has_one :church
  # has_one :user
end
