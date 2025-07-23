import bannerImg from '../../assets/images/fundo_hogwarts.png'
import Button from '../Button'
import Tag from '../Tag'
import { Banner, Infos } from './styles'

const Hero = () => (
  <Banner style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <div>
        <Tag size={'small'} children={'RPG'}></Tag>
        <Tag size={'small'} children={'PS5'}></Tag>
      </div>

      <Infos>
        <h2>Hogwarts Legacy</h2>
        <p>
          <s>De R$ 250,00</s>
          Por R$ 99,90
        </p>
        <Button
          type="button"
          title="Clique aqui para adicionar ao carrinho"
          variant="primary"
        >
          Adicionar ao carrinho
        </Button>
      </Infos>
    </div>
  </Banner>
)

export default Hero
