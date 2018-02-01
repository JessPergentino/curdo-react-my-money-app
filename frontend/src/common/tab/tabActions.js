// funções que irão gerar as ações e que irão atualizar o estado - Dispara a ação

export function selectTab(tabId){
    console.log(tabId)
    return { // retorna um objeto
        type:'TAB_SELECTED', // Ação que será disparada
        payload: tabId //id da aba selecionada - será retornado para o reducer que gerencia o estado da aba
    }
}