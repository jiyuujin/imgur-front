import { get } from 'lodash-es'

export type ImageTypes = {
  account_id: number
  account_url: string
  ad_type: number
  ad_url: string
  animated: boolean
  bandWidth: string | undefined
  comment_count: number
  datetime: string
  description: string | null
  downs: number
  edited: number
  favorite: boolean
  favorite_count: number
  has_sound: boolean
  height: number
  id: string
  in_gallery: boolean
  in_most_viral: string
  is_ad: boolean
  is_album: boolean
  link: string
  nsfw: string | null
  points: number
  score: string | null
  section: string | null
  size: number
}

class ImageModel {
  account_id: number
  account_url: string
  ad_type: number
  ad_url: string
  animated: boolean
  bandWidth: string | undefined
  comment_count: number
  datetime: string
  description: string | null
  downs: number
  edited: number
  favorite: boolean
  favorite_count: number
  has_sound: boolean
  height: number
  id: string
  in_gallery: boolean
  in_most_viral: string
  is_ad: boolean
  is_album: boolean
  link: string
  nsfw: string | null
  points: number
  score: string | null
  section: string | null
  size: number

  constructor(data = {}) {
    this.account_id = get(data, 'account_id')
    this.account_url = get(data, 'account_url')
    this.ad_type = get(data, 'ad_type')
    this.ad_url = get(data, 'ad_url')
    this.animated = get(data, 'animated')
    this.bandWidth = get(data, 'bandWidth')
    this.comment_count = get(data, 'comment_count')
    this.datetime = get(data, 'datetime')
    this.description = get(data, 'description')
    this.downs = get(data, 'downs')
    this.edited = get(data, 'edited')
    this.favorite = get(data, 'favorite')
    this.favorite_count = get(data, 'favorite_count')
    this.has_sound = get(data, 'has_sound')
    this.height = get(data, 'height')
    this.id = get(data, 'id')
    this.in_gallery = get(data, 'in_gallery')
    this.in_most_viral = get(data, 'in_most_viral')
    this.is_ad = get(data, 'is_ad')
    this.is_album = get(data, 'is_album')
    this.link = get(data, 'link')
    this.nsfw = get(data, 'nsfw')
    this.points = get(data, 'points')
    this.score = get(data, 'score')
    this.section = get(data, 'section')
    this.size = get(data, 'size')
  }
}

export default ImageModel
