import $httpService from '@/plugins/http'

import Endpoints from '@/endpoints.constants'

import FavoriteModel from '@/gallery/models/favorite.model'
import ImageModel from '@/gallery/models/image.model'

export function getFavoriteImages() {
  return $httpService
    .get(Endpoints.FAVORITE_IMAGE_LIST())
    .then(({ data: { data: images = [] } = [] }) =>
      images.map((gallery: {} | undefined) => new FavoriteModel(gallery))
    )
}

export function getImageDetails(imageId: string) {
  return $httpService
    .get(Endpoints.IMAGE_DETAILS(imageId))
    .then(({ data }) => new ImageModel(data.data))
}
