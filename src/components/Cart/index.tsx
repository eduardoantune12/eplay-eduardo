import Button from '../Button'
import starWars from '../../assets/images/star_wars.png'
import {
  Overlay,
  CartContainer,
  Sidebar,
  GameQuantity,
  GamePrice,
  CartItem
} from './styles'
import Tag from '../Tag'

const Cart = () => (
  <CartContainer>
    <Overlay />
    <Sidebar>
      <ul>
        <CartItem>
          <img src={starWars}></img>
          <div>
            <h3>Nome do jogo</h3>
            <Tag size="small">RPG</Tag>
            <Tag size="small">PS5</Tag>
            <span>R$ 150,00</span>
          </div>
          <button type="button" />
        </CartItem>
        <CartItem>
          <img src={starWars}></img>
          <div>
            <h3>Nome do jogo</h3>
            <Tag size="small">RPG</Tag>
            <Tag size="small">PS5</Tag>
            <span>R$ 150,00</span>
          </div>
          <button type="button" />
        </CartItem>
      </ul>
      <GameQuantity>2 jogo(s) no carrinho</GameQuantity>
      <GamePrice>
        Total de R$ 250,00 <span>Em até 6x sem juros</span>
      </GamePrice>
      <Button title="Clique aqui para finalizar a compra" type="button">
        Continuar com a compra
      </Button>
    </Sidebar>
  </CartContainer>
)

export default Cart
