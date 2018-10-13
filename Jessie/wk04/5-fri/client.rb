class Client 
	def initialize(name, num_children, age)
		@name = name
		@num_children = num_children
		@age = age
		@pets = []
		@adopted_pet = []
	end 

	def drop_off_pets(pet)
		@pets << pet
	end

	def adopt_pet(pet)
		adopted_pet << pet
	end

	def name
		@name
	end 

	def children_count
		@num_children
	end 

	def age
		@age
	end 
end 