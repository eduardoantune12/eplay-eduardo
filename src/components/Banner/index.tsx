import { Imagem, Titulo, Preco } from './styles'

import bannerImg from '../../assets/images/banner-homem-aranha.png'
import Tag from '../Tag'
import Button from '../Button'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Tag size="large">Destaque do dia</Tag>
      <div>
        <Titulo>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Titulo>
        <Preco>
          De <s>R$ 250,00</s> <br />
          por apenas R$ 99,90
        </Preco>
      </div>
      <Button type="link" to="/produto" title="Clique e compre agora">
        De o play
      </Button>
    </div>
  </Imagem>
)

export default Banner
