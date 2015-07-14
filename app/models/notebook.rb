class Notebook < ActiveRecord::Base
  validates :title, uniqueness: true

  belongs_to :user
  has_many :notes
end
