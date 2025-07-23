import { Container, CardTitle } from './styles'

export type Props = {
  title: string
  background: 'blue' | 'darkBlue'
  children: JSX.Element
}

const Section = ({ title, background, children }: Props) => (
  <Container background={background}>
    <div className="container">
      <CardTitle>{title}</CardTitle>
      {children}
    </div>
  </Container>
)

export default Section
