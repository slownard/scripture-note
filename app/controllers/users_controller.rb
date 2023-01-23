class UsersController < ApplicationController
  skip_before_action :authorize
  before_action only: [:show, :update, :destroy]

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/1
  def show
    user = User.find_by(id: session[:user_id])
    if user
      render json: user
    else
      render json: { message: "Not logged in" }, status: 404
    end
  end

  # POST /users
  # def create
  #   @user = User.new(user_params)

  #   if @user.save
  #     render json: @user, status: :created, location: @user
  #   else
  #     render json: @user.errors, status: :unprocessable_entity
  #   end
  # end

  def create
    user = User.create!(user_params)
    user.avatar.attach(params[:avatar])
    if user
    session[:user_id] = user.id
    render json: user, status: :created
    else
        render json: {error: user.errors}, status: :unprocessable_entitiy
    end
  end



  # FOR IMAGE 
  # def create
  #   image = Image.create(image_params)
  #   render json: { image: image, picture: picture}
  # end


  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(id: session[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.permit(:first_name, :last_name, :username, :email, :town, :state, :home_church, :instagram, :bio, :avatar, :password)
    end


    # IMAGE 
    def image_params
      params.permit(:caption)
    end

end
