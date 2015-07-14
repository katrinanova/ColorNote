class Note < ActiveRecord::Base
  validates :notebook_d, presence: true
  belongs_to :notebook
end
