class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :email, :town, :state, :home_church, :instagram, :bio, :avatar, :password_digest
end
