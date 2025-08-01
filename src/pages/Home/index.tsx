import { ProductsList } from '../../components/ProductsList'
import Banner from '../../components/Banner'

import { useGetComingSoonQuery, useGetOnSaleQuery } from '../../services/api'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
  name: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const { data: comingSoon } = useGetComingSoonQuery()
  const { data: onSale } = useGetOnSaleQuery()

  if (onSale && comingSoon) {
    return (
      <>
        <Banner />
        <ProductsList
          games={onSale}
          title="Promoções"
          background="darkBlue"
          id="on-sale"
        />
        <ProductsList
          games={comingSoon}
          title="Em breve"
          background="blue"
          id="coming-soon"
        />
      </>
    )
  }

  return <h4>Carregando</h4>
}

export default Home
