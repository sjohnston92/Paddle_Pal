class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :name
      t.float :start_lat
      t.float :start_long
      t.float :end_lat
      t.float :end_long
      t.string :boat_type
      t.string :river
      t.float :distance
      t.date :date
      t.string :body
      t.string :image
      t.string :trip_time
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
