class UsersController < ApplicationController

  def index
    @users = User.where('name LIKE(?)', "%#{params[:keyword]}%").limit(10)
    respond_to do |format|
      format.json
    end
  end

  def edit
  end

  def update
    flash.now[:notice] = ""
    @user = User.find(params[:id])
    if @user.update(user_params)
      redirect_to :root, notice: "SUCCESS!"
    else
      render :edit, notice: "failed!"
    end
  end

  private
  def user_params
    params.require(:user).permit(:name, :email)
  end
end
