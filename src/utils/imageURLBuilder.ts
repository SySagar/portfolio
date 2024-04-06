import {client} from '@/config/sanityClient'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

export function urlFor(source : any) {
  return builder.image(source)
}