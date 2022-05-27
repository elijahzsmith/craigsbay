class ListingsController < ApplicationController

    def index
        render json: Listing.all, status: :ok
    end
 
    def show
        listing = find_listing
        render json: current_listing, status: :ok
    end

    def create
        listing = Listing.create!(listing_params)
        render json: listing, status: :created
    end

    def update
        listing = find_listing
        listing.update!(listing_params)
        render json: listing, status: :ok
    end

    def destroy
        listing = find_listing
        listing.destroy
        head :no_content
    end

    private
 
    def find_listing
        listing.find(params[:id])
    end

    def listing_params
        params.permit(:location, :image_url, :what_it_is, :category, :description)
    end

end