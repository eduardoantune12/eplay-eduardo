import Tag from '../Tag'

import { Card, CardTitle, CardDesc } from './styles'

const Product = () => (
  <Card>
    <img src="//place-hold.it/222x250" alt="" />
    <CardTitle>Nome do jogo</CardTitle>
    <Tag size="small">Categoria</Tag>
    <Tag size="small">Plataforma</Tag>
    <CardDesc>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quos
      tenetur temporibus! Inventore quibusdam consequatur in deserunt,
      reiciendis excepturi odit quod magni atque molestiae repellat laborum
      asperiores dolor, eligendi voluptatum?
    </CardDesc>
  </Card>
)
export default Product
