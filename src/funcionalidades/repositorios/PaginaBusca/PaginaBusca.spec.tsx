import '@testing-library/jest-dom'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import {
  act,
  fireEvent,
  render,
  screen,
} from '@testing-library/react'
import PaginaBusca from './PaginaBusca'

describe('PaginaBusca', () => {
  describe('Quando tela carregar', () => {
    beforeEach(() => {
      render(<PaginaBusca />)
    })

    describe('A imagem do cabeçalho', () => {
      let imagemOctocat
      beforeEach(() => {
        imagemOctocat = screen.getByAltText('Octocat 2010')
      })

      it('Deve ser exibida', () => {
        expect(imagemOctocat).toBeInTheDocument()
      })

      it('Deve possuir url do octocat vinda do github', () => {
        expect(imagemOctocat).toHaveAttribute('src', 'https://octodex.github.com/images/codercat.jpg')
      })

      it('Deve possuir 200 de tamanho', () => {
        expect(imagemOctocat).toHaveAttribute('width', '200')
      })
    })

    it('Deve exibir título da página com texto "Buscador do Github"', () => {
      expect(screen.getByText('Buscador do Github', { selector: 'h2' })).toBeInTheDocument()
    })

    it('Deve exibir subtítulo da página com texto "Testando o comportamento da sua app com Jest e Testing Library"', () => {
      expect(screen.getByText('Testando o comportamento da sua app com Jest e Testing Library', { selector: 'p' })).toBeInTheDocument()
    })

    it('Deve exibir campo de busca com label "Digite o nome do usuário"', () => {
      expect(screen.getByLabelText('Digite o nome do usuário', { selector: 'input' })).toBeInTheDocument()
    })

    it('Deve exibir botão com ícone de buscar', () => {
      expect(screen.getByTestId('SearchIcon')).toBeInTheDocument()
    })
  })

  describe('Quando usuário buscar repositório ', () => {
    beforeEach(async () => {
      const mock = new MockAdapter(axios)
      mock.onGet('https://api.github.com/users/fabiodamasceno/repos').reply(
        200,
        [
          {
            id: 1,
            name: 'agnoster-zsh-theme',
            description: 'A ZSH theme designed to disclose information contextually, with a powerline aesthetic',
            owner: {
              login: 'fabiodamasceno',
              avatar_url: 'https://avatars.githubusercontent.com/u/1590195?v=4"',
            },
          },
          {
            id: 2,
            name: 'agnoster-zsh-theme',
            description: 'descrição de teste',
            owner: {
              login: 'fabiodamasceno',
              avatar_url: 'https://avatars.githubusercontent.com/u/1590195?v=4"',
            },
          },
        ],
      )

      render(<PaginaBusca />)

      const campoUsuario = screen.getByLabelText('Digite o nome do usuário', { selector: 'input' })
      const campoBuscar = screen.getByText('Buscar')

      await act(() => {
        fireEvent.change(campoUsuario, { target: { value: 'fabiodamasceno' } })
        fireEvent.click(campoBuscar)
      })
    })

    it('Deve exibir título da lista', async () => {
      expect(await screen.findByText('Repositórios encontrados:', { selector: 'h4' })).toBeInTheDocument()
    })

    it('Deve exibir usuário buscado no campo de busca', async () => {
      expect(await screen.findByLabelText('Digite o nome do usuário', { selector: 'input' })).toHaveValue('fabiodamasceno')
    })

    it('Deve carregar item da lista com nome do repositório', async () => {
      expect(await (await screen.findAllByText('agnoster-zsh-theme', { selector: 'span' })).at(0)).toBeInTheDocument()
    })

    it('Deve carregar item da lista com descrição do repositório', async () => {
      expect(await screen.findByText('A ZSH theme designed to disclose information contextually, with a powerline aesthetic', { selector: 'span' })).toBeInTheDocument()
    })

    it('Deve carregar item da lista com avatar do dono do repositório', async () => {
      expect(await (await screen.findAllByAltText('fabiodamasceno')).at(0)).toHaveAttribute('src', 'https://avatars.githubusercontent.com/u/1590195?v=4"')
    })

    it('Deve carregar 2 itens na lista', async () => {
      expect(await screen.findAllByText('agnoster-zsh-theme', { selector: 'span' })).toHaveLength(2)
    })
  })
})
