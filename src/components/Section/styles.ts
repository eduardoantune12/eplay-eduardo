import styled from 'styled-components'

import { Props } from './index'
import { cores } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'blue' ? cores.azul : cores.azulEscuro};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'blue' ? cores.azulEscuro : cores.azul};
  }

  p {
    font-size: 14px;
    line-height: 22px;
    max-width: 640px;
  }
`

export const CardTitle = styled.h2`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 40px;
`
