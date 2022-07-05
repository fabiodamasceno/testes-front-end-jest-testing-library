// import '@testing-library/jest-dom'
// import { render, screen, within } from '@testing-library/react'
// import PaginaApontamento from './PaginaBusca'

// describe('PaginaBusca', () => {
//   describe('Quando tela renderizar', () => {
//     beforeEach(() => {
//       render(<PaginaApontamento />)
//     })

//     it('Deve exibir título da página com texto Apontamento de horas', async () => {
//       expect(await screen.findByText('Apontamento de Horas', { selector: 'h1' })).toBeInTheDocument()
//     })

//     it('Deve exibir o botão de "Novo apontamento"', async () => {
//       expect(await screen.findByText('Novo apontamento')).toBeInTheDocument()
//     })

//     it('Deve exibir o botão de "Gráfico de Horas"', async () => {
//       expect(await screen.findByText('Gráfico de Horas')).toBeInTheDocument()
//     })

//     describe('Formulário de pesquisa', () => {
//       it('Deve exibir o campo de seletor de Cliente', async () => {
//         expect(await screen.findByLabelText('Cliente', { selector: 'select' })).toBeInTheDocument()
//       })

//       it('Deve exibir o campo de seletor de Projeto', async () => {
//         expect(await screen.findByLabelText('Projeto', { selector: 'select' })).toBeInTheDocument()
//       })

//       it('Deve exibir o campo de seletor de Profissional', async () => {
//         expect(await screen.findByLabelText('Profissionais', { selector: 'select' })).toBeInTheDocument()
//       })

//       it('Deve exibir o campo de seletor de Periodo', async () => {
//         expect(await screen.findByLabelText('Período', { selector: 'select' })).toBeInTheDocument()
//       })

//       describe('Campo Itens Por Página', () => {
//         let selectItensPorPágina: HTMLElement

//         beforeEach(async () => {
//           selectItensPorPágina = await screen.findByLabelText('Itens Por Página', { selector: 'select' })
//         })

//         it('Deve exibir o campo de seletor de Itens Por Página', async () => {
//           expect(selectItensPorPágina).toBeInTheDocument()
//         })

//         it('Deve existir a opção com o valor 10 no seletor de Itens Por Página', () => {
//           expect(within(selectItensPorPágina).getByText(10)).toBeInTheDocument()
//         })

//         it('Deve existir a opção com o valor 20 no seletor de Itens Por Página', () => {
//           expect(within(selectItensPorPágina).getByText(20)).toBeInTheDocument()
//         })

//         it('Deve existir a opção com o valor 50 no seletor de Itens Por Página', () => {
//           expect(within(selectItensPorPágina).getByText(50)).toBeInTheDocument()
//         })

//         it('Deve existir a opção com o valor 100 no seletor de Itens Por Página', () => {
//           expect(within(selectItensPorPágina).getByText(100)).toBeInTheDocument()
//         })
//       })

//       describe('Campo Ordenação', () => {
//         it('Deve exibir o label de descriçao de Ordenação', async () => {
//           expect(await screen.findByText('Ordenação', { selector: 'legend' })).toBeInTheDocument()
//         })

//         it('Deve exibir a opção "Decrescente" no campo de radio de Ordenação', async () => {
//           expect(await screen.findByLabelText('Decrescente', { selector: 'input' })).toBeInTheDocument()
//         })

//         it('Deve exibir a opção "Crescente" no campo de radio de Ordenação', async () => {
//           expect(await screen.findByLabelText('Crescente', { selector: 'input' })).toBeInTheDocument()
//         })
//       })

//       it('Deve exibir botão buscar', async () => {
//         expect(await screen.findByText('Buscar', { selector: 'button' })).toBeInTheDocument()
//       })
//     })

//     describe('Tabela', () => {
//       it('Deve exibir título da tabela "Total de Horas Apontadas"', async () => {
//         expect(await screen.findByText('Total de Horas Apontadas:', { selector: 'strong' })).toBeInTheDocument()
//       })

