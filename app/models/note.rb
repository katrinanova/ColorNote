class Note < ActiveRecord::Base
  validates :notebook_id, presence: true
  belongs_to :notebook
end
