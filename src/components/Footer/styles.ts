import styled from 'styled-components'
import { colors } from '../../styles'
import { HashLink } from 'react-router-hash-link'

export const FooterContainer = styled.footer`
  background-color: ${colors.darkBlue};
  padding: 32px 0;
  font-size: 14px;
  margin-top: 40px;
`
export const FooterTitle = styled.h4`
  font-size: 16px;
  color: ${colors.white};
  font-weight: bold;
  margin-bottom: 16px;
`

export const FooterLinks = styled.ul`
  display: flex;
`

export const Link = styled(HashLink)`
  color: ${colors.gray};
  text-decoration: none;
  margin-right: 8px;
`

export const FooterSection = styled.div`
  margin-bottom: 64px;
`
