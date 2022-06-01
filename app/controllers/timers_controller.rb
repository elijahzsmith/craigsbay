class TimersController < ApplicationController

    def index
        timers = Timer.all
        render json: timers
    end

    def create
        timer = Timer.create!(timer_params)
        render json: timer, status: :created
    end

    private 

    def timer_params
        params.permit(:listing_id)
    end
end
