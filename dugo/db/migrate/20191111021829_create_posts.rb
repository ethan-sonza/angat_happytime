class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.decimal :longitude, null: false
      t.decimal :latitude, null: false
      t.string :blood_type, null: false
      t.integer :blood_amount, null: false
      t.string :name
      t.string :age
      t.text :description
      t.boolean :archived, default: false
      t.datetime :archive_date

      t.references :user
      t.timestamps
    end
  end
end
