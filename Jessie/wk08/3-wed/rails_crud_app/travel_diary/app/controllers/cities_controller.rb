class CitiesController < ApplicationController
    def index
        @cities = City.all
    end 

    def to_go
        
    end

    def show
        @city = City.find(params[:id])
    end 
     
    def update
        @city = City.find(params[:id])

    end

    def new 
        @city = City.new
    end 

    def create 
        @city = City.new(city_params)
        if @city.save
            redirect_to cities_path
        else 
            render :new
        end 
    end

    def edit
        @city = City.find(params[:id])
    end 

    def destroy
        city = City.find(params[:id])
        if city.destroy
            redirect_to city_path
        else 
            render :show
        end 
    end 

    private

    def city_params
        params.require(:city).permit(:city, :description)
    end 

end
