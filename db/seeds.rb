# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

ActiveRecord::Base.transaction do
  User.create!(username: "MarkMill")
  User.create!(username: "dargani123")

  Gist.create!(title: "Mill Man JS King", user_id: 1)
  Gist.create!(title: "My second gist", user_id: 1)
  Gist.create!(title: "Last Gist for Now", user_id: 1)
  Gist.create!(title: "Awesome gist", user_id: 2)

  Favorite.create!(user_id: 1, gist_id: 1)
  Favorite.create!(user_id: 1, gist_id: 2)
  Favorite.create!(user_id: 1, gist_id: 4)
  Favorite.create!(user_id: 2, gist_id: 1)
  Favorite.create!(user_id: 2, gist_id: 4)
end