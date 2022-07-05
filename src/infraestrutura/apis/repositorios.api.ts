import axios from 'axios'

const baseUrl = 'https://api.github.com/users/'

export const repositoriosAPI = {
  obter: (name) => axios.get(`${baseUrl}${name}/repos`),
}
