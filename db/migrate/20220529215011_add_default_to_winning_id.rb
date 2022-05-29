class AddDefaultToWinningId < ActiveRecord::Migration[6.1]
  def change
    change_column :listings, :winner_id, :integer, default: nil
  end
end
