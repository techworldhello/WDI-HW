require 'pry'

class Robot
	attr_reader :name, :mac
	@@count = 0
	@@creation = Time.now

	def initialize
		get_name
		setup_mac_address
		@last_boot = Time.now
		@count = 0
	end 

	def reset
		get_name
	end 

	def get_name 
		gen_name
	end 

	def setup_mac_address
		gen_mac_address
	end 

	def instruction_count
		@@count += 1
		"Robot #{name}: #@count operations. Total in program: #@@count operations."
	end 

	def timer
		since_reboot = @last_boot - Time.now
		since_creation = @@creation - Time.now
		"#{since_reboot.round(2)} seconds since the last reboot, #{since_creation.round(2)} since creation"
	end 

	private

	def gen_mac_address
		letters = ('A'..'Z').to_a
		nums = (1..10).to_a
		nested_arr = letters.product(nums).flatten.sample(12).each_slice(2).to_a
		@mac = nested_arr.map{ |arr| arr.join('') }.join("-")
	end 

	def gen_name 
		letters = ('A'..'Z').to_a.sample(2)
		nums = (1..10).to_a.sample(3)
		@name = letters.concat(nums).join
	end 
end 


