class CreateGistFiles < ActiveRecord::Migration
  def change
    create_table :gist_files do |t|
      t.string :body
      t.references :Gist

      t.timestamps
    end
    add_index :gist_files, :Gist_id
  end
end
