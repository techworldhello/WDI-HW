class CreateCities < ActiveRecord::Migration[5.2]
  def change
    create_table :cities do |t|
      t.string :city
      t.string :image_url
      t.text :description
      t.boolean :has_been

      t.timestamps
    end
  end
end
