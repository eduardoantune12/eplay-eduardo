import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.azul};
  border-radius: 8px;
  padding: 8px;
  position: relative;
  max-width: 238px;

  img {
    display: block;
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const CardTitle = styled.h3`
  font-weight: 700;
  font-size: 16px;
  margin-top: 16px;
  display: block;
  margin-bottom: 8px;
`

export const CardDesc = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  margin-bottom: 16px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 8px;
`
