import Tag from '../Tag'
import Button from '../Button'
import { formatPrice } from '../ProductsList'
import { useGetFeaturedGameQuery } from '../../services/api'
import { Imagem, Titulo, Preco } from './styles'

const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <Imagem style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="container">
        <Tag size="large">Destaque do dia</Tag>
        <div>
          <Titulo>{game.name}</Titulo>
          <Preco>
            De <s>{formatPrice(game.prices.old)}</s> <br />
            Por {formatPrice(game.prices.current)}
          </Preco>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Clique aqui para aproveitar esta oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}

export default Banner
