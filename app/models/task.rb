class Task < ApplicationRecord
  belongs_to :user
  validates :title, presence: true, length:{maximum:50}
  validates :description, presence: true, length:{maximum:200}
end
