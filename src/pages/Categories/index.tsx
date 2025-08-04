import { ProductsList } from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightingGamesQuery,
  useGetSportGamesQuery,
  useGetRpgGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: fightingGames } = useGetFightingGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()

  if (
    actionGames &&
    simulationGames &&
    fightingGames &&
    sportGames &&
    rpgGames
  ) {
    return (
      <>
        <ProductsList
          games={actionGames}
          title="Ação"
          background="darkBlue"
          id="action"
        />
        <ProductsList
          games={sportGames}
          title="Esportes"
          background="blue"
          id="sports"
        />
        <ProductsList
          games={fightingGames}
          title="Luta"
          background="darkBlue"
          id="fight"
        />
        <ProductsList games={rpgGames} title="RPG" background="blue" id="rpg" />
        <ProductsList
          games={simulationGames}
          title="Simulação"
          background="darkBlue"
          id="simulation"
        />
      </>
    )
  }

  return <h4>Carregando</h4>
}
export default Categories