//       it('Deve exibir campo "Data" na tabela', async () => {
//         expect(await screen.findByText('Data', { selector: 'th' })).toBeInTheDocument()
//       })

//       it('Deve exibir campo "Início" na tabela', async () => {
//         expect(await screen.findByText('Início', { selector: 'th' })).toBeInTheDocument()
//       })

//       it('Deve exibir campo "Fim" na tabela', async () => {
//         expect(await screen.findByText('Fim', { selector: 'th' })).toBeInTheDocument()
//       })

//       it('Deve exibir campo "Horas" na tabela', async () => {
//         expect(await screen.findByText('Horas', { selector: 'th' })).toBeInTheDocument()
//       })

//       it('Deve exibir campo "Atividade" na tabela', async () => {
//         expect(await screen.findByText('Atividade', { selector: 'th' })).toBeInTheDocument()
//       })

//       it('Deve exibir campo "Fase" na tabela', async () => {
//         expect(await screen.findByText('Fase', { selector: 'th' })).toBeInTheDocument()
//       })

//       it('Deve exibir campo "Projeto" na tabela', async () => {
//         expect(await screen.findByText('Projeto', { selector: 'th' })).toBeInTheDocument()
//       })

//       it('Deve exibir campo "Profissional" na tabela', async () => {
//         expect(await screen.findByText('Profissional', { selector: 'th' })).toBeInTheDocument()
//       })

//       it('Deve exibir campo "Descrição" na tabela', async () => {
//         expect(await screen.findByText('Descrição', { selector: 'th' })).toBeInTheDocument()
//       })

//       it('Deve exibir campo "Editar/Excluir" na tabela', async () => {
//         expect(await screen.findByText('Editar/Excluir', { selector: 'th' })).toBeInTheDocument()
//       })

//       it('Deve exibir valor "31/05/2022" no campo "Data"', async () => {
//         expect(await screen.findByText('31/05/2022', { selector: 'td' })).toBeInTheDocument()
//       })

//       it('Deve exibir valor "13:00" no campo "Início"', async () => {
//         expect(await screen.findByText('13:00', { selector: 'td' })).toBeInTheDocument()
//       })

//       it('Deve exibir valor "18:00" no campo "Fim"', async () => {
//         expect(await screen.findByText('18:00', { selector: 'td' })).toBeInTheDocument()
//       })

//       it('Deve exibir valor "05:00" no campo "Horas"', async () => {
//         expect(await screen.findByText('05:00', { selector: 'td' })).toBeInTheDocument()
//       })

//       it('Deve exibir valor "Desenvolvimento" no campo "Atividade"', async () => {
//         expect(await screen.findByText('Desenvolvimento', { selector: 'td' })).toBeInTheDocument()
//       })

//       it('Deve exibir valor "Fase teste" no campo "Fase"', async () => {
//         expect(await screen.findByText('Fase teste', { selector: 'td' })).toBeInTheDocument()
//       })

//       it('Deve exibir valor "Spine" no campo "Projeto"', async () => {
//         expect(await screen.findByText('Spine', { selector: 'td' })).toBeInTheDocument()
//       })

//       it('Deve exibir valor "Profissional Lambda3" no campo "Profissional"', async () => {
//         expect(await screen.findByText('Profissional Lambda3', { selector: 'td' })).toBeInTheDocument()
//       })

//       it('Deve exibir valor "Devs do futuro" no campo "Descrição"', async () => {
//         expect(await screen.findByText('Devs do futuro', { selector: 'td' })).toBeInTheDocument()
//       })

//       it('Deve exibir valor com ícone de detalhes no campo "Editar/Excluir"', async () => {
//         expect(await screen.findByTitle('Detalhes')).toBeInTheDocument()
//       })

//       it('Deve exibir valor com ícone de editar no campo "Editar/Excluir"', async () => {
//         expect(await screen.findByTitle('Editar')).toBeInTheDocument()
//       })

//       it('Deve exibir valor com ícone de excluir no campo "Editar/Excluir"', async () => {
//         expect(await screen.findByTitle('Excluir')).toBeInTheDocument()
//       })
//     })
//   })
// })
