import * as S from './styles'

export type Props = {
  title: string
  background: 'blue' | 'darkBlue'
  children: JSX.Element
}

const Section = ({ title, background, children }: Props) => (
  <S.Container background={background}>
    <div className="container">
      <S.CardTitle>{title}</S.CardTitle>
      {children}
    </div>
  </S.Container>
)

export default Section
