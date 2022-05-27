class SessionsController < ApplicationController

    def login
        user = User.find_by(username: params[:username])

        if user&.authenticate(params[:password])
            session[:current_user] = user.id
            render json: user, status: :created
        else
            render json: { error: "Invalid Username or Password" }, status: :unauthorized
        end
    end

    def logout
        session.delete :current_user
    end
end