require 'sinatra/reloader'     
require 'sinatra'
require 'httparty'
require 'pg'
require 'pry'

def run_sql(sql)
	conn = PG.connect(dbname: 'omdb')
	result = conn.exec(sql)
	conn.close
	result
end 

get '/' do
 	erb :index
end

get '/about' do
	erb :about
end 

get '/movies' do
	title = params[:info]
	if title == "" || title == nil 
		redirect to('/default')
	else 
		@result = HTTParty.get("http://www.omdbapi.com/?s=#{title}&apikey=2f6435d9")
		
	end
	if @result["Search"].length == 1
		redirect to ("/result?movie=#{title}")
	end

	# file = File.open('search_history.txt', 'a')
	# @result["Search"].each do |film|
	# 	file.puts film["Title"]
	# end 
	# file.close
	erb :movies
end 


get '/result' do 
	result = run_sql("SELECT * FROM movies_searched WHERE title='#{params[:movie]}';")
	if result.ntuples == 0
		@filtered = HTTParty.get("http://www.omdbapi.com/?t=#{params[:movie]}&apikey=2f6435d9")
		# binding.pry
		sql = "INSERT INTO movies_searched 
			(title, year, rater, rating, director, description, img_url) 
			VALUES ($$#{@filtered['Title']}$$, 
			#{@filtered['Year']}, 
			$$#{@filtered['Ratings'][1]['Source']}$$, 
			$$#{@filtered['Ratings'][1]['Value']}$$,
			$$#{@filtered['Director']}$$,
			$$#{@filtered['Description']}$$,
			$$#{@filtered['Poster']}$$);"
		run_sql(sql)
		@filtered = run_sql("SELECT * FROM movies_searched WHERE title = '#{params[:movie]}';")[0]
	else 
		@filtered = result[0]
	end 

	@title = @filtered["title"]
	@rater = @filtered["rater"]
	@rating = @filtered["ratings"]
	@director = @filtered["director"]
	@year = @filtered["year"]
	@plot = @filtered["description"]
	@poster = @filtered["img_url"]

	erb :result
end 

get '/default' do
	erb :default
end 

# get '/history' do
# 	@lines = File.readlines("search_history.txt")
# 	erb :history
# end 

# get - read
# post - write






