class AddEndTimeToListings < ActiveRecord::Migration[6.1]
  def change
    add_column :listings, :end_time, :string
  end
end
