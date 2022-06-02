class Listing < ApplicationRecord
    belongs_to :user
    has_many :favorites, dependent: :destroy
    has_many :users, through: :favorites
    has_one :timer, dependent: :destroy

    validate :end_time_cannot_be_in_the_past

    def end_time_cannot_be_in_the_past
        if end_time.present? && self.parse_time(end_time) < Time.now
            errors.add(:end_time, "can't be in the past")
        end
    end

    private 
    def parse_time(end_time)
        split_date_time = end_time.split('T')

        split_date = split_date_time.first.split('-')
        year = split_date.first
        month = split_date.second
        day = split_date.last

        split_time = split_date_time.last.split(':')
        hour = split_time.first
        minute = split_time.second

        parsed_time = Time.new(year, month, day, hour, minute, 0, "-05:00")

        return parsed_time
    end


end
