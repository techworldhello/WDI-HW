require 'pry'

# The shelter should display all the clients.
# The shelter should display all the animals.

class Shelter
	attr_accessor :client_base, :animal_base
	def initialize
		@clients = []
		@animals = []
	end 

	def is_client(client)
		@clients.include? client
	end 

	def add_animal(animal)
		@animals << animal
	end 
end 

