class RegistrationsController < ApplicationController 
    def create 
        puts "create"
        user = User.create!(
            email: params['user']['email'], 
            password: params['user']['password'], 
            password_confirmation: params['user']['password'],
            token: Digest::SHA1.hexdigest(SecureRandom.hex(32))
        )

        if user 
            puts "user created"
            render json: {
                status: :created, 
                user: user
            }
        else 
            render json: { status: 500 }
        end
    end 
end 