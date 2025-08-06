import Tag from '../Tag'

import * as S from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
  id: number
}

const Product = ({
  title,
  category,
  system,
  description,
  infos,
  image,
  id
}: Props) => {
  const getDescription = (text: string) => {
    if (text.length > 95) {
      return text.slice(0, 95) + '...'
    }
    return text
  }

  return (
    <S.Card
      title={`Clique aqui para ver mais detalhes de ${title}`}
      to={`/product/${id}`}
    >
      <img src={image} alt={title} />
      <S.Infos>
        {infos.map((info) => (
          <Tag size="small" key={info}>
            {info}
          </Tag>
        ))}
      </S.Infos>
      <S.CardTitle>{title}</S.CardTitle>
      <Tag size="small">{category}</Tag>
      <Tag size="small">{system}</Tag>
      <S.CardDesc>{getDescription(description)}</S.CardDesc>
    </S.Card>
  )
}
export default Product
