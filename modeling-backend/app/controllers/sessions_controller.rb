class SessionsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
        user = User.find_by(id: params[:id])
        if user
            session[:current_user] = user
            
            render json: user

        else

            render json: "error"
        end
    end

    def destroy
        session[:current_user].clear
    end

    private

end
