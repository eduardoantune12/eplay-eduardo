import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.azul};
  border-radius: 8px;
  padding: 8px;

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
