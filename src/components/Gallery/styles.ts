import styled from 'styled-components'
import { cores } from '../../styles'

export const GalList = styled.ul`
  display: flex;
`

export const GalItem = styled.li`
  margin-right: 16px;

  img {
    border-radius: 8px;
    border: 2px solid ${cores.branco};
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
`
