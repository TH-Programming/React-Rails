class AlbumsController < ApplicationController

    def index
        albums = Album.all
    
        render json: albums, include: :photos
    end

    def create
        album = Album.new(album_params)
    end

    private
    def album_params
        params.require(:album).permit(:name, :premium?)
    end

end
