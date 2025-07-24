import Section from '../Section'
import { GalItem, GalList, Action, Modal, ModalContent } from './styles'
import jedi from '../../assets/images/star_wars.png'
import spiderman from '../../assets/images/banner-homem-aranha.png'
import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'
import fechar from '../../assets/images/fechar.png'
import React, { useState } from 'react'

interface GalleryItem {
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
  defaultCover: string
  name: string
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}

const Gallery = ({ defaultCover, name }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: '',
    name: ''
  })

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: '',
      name: ''
    })
  }

  return (
    <>
      <Section title="Galeria" background="darkBlue">
        <GalList>
          {mock.map((media, index) => (
            <GalItem
              key={media.url}
              onClick={() => {
                setModal({
                  isVisible: true,
                  type: media.type,
                  url: media.url,
                  name: media.name
                })
              }}
            >
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
      <Modal className={modal.isVisible ? 'open' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img
              src={fechar}
              alt="Ícone de fechar"
              onClick={() => {
                closeModal()
              }}
            />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} />
          ) : (
            <iframe frameBorder={0} src={modal.url} />
          )}
        </ModalContent>
        <div
          onClick={() => {
            closeModal()
          }}
          className="overlay"
        ></div>
      </Modal>
    </>
  )
}

export default Gallery
