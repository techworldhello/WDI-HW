class RemoveImageUrlFromCities < ActiveRecord::Migration[5.2]
  def change
    remove_column :cities, :image_url, :string
  end
end
