class AddForeignKey < ActiveRecord::Migration[5.2]
  def change
    add_foreign_key :cities, :images, on_delete: :cascade
  end
end
