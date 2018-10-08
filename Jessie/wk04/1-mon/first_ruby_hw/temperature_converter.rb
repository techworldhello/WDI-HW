=begin

Exercise: Temperature Converter
Goal: create a program that can convert a temperature in fahrenheit, Celsius or Kelvin to the other two units.

NOTE: You should only be displaying the starting and converted values for the temperature the user selected at the beginning.
# User selected "f" at the start of the program. So the output is...
fahrenheit: ...
to Celsius: ...
to Kelvin: ...
Feel free to turn to your tablemates for help!

Bonus 1
Store the starting and converted temperatures in a hash. When you print those values to the console, do it by accessing the values in the hash.

=end 

puts "what's the temperature today?"

temp_value = gets.chomp.to_i

puts "is that in fahrenheit, Celsius or Kelvin?"

temp_unit = gets.chomp

def convert_temp(temp_value, temp_unit)
	if temp_unit == "fahrenheit"
		puts "so that's #{temp_value} in #{(temp_value - 32) / 1.8} Celsius and #{(temp_value + 459.67) / 1.8} in Kelvin"
	elsif temp_unit == "Celsius"
		puts "that's #{temp_value * 1.8 + 32} in fahrenheit and #{temp_value + 273.15} in Kelvin"
	else
		puts "that's #{temp_value - 273.15} in Celsius and #{temp_value * 1.8 - 459.67} in fahrenheit"
	end 
end 

temp_features = {
	val: temp_value,
	unit: temp_unit
}

p temp_features[:val]
p temp_features[:unit]


# Bonus 2
# Keep the program running until the user decides to quit.

# HINT: Requires a while loop.
# When the program starts, the user should be prompted to enter a temperature OR quit the program.
# After the program displays the starting/converted temperatures, it should return to the initial user prompt.

# not_quitting_program = true

# while not_quitting_program
# 	puts "what's the temperature today?"
# 	temp_value = gets.chomp.to_i
# 	puts "is that in fahrenheit, Celsius or Kelvin? You can exit by typing quit"
# 	temp_unit = gets.chomp

# 	if temp_unit == "fahrenheit"
# 		puts "so that's #{temp_value} in #{(temp_value - 32) / 1.8} Celsius and #{(temp_value + 459.67) / 1.8} in Kelvin"
# 	elsif temp_unit == "Celsius"
# 		puts "that's #{temp_value * 1.8 + 32} in fahrenheit and #{temp_value + 273.15} in Kelvin"
# 	elsif temp_unit == "Kelvin"
# 		puts "that's #{temp_value - 273.15} in Celsius and #{temp_value * 1.8 - 459.67} in fahrenheit"
# 	else temp_value == "quit" || temp_unit == "quit"
# 		puts "see you later"
# 		not_quitting_program = false 
# 	end 
# end 


