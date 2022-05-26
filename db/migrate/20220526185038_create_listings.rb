class CreateListings < ActiveRecord::Migration[6.1]
  def change
    create_table :listings do |t|
      t.string :location
      t.string :image_url
      t.string :what_it_is
      t.string :category
      t.string :description

      t.timestamps
    end
  end
end
