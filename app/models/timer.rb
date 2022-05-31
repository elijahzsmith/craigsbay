class Timer < ApplicationRecord
  belongs_to :listing

  after_create :countdown

    def countdown
        end_time = self.parse_time(self.listing.end_time)
        
        sleep(end_time - Time.now) 
        
        self.pick_winner
    end

    private 

    def pick_winner
      owner = self.listing.user
      winner = self.listing.users.sample

      if winner != nil
        self.listing.update!(winner_id: winner.id)
      else
        self.listing.update!(winner_id: owner.id)
      end
    end

    def parse_time(end_time)
        split_date_time = end_time.split

        split_date = split_date_time.first.split('/')
        year = split_date.last
        month = split_date.first
        day = split_date.second

        split_time = split_date_time.last.split(':')
        hour = split_time.first
        minute = split_time.second

        parsed_time = Time.new(year, month, day,hour, minute)

        return parsed_time
    end
end
