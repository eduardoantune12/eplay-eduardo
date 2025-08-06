import * as S from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <S.FooterContainer>
    <div className="container">
      <S.FooterSection>
        <S.FooterTitle>Categorias</S.FooterTitle>
        <S.FooterLinks>
          <li>
            <S.Link
              title="Clique aqui para acessar jogos de RPG"
              to="/categories#rpg"
            >
              RPG
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar jogos de Ação"
              to="/categories#action"
            >
              Ação
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar jogos de Esportes"
              to="/categories#sports"
            >
              Esportes
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar jogos de Simulação"
              to="/categories#simulation"
            >
              Simulação
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar jogos de Luta"
              to="/categories#fight"
            >
              Luta
            </S.Link>
          </li>
        </S.FooterLinks>
      </S.FooterSection>
      <S.FooterSection>
        <S.FooterTitle>Acesso rápido</S.FooterTitle>
        <S.FooterLinks>
          <li>
            <S.Link
              title="Clique aqui para acessar jogos promocionais"
              to="/#on-sale"
            >
              Promoções
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar seção em breve"
              to="/#coming-soon"
            >
              Em breve
            </S.Link>
          </li>
        </S.FooterLinks>
      </S.FooterSection>

      <S.FooterSection>
        <p>{currentYear} - &copy; E-GAMES Todos os direitos reservados.</p>
      </S.FooterSection>
    </div>
  </S.FooterContainer>
)

export default Footer
