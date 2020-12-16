class AlbumsController < ApplicationController

    def index
        albums = Album.all
    
        render json: albums, include: :photos
    end



end
