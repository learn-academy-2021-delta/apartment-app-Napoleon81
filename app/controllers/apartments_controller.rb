class ApartmentsController < ApplicationController
    def index
        apartments = Apartment.all
        render json: apartments
    end
  
    def create
      apartments = Apartment.create(apartment_params)
      if apartment.valid?
        render json: apartments
      else
        render json: apartment.errors, status: 422
    end

  
    def update
      apartments = Apartment.find(params[:id])
      apartment.update(apartment_params)
    if apartment.valid?
        render json: apartments
    else
        render json: apartment.errors, status: 422
    end
  
    def destroy
      apartments = Apartment.find(params[:id])
      apartment.destroy
      render json: apartments
    end
  
    private
    def apartment_params
    params.require(:apartment.permit(:name, :street, :city, :state, :price, :bedrooms, :bathrooms, :pets, :user_id)
    end
  end
end


