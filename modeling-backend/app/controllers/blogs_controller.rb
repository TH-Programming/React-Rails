class BlogsController < ApplicationController


    def index
        blogs = Blog.all
    
        render json: blogs
    end

    

    def create
        blog = Blog.new(blog_params)
    end

    private
    def album_params
        params.require(:blog).permit(:title, :content)
    end

end
