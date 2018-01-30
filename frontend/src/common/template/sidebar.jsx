//componente SideBar - tem o component menu dentro dele

import React from 'react'
import Menu from './menu' // referencia de menu

export default props => (
    <aside className='main-sidebar'>
        <section className='sidebar'>
            <Menu/>
        </section>
    </aside>
)