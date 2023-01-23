class NoteSerializer < ActiveModel::Serializer
  attributes :id, :title, :verse
  has_one :church
  has_one :user
end
