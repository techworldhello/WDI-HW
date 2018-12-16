=begin
	
line of code

write a program loc.rb to count and puts the number of lines of code in a file

eg. say you have a file data.txt with the following contents

cat
dog
rabbit
when I run the program, it should prompt for a filename

$ ruby loc.rb
$ Enter filename: data.txt
$ 3 line(s)
hint
lookup gets method and the readlines method

=end 

print "enter a filename: " # keeps input on the same line 

filename = gets.chomp

def num_line_in_file(filename)
	file = filename.to_s
	lines = File.readlines(file) # array with line breaks
	line_count = lines.length

	puts "Number of lines for your file is #{line_count}"
end

num_line_in_file(filename)


lines_no_blank = 0

lines.each do |line|
	if line.chomp != ''
	lines_no_blank += 1
	end 
end

lines_of_code = lines.select do |line|
	!line.chomp.empty? #when its not an empty string, keep it 
end 

puts lines_of_code.length

