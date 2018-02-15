// componente para a exibição das mensagens

import React from 'react'
import ReduxToastr from 'react-redux-toastr'
import 'modules/react-redux-toastr/lib/css/react-redux-toastr.css'

// configurações de como a mensagem irá aparecer
export default props => (
    <ReduxToastr 
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates={true}
        position='top-right'
        transitionIn='fadeIn'
        transitionOut='fadeOut'
        progressBar />
)