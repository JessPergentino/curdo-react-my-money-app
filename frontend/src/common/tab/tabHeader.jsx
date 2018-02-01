//componente de classe - cabeçalho da aba - aba em si

import React, {Component} from 'react'

class TabHeader extends Component {
    render() {
        return (
            <li>
                <a href='javascript:;' 
                    data-toggle='tab' 
                    data-target={this.props.target}>{/*Irá garantir que o conteudo exbido será dessa aba, atravez do id que será passado pelo target*/}
                    <i className={`fa fa-${this.props.icon}`}></i> {this.props.label}
                    </a>
            </li>
        )
    }
}

export default TabHeader