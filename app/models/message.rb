class Message < ApplicationRecord
  validates :content_or_image, presence: true

  belongs_to :group
  belongs_to :user
  mount_uploader :image, ImageUploader

  private
  def content_or_image
    content.presence or image.presence
  end
end
