require_relative 'animal'
require_relative 'client'
require_relative 'shelter'

#code up the menu system/selection

def starting_up
	loop do
		puts "🐱 Welcome to HappiTails 🐶"
		puts "Please select from our menu items below"
		puts "If you'd like to add an animal, type 1"
		puts "If you'd like to add a client, type 2"
		puts "If client wants to adopt a pet type 3"
		puts "If client needs to put a pet up for adoption 4"
		response = gets.chomp
		if response == "1"
			add_animal
		elsif response == "2"
			add_client
		elsif response == "3"
			adopt_pet
		elsif response == "5" 
			giveup_pet
		else 
			break
		end
	end 
end 

starting_up


def add_animal
	print "What's the name of your animal?"
	name = gets.chomp
	print "What species is #{name}?"
	species = gets.chomp 
	print "How old is #{name}?"
	age = gets.chomp 
	print "Enter #{name}'s gender(M/F)"
	gender = gets.chomp.upcase
	new_animal = Animal.new(name, species, age, gender)

	loop do 
	print "Add #{name}'s toys"
	new_animal.get_toys(gets.chomp)
	print "Add another toy? (Y/N)"
	response = gets.chomp
	if response == "N"
		break
		end 
	end 
end 

def add_client
	print "What's the client's name?"
	name = gets.chomp
	print "How many kids do they have?"
	num_children = gets.chomp
	print "How old is the client?"
	age = gets.chomp
	new_client = Client.new(name, num_children, age)
end 


def adopt_pet
	print "Is this a new client?(Y/N)"
	if gets.chomp.upcase == "Y"
		add_client
	end 

	loop do 
		print "Which pet would they like to adopt?"
		adopted_pet = gets.chomp.downcase
		if shelter[1][:animals].include? adopted_pet
			puts "processing adoption"
			shelter[1][:animals].each do |animal|
				if animal == adopted_pet.downcase
					# need to modify shelter to update pets
					adopted = animal.slice!(animal + 1, animal + 1)
			end 
			puts "#{new_client.name} now owns #{adopted}"
		end 
	end 
end


def giveup_pet
	print "Is this a new client?(Y/N)"
	if gets.chomp.upcase == "Y"
		add_client
	end

	loop do 
		print "Add the pet they're dropping off"
		new_client.giveup_pet(gets.chomp)
		print "Add another pet? (Y/N)"
		response = gets.chomp 
		if response == "N"
			
		break
		end  
		end  
	end 
end 


