class GistFile < ActiveRecord::Base
  belongs_to :gist
  attr_accessible :body
end
