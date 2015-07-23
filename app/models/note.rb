class Note < ActiveRecord::Base
  include PgSearch
  multisearchable against: [:title, :body],
                  :using => {
                    :tsearch => {:prefix => true}
                    # :trigram => {}
                  }

  # multisearchable :whose_name_starts_with,
  #               :against => :name,
  #               :using => {
  #                 :tsearch => {:prefix => true}
  #               }
# end
#
# multisearchable :search_any_word,
#                 :against => [:title, :body],
#                 :using => {
#                   :tsearch => {:any_word => true}
#                 }

  validates :notebook_id, presence: true
  belongs_to :notebook
  has_many :note_uploads
  has_many :uploads, through: :note_uploads

end
