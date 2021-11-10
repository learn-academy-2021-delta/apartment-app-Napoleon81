require 'rails_helper'

RSpec.describe "Apartments", type: :request do
  describe "GET /index" do
    "gets a list of cats" do
      Apartment.create name: "White Ocean", 
      street: 44,
      city: "Black Rock City",
      state: "Nevada",
      manager: "Napoleon",
      price: 750,
      bedrooms: 3,
      bathrooms: 3,
      pets: "yes",
      user_id:786739

      # Make a request
      get '/apartments'

      cat = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(apartment.length).to eq 1
    end
  end
end

def create
    # Create a new apartment
    apartment = Apartment.create(apartment_params)
    render json: apartment
  end

  # Handle strong parameters, so we are secure
  private
  def cat_params
    params.require(:cat).permit(create name:, 
    street:,
    city:,
    state:,
    manager:,
    price:,
    bedrooms:,
    bathrooms:,
    pets:,
    user_id:)
  end
#And we're Green! This isn't quite production ready code, but its enough to get our first test of the endpoint to pass, which is what we're after, so we're happy.