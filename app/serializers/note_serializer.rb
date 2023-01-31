class NoteSerializer < ActiveModel::Serializer
  attributes :id, :title, :verse, :file



  has_one :church
  has_one :user
end
