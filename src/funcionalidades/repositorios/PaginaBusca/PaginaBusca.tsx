import React from 'react'
import {
  Container
} from './PaginaBusca.styles'
export default () => (
  <>
    <div className="row">
      <div className="col s2">
        <img src="https://octodex.github.com/images/codercat.jpg" width="200" className="responsive-img" alt="octocat" />
      </div>
      <div className="col s10">
        <h1>Repositórios do Github</h1>
        Testando o comportamento da sua app com Jest e Testing Library
      </div>
    </div>
    <div className="row">
      <div className="input-field col s10 ">
        <i className="material-icons prefix">account_circle</i>
        <input id="txtSearch" type="text" />
        <label htmlFor="txtSearch">Localize os repositórios dos usuários do github</label>
      </div>
      <div className="input-field col s2 ">
        <a id="btnSearch" className="waves-effect waves-light btn grey darken-3">
          <i className="material-icons ">search</i>
        </a>
      </div>
    </div>

    <div className="row">
      <div className="col s12">
        <ul id="repoList" className="collection with-header">
        </ul>
      </div>
    </div>
  </>
)
