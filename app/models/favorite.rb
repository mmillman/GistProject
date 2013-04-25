class Favorite < ActiveRecord::Base
  attr_accessible :user_id, :gist_id
  belongs_to :user
  belongs_to :gist

  validates :gist_id, :uniqueness => { :scope => :user_id }

end
