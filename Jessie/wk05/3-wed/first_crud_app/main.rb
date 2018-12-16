require 'sinatra'
require 'sinatra/reloader'
require 'pg'
require 'pry'

# LIKE IFF STATEMNETS, THE MOST SPECIFIC IS HIGHER OR IT'LL NEVER TRICKLE DOWN

def run_sql(sql_query)
	conn = PG.connect(dbname: 'first_crud_app')
	result = conn.exec(sql_query)
	conn.close
	result
end 

# homepage
get '/' do
	# get all avail imgs and randomise on page
  erb :index
end

# new post
get '/city/new' do
	erb :new
end 

# adding new post
post '/cities' do
	city = Been_City.new
	city.name = params[:name]
	city.image_url = params[:image_url]
	city.description = params[:description]
	redirect to('/')
end 

get '/city' do
	@cities = Been_City.all
	binding.pry
	erb :city_collection
end 


get '/:city' do
	@city = run_sql("SELECT city FROM cities_main where city = #{:city};").first
	erb :city
end 

delete '/:city' do
	# either ensure each city is unique or create id column
	run_sql("DELETE FROM cities_main WHERE city = #{:city};")
	redirect to('/')
end 

get '/:city/edit' do
	@city = run_sql("SELECT * FROM cities_main WHERE city = #{:city};")
	erb :edit
end

put '/:city' do
	run_sql("UPDATE cities_main SET description = #{ params[:description] },
		image_url = #{ params[:image_url] },
		WHERE name = params#{:city};")
	redirect to("/#{ params[:city] }")
	erb :city
end 

# get '/city/to-go' do
# 	@cities = run_sql('SELECT * FROM cities_main;')
# 	erb :show
# end 







