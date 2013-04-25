class CreateGists < ActiveRecord::Migration
  def change
    create_table :gists do |t|
      t.string :title
      t.references :user

      t.timestamps
    end
    add_index :gists, :user_id
  end
end
