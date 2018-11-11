class CitiesController < ApplicationController
    def index
        @cities = City.all
    end 

    def new 
    end 

    def edit
        @city = city.find(params[:id])
    end

    def update 
        city = City.find(params[:id])
        city.city = params[:city]
        city.image_url = params[:image_url]
        city.description = params[:description]
        if city.save 
            redirect_to '/cities/update'
        else
            render :new
        end 
    end

    def to_go

    end

end
