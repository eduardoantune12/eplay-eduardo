import { ProductsList } from '../../components/ProductsList'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'
import { Game } from '../Home'

const promocoes: Game[] = []

const emBreve: Game[] = []

const Categories = () => (
  <>
    <ProductsList games={promocoes} title="RPG" background="darkBlue" />
    <ProductsList games={emBreve} title="Ação" background="blue" />
    <ProductsList games={promocoes} title="Aventura" background="darkBlue" />
    <ProductsList games={emBreve} title="FPS" background="blue" />
  </>
)

export default Categories
