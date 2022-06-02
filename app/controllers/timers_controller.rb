class TimersController < ApplicationController

    def create
        timer = Timer.create!(timer_params)
        render json: timer, status: :created
    end 

    def start_countdown
        timer = Timer.find(params[:id])
        timer.countdown
        render json: timer
    end

    private 

    def timer_params
        params.permit(:listing_id)
    end
end
