class LowerCaseGistfile < ActiveRecord::Migration
  def change
    rename_column :gist_files, :Gist_id, :gist_id
  end
end
