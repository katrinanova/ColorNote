class Notebook < ActiveRecord::Base
  validates :title, uniqueness: { scope: :user_id }

  belongs_to :user
  has_many :notes
end
