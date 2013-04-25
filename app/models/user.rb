class User < ActiveRecord::Base
  attr_accessible :username

  has_many :gists
  has_many :favorites
  has_many :favorite_gists, :through => :favorites, :source => :gist

  end
