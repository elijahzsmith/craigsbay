class AddWinnerIdToListings < ActiveRecord::Migration[6.1]
  def change
    add_column :listings, :winner_id, :integer
  end
end
