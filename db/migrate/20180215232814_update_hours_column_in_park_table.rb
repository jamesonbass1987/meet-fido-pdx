class UpdateHoursColumnInParkTable < ActiveRecord::Migration[5.1]
  def change
    change_column :parks, :hours_open, :string
    change_column :parks, :hours_close, :string
  end
end
