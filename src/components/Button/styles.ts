import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  border-radius: 8px;
  border: 2px solid ${cores.branco};
  color: ${cores.branco};
  background-color: transparent;
  font-size: 16px;
  font-weight: 700;
  padding: 8px 16px;
`
export const ButtonLink = styled(Link)`
  border-radius: 8px;
  border: 2px solid ${cores.branco};
  color: ${cores.branco};
  background-color: transparent;
  font-size: 16px;
  font-weight: 700;
  padding: 8px 16px;
  text-decoration: none;
`
