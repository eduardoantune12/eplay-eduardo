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
            <Link
              title="Clique aqui para acessar jogos de RPG"
              to="/categories#rpg"
            >
              RPG
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar jogos de Ação"
              to="/categories#action"
            >
              Ação
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar jogos de Esportes"
              to="/categories#sports"
            >
              Esportes
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar jogos de Simulação"
              to="/categories#simulation"
            >
              Simulação
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar jogos de Luta"
              to="/categories#fight"
            >
              Luta
            </Link>
          </li>
        </FooterLinks>
      </FooterSection>
      <FooterSection>
        <FooterTitle>Acesso rápido</FooterTitle>
        <FooterLinks>
          <li>
            <Link
              title="Clique aqui para acessar jogos promocionais"
              to="/#on-sale"
            >
              Promoções
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar seção em breve"
              to="/#coming-soon"
            >
              Em breve
            </Link>
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
