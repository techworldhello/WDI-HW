require 'pry'

# An animal should have a name.
# An animal should have an age.
# An animal should have a gender.
# An animal should have a species.
# An animal can have multiple toys.

class Animal 
	attr_accessor :species, :age, :gender
	def initialize(name, species, age, gender)
		@name = name 
		@species = species
		@age = age
		@gender = gender
		@toys = []
	end 
	def get_toys(toy)
		@toys << toy  
	end 
end 
