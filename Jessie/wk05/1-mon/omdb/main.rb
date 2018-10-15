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
		result = HTTParty.get("http://www.omdbapi.com/?t=#{title}&apikey=2f6435d9")
	end
	@title = result["Title"]
	@rater = result["Ratings"][1]["Source"]
	@rating = result["Ratings"][1]["Value"]
	@director = result["Director"]
	@year = result["Year"]
	@plot = result["Plot"]
	@poster = result["Poster"]
	erb :movies
end 

get '/default' do
	erb :default
end 

# get - read
# post - write






