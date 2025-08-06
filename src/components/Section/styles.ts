import styled from 'styled-components'

import { Props } from './index'
import { colors } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'blue' ? colors.blue : colors.darkBlue};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'blue' ? colors.darkBlue : colors.blue};
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
