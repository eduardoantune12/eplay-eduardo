import { createGlobalStyle } from 'styled-components'

export const cores = {
  branco: '#eee',
  azulEscuro: '#000071',
  azul: '#1607fa',
  verde: '#10AC84',
  cinza: '#A3A3A3'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.azulEscuro};
    color: ${cores.branco};
    padding-top: 40px;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
