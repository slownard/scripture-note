class ChurchSerializer < ActiveModel::Serializer
  # include JSONAPI::Serializer
  attributes :id, :name, :address, :denomination, :website, :pastor, :instagram, :avatar_url



  # def avatar_on_disk
  #   if object.avatar
  #     return ActiveStorage::Blob.service.path_for(object.avatar.key)

  #   else 
  #     return "avatar not found"
  #   end
  # end

  # 

end
