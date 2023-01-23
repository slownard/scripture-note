class CreateChurches < ActiveRecord::Migration[6.1]
  def change
    create_table :churches do |t|
      t.string :name
      t.string :address
      t.string :denomination
      t.string :website
      t.string :pastor
      t.string :instagram

      t.timestamps
    end
  end
end
