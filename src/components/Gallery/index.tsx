import Section from '../Section'
import jedi from '../../assets/images/star_wars.png'
import { GalItem, GalList } from './styles'

const Gallery = () => (
  <Section title="Galeria" background="darkBlue">
    <GalList>
      <GalItem>
        <img src={jedi} alt="imagem do link" />
      </GalItem>
      <GalItem>
        <img src={jedi} alt="imagem do link" />
      </GalItem>
      <GalItem>
        <img src={jedi} alt="imagem do link" />
      </GalItem>
    </GalList>
  </Section>
)

export default Gallery
