import { useDispatch, useSelector } from 'react-redux'

import Button from '../Button'
import Tag from '../Tag'

import { parseToBrl } from '../../utils'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.prices.current!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        <ul>
          {items.map((item) => (
            <S.CartItem key={item.id}>
              <img src={item.media.thumbnail} alt={item.name}></img>
              <div>
                <h3>{item.name}</h3>
                <Tag size="small">{item.details.category}</Tag>
                <Tag size="small">{item.details.system}</Tag>
                <span>{parseToBrl(item.prices.current)}</span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </S.CartItem>
          ))}
        </ul>
        <S.GameQuantity>{items.length} jogo(s) no carrinho</S.GameQuantity>
        <S.GamePrice>
          Total de {parseToBrl(getTotalPrice())}{' '}
          <span>Em até 6x sem juros</span>
        </S.GamePrice>
        <Button title="Clique aqui para finalizar a compra" type="button">
          Continuar com a compra
        </Button>
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
