class UsersController < ApplicationController
skip_before_action :verify_authenticity_token

    
    def index
        users = User.all

        render json: users
    end

    def new
        
    end

    def create
        user = User.new(user_params)
        if user.save
            render json: user
        end
    end

    def edit

    end

    def update

    end

    def destroy
        user = user.find_by(id: params[:id])
        user.destroy
    end

    private
    def user_params
        params.require(user).permit(:username, :email, :password, :admin?)
    end

end
