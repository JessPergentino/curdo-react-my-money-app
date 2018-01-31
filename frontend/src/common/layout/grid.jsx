//componente baseado em classe - para o padrão de doze colunas do bootstrap

import React, {Component} from 'react'

export default class Grid extends Component {

    toCssClasses(numbers) { // metodo que recebe uma string com um conjunto de numeros e irá transformar esse conjunto de numeros nas classes css do bootstrap
        const cols = numbers ? numbers.split(' ') : [] // armazena os numeros recebidos na constante cols - verifica se vinharam os numeros e quebra esses numeros com espaço, se não retorna um array vazio
        let classes = '' // padrão de classe do bootstrap que será usada no html

        // Aqui será verificado os numeros e posições para colocar no padrão de classes do bootstrap
        if(cols[0]) classes += `col-xs-${cols[0]}` 
        if(cols[1]) classes += `col-xs-${cols[1]}`
        if(cols[2]) classes += `col-xs-${cols[2]}`
        if(cols[3]) classes += `col-xs-${cols[3]}`

        return classes // retorna o padrão montado
    }

    render() {
        const gridClasses = this.toCssClasses(this.props.cols || '12') //Pega as classes geradas apartir da função ou retorna o numero 12 caso não seja fornecido nenhum numero

        return (
            <div className={gridClasses}>{/* recebe o gridClasses, atribui a classe da div*/}
                {this.props.children}
            </div>
        )
    }
    
}