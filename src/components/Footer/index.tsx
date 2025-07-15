import {
  FooterContainer,
  FooterLinks,
  FooterSection,
  FooterTitle,
  Link
} from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <FooterContainer>
    <div className="container">
      <FooterSection>
        <FooterTitle>Categorias</FooterTitle>
        <FooterLinks>
          <li>
            <Link>RPG</Link>
          </li>
          <li>
            <Link>Ação</Link>
          </li>
          <li>
            <Link>Aventura</Link>
          </li>
          <li>
            <Link>Esportes</Link>
          </li>
          <li>
            <Link>Simulação</Link>
          </li>
          <li>
            <Link>Estratégia</Link>
          </li>
          <li>
            <Link>FPS</Link>
          </li>
        </FooterLinks>
      </FooterSection>
      <FooterSection>
        <FooterTitle>Acesso rápido</FooterTitle>
        <FooterLinks>
          <li>
            <Link>Novidades</Link>
          </li>
          <li>
            <Link>Promoções</Link>
          </li>
          <li>
            <Link>Em breve</Link>
          </li>
        </FooterLinks>
      </FooterSection>
      <FooterSection>
        <p>{currentYear} - &copy; E-GAMES Todos os direitos reservados.</p>
      </FooterSection>
    </div>
  </FooterContainer>
)

export default Footer
