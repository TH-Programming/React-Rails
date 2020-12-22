class Album < ApplicationRecord
    has_many_attached :photographs
end
