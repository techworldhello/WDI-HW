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

	# def species
	# 	@species
	# end 

	# def age
	# 	@age
	# end 

	# def gender
	# 	@gender
	# end 
end 