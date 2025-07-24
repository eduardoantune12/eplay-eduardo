import Section from '../Section'
import { GalItem, GalList, Action, Modal, ModalContent } from './styles'
import jedi from '../../assets/images/star_wars.png'
import spiderman from '../../assets/images/banner-homem-aranha.png'
import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'
import fechar from '../../assets/images/fechar.png'

type GalleryItem = {
  type: 'image' | 'video'
  url: string
  name: string
}

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: jedi
  },
  {
    type: 'image',
    url: spiderman
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/1O6Qstncpnc?si=88TP_RCre8mcg8CX&amp;start=3'
  }
]

type Props = {
  defaultCover: () => string
}

const Gallery = ({ defaultCover }: Props) => {
  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  return (
    <>
      <Section title="Galeria" background="darkBlue">
        <GalList>
          {mock.map((media, index) => (
            <GalItem key={media.url}>
              <img
                src={getMediaCover(media)}
                alt={`Mídia ${index + 1} de ${media.name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para maximizar a mídia"
                />
              </Action>
            </GalItem>
          ))}
        </GalList>
      </Section>
      <Modal>
        <ModalContent className="container">
          <header>
            <h4>Jogo Teste</h4>
            <img src={fechar} alt="Ícone de fechar" />
          </header>
          <img src={spiderman} />
        </ModalContent>
        <div className="overlay" />
      </Modal>
    </>
  )
}

export default Gallery
