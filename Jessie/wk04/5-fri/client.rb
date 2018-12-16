require 'pry'

# A client should have a name.
# A client should have a number of children.
# A client should have an age.
# A client should have a list of pets.

class Client 
	attr_accessor :name, :num_children, :age
	def initialize(name, num_children, age)
		@name = name
		@num_children = num_children
		@age = age
	end 
end 
