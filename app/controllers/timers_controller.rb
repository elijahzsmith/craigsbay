class TimersController < ApplicationController

    def create
        timer = Timer.create!(timer_params)
        render json: timer, status: :created
    end

    private 

    def timer_params
        params.permit(:listing_id)
    end
end
