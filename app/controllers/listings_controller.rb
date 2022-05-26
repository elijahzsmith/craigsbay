class ListingsController < ApplicationController

    def index
        render json: Listing.all, status: :ok
    end
end
