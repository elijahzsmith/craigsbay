class TimersController < ApplicationController

    def index
        timers = Timer.all
        render json: timers, adapter: nil
    end

    def create
        timer = Timer.create!(timer_params)
        render json: timer, status: :created, adapter: nil
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
