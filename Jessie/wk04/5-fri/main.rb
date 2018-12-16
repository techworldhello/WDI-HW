require_relative 'animal'
require_relative 'client'
require_relative 'shelter'
require 'pry'

def starting_up
	loop do
		puts "🐱  Welcome to HappiTails 🐶"
	    shelter = Shelter.new
	    puts "List of existing animals:"
	    shelter.animal_base
	    puts "List of current clients:"
	    shelter.client_base
		puts "Please select from our menu items below:"
		puts "If you'd like to add an animal, type 1"
		puts "If you'd like to add a client, type 2"
		puts "If client wants to adopt a pet, type 3"
		puts "If client needs to put a pet up for adoption, type 4"
		puts "To quit, type q"
		response = gets.chomp
		case response
			when "1"
				add_animal
			when "2"
				add_client
			when "3"
				is_client_registered
			when "4" 
				add_client
			when "q"
				break
			else 
				break
		end
	end 
end 



def add_animal
	print "Name of animal: "
	name = gets.chomp
	print "Species of #{name}: "
	species = gets.chomp 
	print "Age of #{name}: "
	age = gets.chomp 
	print "Enter #{name}'s gender(M/F) "
	gender = gets.chomp.upcase
	new_animal = Animal.new(name, species, age, gender)

	#separate method
	loop do 
		print "Add #{name}'s toys: "
		new_animal.get_toys(gets.chomp)
		print "Add another toy? (Y/N) "
		response = gets.chomp.upcase
		if response == "N"
			break
		end 
	end
	shelter = Shelter.new
	shelter.animal_base << new_animal 
end 


# A client should be able to put an animal up for adoption

def add_client
	print "Enter the client's name: "
	name = gets.chomp
	# check if client exists first for surrender option later
	print "How many kids does #{name} have? "
	num_children = gets.chomp
	print "Enter the age of #{name}: "
	age = gets.chomp
	new_client = Client.new(name, num_children, age)
	shelter = Shelter.new
	shelter.client_base << new_client
	print "Does #{name} have a pet to give up? (Y/N) "
	response = gets.chomp.upcase

	if response == "Y"
		add_animal
	end 
end 

# A client should be able to adopt an animal.

def is_client_registered
	print "Enter client's name: " 
	name = gets.chomp.downcase
	new_shelter = Shelter.new
	if new_shelter.is_client(name)
		$name = new_shelter.clients.select {|client| name == client}
		adopt_pet
	end 
		add_client
		adopt_pet
end 


def adopt_pet
	print "Which pet would the client like to adopt? "
	adopted_pet = gets.chomp.downcase
	new_shelter = Shelter.new
	if new_shelter.animal_base.include? adopted_pet
		puts "processing adoption..."
		new_shelter.animal_base.each do |animal|
			if animal == adopted_pet.downcase
				adopted = new_shelter.animal_base.delete(animal)
				puts "#{name} now owns #{adopted}"
				break
			end 
		end 
		puts "Sorry we don't actually have that animal."
	end
end 


starting_up
