// component do react - irá renderizar os outros componentes da aplicação
import React from 'react' // import do react
import ReactDOM from 'react-dom' //import do reactDOM para interagir com a pagina
import App from './main/app' //import do component app

import {createStore} from 'redux' // import para a criação da store
import {Provider} from 'react-redux' // import para a integração do react com o redux

import reducers from './main/reducers' //import do agrupamento de reducers

const store = createStore(reducers) // definir a store passando os reducers
ReactDOM.render(
    <Provider store={store}>{/* envolver a aplicação na tag provider para integra-la com o redux, passando o estado unico da aplicação(store) */}
        <App />
    </Provider>
, document.getElementById('app')) // Utilização do metodo render do reactDOM para rendereizar o compenent App chamando o id app la no index.html