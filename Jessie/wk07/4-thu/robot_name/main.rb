require_relative 'robot'

# The first time you boot them up, a random name is generated, such as RX837 or BC811.
puts "Robot 1: "
robot1 = Robot.new
puts robot1.name
puts robot1.name
puts robot1.name
puts robot1.mac

puts "Robot 2: "
robot2 = Robot.new
puts robot2.name
puts robot2.name
puts robot2.name
puts robot2.mac

puts "Robot 3: "
robot3 = Robot.new
puts robot3.name
puts robot3.name
puts "Resetting to factory settings."
robot3.reset
puts robot3.name
puts robot3.name
puts robot3.mac

# The mac address never changes, even if you reset it to factory settings.
puts "Mac address shouldnt change"
robot3.reset
puts robot3.mac
puts "instruction count"
puts robot3.instruction_count
puts robot2.instruction_count
puts robot1.instruction_count

puts robot3.instruction_count
puts robot2.instruction_count
puts robot1.instruction_count

# Number of instructions is important, but so is the total age of the robot.
puts "Robot 3: "
robot3 = Robot.new
puts robot3.timer # => "21 seconds since last boot, 21 seconds since creation"
puts robot3.name
puts "Resetting to factory settings."
robot3.reset
puts robot3.timer # => "8 seconds since last boot, 29 seconds since creation"
puts robot3.name