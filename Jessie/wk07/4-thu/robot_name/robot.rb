require 'pry'

class Robot
	attr_reader :name, :mac, :timeStart, :currentTime
	@@count = 0

	def initialize
		@count = 0
		gen_name
		setup_mac_address
	end 

	def reset
		gen_name
	end 

	def gen_name 
		letters = ('A'..'Z').to_a.sample(2)
		nums = (1..10).to_a.sample(3)
		@name = letters.concat(nums).join
		@timeStart = Time.now
	end 

	def setup_mac_address
		letters = ('A'..'Z').to_a
		nums = (1..10).to_a
		nested_arr = letters.product(nums).flatten.sample(12).each_slice(2).to_a
		@mac = nested_arr.map{ |arr| arr.join('') }.join("-")
	end 

	def instruction_count
		@count += 1
		@@count += 1
		"Robot #{name}: #@count operations. Total in program: #@@count operations."
	end 

	def timer
		@currentTime = Time.now
		diff = @currentTime - @timeStart
		"#{diff.round(2)} seconds since the last reboot, #{@currentTime} since creation"
	end 
end 


