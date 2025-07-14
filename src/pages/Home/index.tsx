import Banner from '../../components/Banner'
import { ProductsList } from '../../components/ProductsList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    image: resident,
    infos: ['10%', 'R$ 250,00'],
    system: 'Windows',
    title: 'Resident Evil 4 - Remake'
  },
  {
    id: 2,
    category: 'RPG',
    description: 'Uma aventura épica te espera',
    image: diablo,
    infos: ['5%', 'R$ 200,00'],
    system: 'Console',
    title: 'Aventura Épica'
  },
  {
    id: 3,
    category: 'RPG',
    description: 'Uma aventura épica te espera',
    image: zelda,
    infos: ['Single Player', 'Offline'],
    system: 'Console',
    title: 'Aventura Épica'
  },
  {
    id: 4,
    category: 'Aventura',
    description: 'Uma aventura épica te espera',
    image: starWars,
    infos: ['Single Player', 'Offline'],
    system: 'Console',
    title: 'Aventura Épica'
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'Aventura',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    image: starWars,
    infos: ['Single Player', 'Offline'],
    system: 'Windows',
    title: 'Star Wars Jedi: Survivor'
  },
  {
    id: 6,
    category: 'Aventura',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
    image: zelda,
    infos: ['Single Player', 'Offline'],
    system: 'Windows',
    title: 'Zelda: Tears of the Kingdom'
  },
  {
    id: 7,
    category: 'Aventura',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    image: starWars,
    infos: ['Single Player', 'Offline'],
    system: 'Windows',
    title: 'Star Wars Jedi: Survivor'
  },
  {
    id: 8,
    category: 'Aventura',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    image: resident,
    infos: ['Single Player', 'Offline'],
    system: 'Windows',
    title: 'Resident Evil 4 - Remake'
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} title="Promoções" background="darkBlue" />
    <ProductsList games={emBreve} title="Em breve" background="blue" />
  </>
)

export default Home
