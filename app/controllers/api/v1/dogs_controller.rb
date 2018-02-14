class Api::V1::DogsController < ApiController
  before_action :set_dog, only: [:show, :update, :destroy]

  
end