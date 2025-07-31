import { Link } from 'react-router-dom'

import { HeaderBar, Links, LinkItem, CartButton } from './styles'

import logo from '../../assets/images/logo.svg'
import cart from '../../assets/images/shopping-cart.svg'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
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
      <CartButton onClick={openCart}>
        {items.length} - produtos(s)
        <img src={cart} alt="Carrinho de compras" />
      </CartButton>
    </HeaderBar>
  )
}

export default Header
