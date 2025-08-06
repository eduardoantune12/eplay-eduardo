import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles'
import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  cursor: pointer;
  border-radius: 8px;
  border: 2px solid
    ${(props) => (props.variant === 'primary' ? colors.green : colors.darkBlue)};
  color: ${colors.white};
  background-color: ${(props) =>
    props.variant === 'primary' ? colors.green : 'transparent'};
  font-size: 16px;
  font-weight: 700;
  padding: 8px 16px;
`
export const ButtonLink = styled(Link)`
  border-radius: 8px;
  border: 2px solid ${colors.white};
  color: ${colors.white};
  background-color: transparent;
  font-size: 16px;
  font-weight: 700;
  padding: 8px 16px;
  text-decoration: none;
`
