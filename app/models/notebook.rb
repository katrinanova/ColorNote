class Notebook < ActiveRecord::Base

  validates :title, presence: true
  has_many :notes, dependent: :destroy


  include PgSearch
  multisearchable against: :title,
                  :using => {
                    :tsearch => {:prefix => true}
                  }

  validates :title, uniqueness: { scope: :user_id }

  belongs_to :user
end
