class User < ApplicationRecord
    has_many :tasks
    before_save { self.email = email.downcase }
    has_secure_password

    validates_presence_of :email
    validates_uniqueness_of :email
end
