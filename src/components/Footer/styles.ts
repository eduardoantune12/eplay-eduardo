import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${cores.azulEscuro};
  padding: 32px 0;
  font-size: 14px;
`
export const FooterTitle = styled.h4`
  font-size: 16px;
  color: ${cores.branco};
  font-weight: bold;
  margin-bottom: 16px;
`

export const FooterLinks = styled.ul`
  display: flex;
`

export const Link = styled.a`
  color: ${cores.cinza};
  text-decoration: none;
  margin-right: 8px;
`

export const FooterSection = styled.div`
  margin-bottom: 64px;
`
