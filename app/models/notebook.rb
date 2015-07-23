class Notebook < ActiveRecord::Base
  include PgSearch
  multisearchable against: :title,
                  :using => {
                    :tsearch => {:prefix => true}
                  }

  validates :title, uniqueness: { scope: :user_id }

  belongs_to :user
  has_many :notes
end
