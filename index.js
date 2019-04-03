// Função reducer que modifica o estado
function todos(state = [], action) {
  if (action.type === 'ADD_TODO') {
    return state.concat([action.todo])
  }

  return state
}


function createState() {
  let state
  let listeners = []

  const getState = () => state

  // Função de monitoramento que é acionada depois da alteração do estado
  const subscribe = (listener) => {
    listeners.push(listener)
    return () => {
      listeners = listeners.filter(l => l !== listener)
    }
  }

  // Função chamada com uma action que dispara a modificação
  const dispatch = (action) => {
    state = todos(state, action)
    listeners.forEach(listener => listener())
  }

  return {
    getState,
    subscribe,
    dispatch
  }
}

// App Code
function todos (state = [], action) {
  if (action.type === 'ADD_TODO') {
    return state.concat([action.todo])
  }

  return state
}

// const store = createState()

// store.subscribe(() => {
//   console.log('O novo state é ', store.getState())
// })

// const unsubscribe = store.subscribe(() => {
//   console.log('O state foi modificado!')
// })

// unsubscribe()