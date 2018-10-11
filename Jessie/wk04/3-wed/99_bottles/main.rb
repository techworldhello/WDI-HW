require 'sinatra'
require 'sinatra/reloader'

require 'pry'

get '/' do
	@count = 99
	@rm_beer = @count.to_i - 1
	erb :index
end

get '/0' do
 	erb :show
end 

get '/:num_beer' do
  @count = params[:num_beer]
  @rm_beer = @count.to_i - 1
	erb :index
end 

