import styled from 'styled-components'

import { Props } from './index'
import { breakpoints, cores } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'blue' ? cores.azul : cores.azulEscuro};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'blue' ? cores.azulEscuro : cores.azul};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;
  margin-top: 40px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const CardTitle = styled.h2`
  font-weight: 700;
  font-size: 18px;
`
