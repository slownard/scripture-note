class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :username
      t.string :email
      t.string :town
      t.string :state
      t.string :home_church
      t.string :instagram
      t.text :bio
      t.has_attached_file :avatar
      t.timestamps
    end
  end
end
