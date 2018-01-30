// component do react - irá renderizar os outros componentes da aplicação
import React from 'react' // import do react
import ReactDOM from 'react-dom' //import do reactDOM para interagir com a pagina
import App from './main/app' //import do component app

ReactDOM.render(<App />, document.getElementById('app')) // Utilização do metodo render do reactDOM para rendereizar o compenent App chamando o id app la no index.html