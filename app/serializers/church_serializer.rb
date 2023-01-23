class ChurchSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :denomination, :website, :pastor, :instagram
end
