require 'sinatra'
require 'sinatra/reloader'
require 'pg'
require 'pry'

def run_sql(sql_query)
	conn = PG.connect(dbname: 'first_crud_app')
	result = conn.exec(sql_query)
	conn.close
	result
end 

get '/' do
	@cities = run_sql('SELECT * FROM cities_main;')
  erb :index
end

get '/city/new' do
	erb :new
end 

post '/cities' do
	run_sql("INSERT INTO cities_main (city, image_url, description) VALUES ('#{ params[:city] }', 
		'#{ params[:image_url] }, 
		'#{ params[:description] }');")
	redirect to('/')
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

get '/to-go' do

	erb :show
end 







