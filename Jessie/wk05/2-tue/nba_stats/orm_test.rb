require 'active_record'
require 'pry'

# not SQL, but an abstraction translating sql

options = {
    adapter: 'postgresql',
    database: 'nba_db'
}

ActiveRecord::Base.establish_connection(options)

# conventions 
#conventions singular here - mapping to a plural version in the db (players)
class Player < ActiveRecord::Base

end 

binding.pry