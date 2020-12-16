class CreatePhotos < ActiveRecord::Migration[6.0]
  def change
    create_table :photos do |t|
      t.string :url
      t.string :title
      t.string :caption
      t.belongs_to :album

      t.timestamps
    end
  end
end
