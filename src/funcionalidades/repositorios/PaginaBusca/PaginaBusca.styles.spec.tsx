import renderer from 'react-test-renderer'
import 'jest-styled-components'
import '@testing-library/jest-dom'
import colors from '../../../assets/styles/colors'


describe('PaginaApontamento', () => {
  describe('Quando tela renderizar', () => {
    describe('LinkBotão', () => {
      it('Deve atribuir background-color viking quando for primário', () => {
        // const tree = renderer.create(<LinkBotão tipo='primário' />).toJSON()
        // expect(tree).toHaveStyleRule('background-color', `${colors.viking}`)
      })

      it('Deve atribuir background-color cadetBlue quando for secundário', () => {
        // const tree = renderer.create(<LinkBotão tipo='secundário' />).toJSON()
        // expect(tree).toHaveStyleRule('background-color', `${colors.cadetBlue}`)
      })
    })
  })
})
