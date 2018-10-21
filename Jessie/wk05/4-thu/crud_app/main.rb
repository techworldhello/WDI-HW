require 'sinatra'
require 'sinatra/reloader'
require 'pg'
require 'pry'

# LIKE IFF STATEMNETS, THE MOST SPECIFIC IS HIGHER OR IT'LL NEVER TRICKLE DOWN

def run_sql(sql_query)
	conn = PG.connect(dbname: 'crud_app')
	result = conn.exec(sql_query)
	conn.close
	result
end 

# Homepage
get '/' do
	@rand_images = run_sql("SELECT image_url from been_cities;")
	@cities = run_sql("SELECT * from been_cities;")
  erb :index
end

# New Post section 
get '/city/new' do
	erb :new
end 

# adding new post
post '/' do
	run_sql("INSERT INTO been_cities (city, image_url, description) VALUES ($$#{ params[:city] }$$, 
		'#{ params[:image_url] }', 
		$$#{ params[:description] }$$);")
	redirect to('/city')
end 

# Places I've Been section 
get '/city' do
	@cities = run_sql('SELECT * FROM been_cities;')
	erb :city_collection
end 

# Places To Go section
get '/to-go' do
	@cities = run_sql('SELECT * FROM go_cities;')
	erb :places_go
end 

# Places To Go edit list 
post '/to-go' do
	run_sql("INSERT INTO go_cities (city) VALUES ('#{params[:city]}');")
	redirect to('/to-go')
end 

# clicking into single city post
get '/city/:id' do
	@city = run_sql("SELECT * FROM been_cities where id = #{params[:id]};").first
	erb :city
end 

# deleting single city post
delete '/city/:id' do
	# either ensure each city is unique or create id column
	run_sql("DELETE FROM been_cities WHERE id = #{params[:id]};")
	redirect to('/city')
end 

# editing single city post
get '/city/:id/edit' do
	@city = run_sql("SELECT * FROM been_cities WHERE id = #{params[:id]};").first
	erb :edit
end

# updated single city post 
put '/city/:id' do
	run_sql("UPDATE been_cities SET city = '#{params[:city]}', 
		image_url = '#{params[:image_url]}',
		description = $$#{params[:description]}$$
		WHERE id = #{params[:id]};")
	redirect to("/city/#{params[:id]};")
end 


# submitting comment for single city
post '/comments' do 
	run_sql("INSERT INTO comments (body, city_id) VALUES ('#{params[:body]}', #{params[:city_id]};")
	redirect to("/city/#{params[:id]}")
end 

# deleting comment for single city
delete '/comments/:id' do
	run_sql("DELETE FROM comments WHERE id = #{params[:id]}")
	redirect to("/city/#{params[:id]}")
end 









