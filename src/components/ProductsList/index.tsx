import Product from '../Product'

import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'blue' | 'darkBlue'
}

export const ProductsList = ({ background, title }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        <Product
          category="Ação"
          description="Teste"
          image="https://placehold.co/222x250"
          infos={['-5%', 'R$ 199,90']}
          system="PS4"
          title="The Last of Us"
        />
        <Product
          category="Ação"
          description="Teste"
          image="https://placehold.co/222x250"
          infos={['-5%', 'R$ 199,90']}
          system="PS4"
          title="The Last of Us"
        />
        <Product
          category="Ação"
          description="Teste"
          image="https://placehold.co/222x250"
          infos={['-5%', 'R$ 199,90']}
          system="PS4"
          title="The Last of Us"
        />
        <Product
          category="Ação"
          description="Teste"
          image="https://placehold.co/222x250"
          infos={['-5%', 'R$ 199,90']}
          system="PS4"
          title="The Last of Us"
        />
      </List>
    </div>
  </Container>
)
