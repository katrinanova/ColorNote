class Notebook < ActiveRecord::Base
  include PgSearch
  multisearchable against: :title

  validates :title, uniqueness: { scope: :user_id }

  belongs_to :user
  has_many :notes
end
