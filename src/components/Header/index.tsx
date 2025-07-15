import { Link } from 'react-router-dom'

import { HeaderBar, Links, LinkItem, LinkCart } from './styles'

import logo from '../../assets/images/logo.svg'
import cart from '../../assets/images/shopping-cart.svg'

const Header = () => (
  <HeaderBar>
    <div>
      <Link to="">
        <img src={logo} alt="EGAMES" />
      </Link>

      <nav>
        <Links>
          <LinkItem>
            <Link to="/categories">Categorias</Link>
          </LinkItem>
          <LinkItem>
            <a href="#">Novidades</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Promoções</a>
          </LinkItem>
        </Links>
      </nav>
    </div>
    <LinkCart href="#">
      0 - produtos(s)
      <img src={cart} alt="Carrinho de compras" />
    </LinkCart>
  </HeaderBar>
)

export default Header
