class CreateTimers < ActiveRecord::Migration[6.1]
  def change
    create_table :timers do |t|
      t.belongs_to :listing, null: false, foreign_key: true

      t.timestamps
    end
  end
end
