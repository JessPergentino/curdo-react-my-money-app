// funções que irão gerar as ações e que irão atualizar o estado - Dispara a ação

export function selectTab(tabId){ // função de seleção de abas
    return { // retorna um objeto
        type:'TAB_SELECTED', // Ação que será disparada
        payload: tabId //id da aba selecionada - será retornado para o reducer que gerencia o estado da aba
    }
}

export function showTabs(...tabIds) { // função para mostrar abas
    const tabsToShow = {} // objeto q recebe atributos que serão as abas q serão mostradas
    tabIds.forEach(e => tabsToShow[e] = true) // faz uma iteração sobre os ids passados pra função e adionam eles como atributos com valor true dentro do objeto tabsToShow
    return {
        type: 'TAB_SHOWED',
        payload: tabsToShow
    }
}