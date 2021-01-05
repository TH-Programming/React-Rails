class BlogsController < ApplicationController


    def index
        blog = Blog.all
    
        render json: blog, include: :photos
    end

    def create
        blog = Blog.new(blog_params)
    end

    private
    def album_params
        params.require(:blog).permit(:name, :content)
    end

end
