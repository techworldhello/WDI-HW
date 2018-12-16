require 'pry'

a = ["Anil", "Erik", "Jonathan"]

# How would you return the string "Erik"?
p a[1]

# How would you add your name to the array?
a.push("Jessie")


h = {
	0 => "Zero", 
	1 => "One", 
	:two => "Two", 
	"two" => 2
}

# How would you return the string "One"?
p h[1]

# How would you return the string "Two"?
p h[:two]

# How would you return the number 2?
p h["two"]

# How would you add {3 => "Three"} to the hash?
h[3] = "Three"

# How would you add {:four => 4} to the hash?
h[:four] = 4


is = {true => "It's true!", false => "It's false"}

# What is the return value of is[2 + 2 == 4]?
"It's true!"

# What is the return value of is["Erik" == "Jonathan"]?
"It's false"

# What is the return value of is[9 > 10]?
"It's false"

# What is the return value of is[0]?
nil

# What is the return value of is["Erik"]?
nil


users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}

# How would you access Jonathan's Twitter handle (i.e. the string "tronathan")?
p users["Jonathan"][:twitter]

# How would you add the number 7 to Erik's favorite numbers?
p users["Erik"][:favorite_numbers] << 7

# How would you add yourself to the users hash?
users["Jessie"] = { 
	twitter: "cantremember!",
	favorite_numbers: [2, 4, 6]
}

# How would you return the array of Erik's favorite numbers?
p users["Erik"][:favorite_numbers]

# How would you return the smallest of Erik's favorite numbers?
p users["Erik"][:favorite_numbers].sort[0]
# better way!
p users["Erik"][:favorite_numbers].min

# How would you return an array of Anil's favorite numbers that are also even?
p users["Anil"][:favorite_numbers].select { |num| num.even? }

# How would you return an array of the favorite numbers common to all users?
p users["Jonathan"][:favorite_numbers] & users["Erik"][:favorite_numbers] & users["Anil"][:favorite_numbers]

# How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?
all_arrays = users["Jonathan"][:favorite_numbers] + users["Erik"][:favorite_numbers] + users["Anil"][:favorite_numbers]

p all_arrays.sort.uniq

# better way if there are more keys

numbers = []

users.values.each do |person|
	numbers += person[:favorite_numbers]
end

p numbers.sort.uniq

