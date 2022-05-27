class FavoritesController < ApplicationController

    def create
        favorite = Favorite.create!(favorite_params)
        render json: favorite, status: :created
    end

    private

    def favorite_params
        params.permit(:user_id, :listing_id)
    end
end
