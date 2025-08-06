import Tag from '../Tag'

import { Card, CardTitle, CardDesc, Infos } from './styles'

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
  const getDescription = (description: string) => {
    if (description.length > 95) {
      return description.slice(0, 95) + '...'
    }
    return description
  }

  return (
    <Card
      title={`Clique aqui para ver mais detalhes de ${title}`}
      to={`/product/${id}`}
    >
      <img src={image} alt={title} />
      <Infos>
        {infos.map((info) => (
          <Tag size="small" key={info}>
            {info}
          </Tag>
        ))}
      </Infos>
      <CardTitle>{title}</CardTitle>
      <Tag size="small">{category}</Tag>
      <Tag size="small">{system}</Tag>
      <CardDesc>{getDescription(description)}</CardDesc>
    </Card>
  )
}
export default Product
