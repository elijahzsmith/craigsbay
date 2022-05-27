class FavoritesController < ApplicationController

    def index
        current_user = User.find_by!(id: session[:current_user])
        favorites = current_user.favorites
        render json: favorites
    end

    def create
        favorite = Favorite.create!(favorite_params)
        render json: favorite, status: :created
    end

    def destroy
        favorite = Favorite.find(params[:id])
        favorite.destroy
        head :no_content
    end

    private

    def favorite_params
        params.permit(:user_id, :listing_id)
    end
end
