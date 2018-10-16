require 'sinatra/reloader'     
require 'sinatra'
require 'httparty'
require 'pry'

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
		redirect to ('/result')
	end
	file = File.open('search_history.txt', 'a')
	@result["Search"].each do |film|
		file.puts film["Title"]
	end 
	file.close
	erb :movies
end 


get '/result' do 
	movie = params[:movie] 
	@filtered = HTTParty.get("http://www.omdbapi.com/?t=#{movie}&apikey=2f6435d9")
	@title = @filtered["Title"]
	if @filtered["Ratings"][1]
		@rater = @filtered["Ratings"][1]["Source"]
		@rating = @filtered["Ratings"][1]["Value"]
	end 
	@director = @filtered["Director"]
	@year = @filtered["Year"]
	@plot = @filtered["Plot"]
	@poster = @filtered["Poster"]
	erb :result
end 

get '/default' do
	erb :default
end 

get '/history' do
	@lines = File.readlines("search_history.txt")
	erb :history
end 

# get - read
# post - write






