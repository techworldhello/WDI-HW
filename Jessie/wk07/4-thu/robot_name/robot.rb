require 'pry'

class Robot
	attr_reader :name, :mac
	@@count = 0

	def initialize
		gen_name
		@count = 0
	end 

	def reset
		gen_name
	end 

	def gen_name 
		letters = ('A'..'Z').to_a.sample(2)
		nums = (1..10).to_a.sample(3)
		@name = letters.concat(nums).join
		@@start_time = Time.now.round(2)
	end 

	def mac_address
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
		start = Time.now
		finish = Time.now
		diff = finish - start
		"#{diff.round(2)} seconds since the last reboot, #{start} since creation"
	end 
end 


