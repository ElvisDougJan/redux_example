function createStore() {
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
// Função reducer que modifica o estado
function todos(state = [], action) {
  if (action.type === 'ADD_TODO') {
    return state.concat([action.todo])
  }

  return state
}

const store = createStore(todos)

store.subscribe(() => console.log('O novo state é', store.getState()))

// 1º dispacth exemplo
store.dispatch({
  type: 'ADD_TODO',
  todo: {
    id: 0,
    name: 'Learn Redux',
    complete: false
  }
})

// 2º dispacth exemplo
store.dispatch({
  type: 'ADD_TODO',
  todo: {
    id: 1,
    name: 'Read book',
    complete: false
  }
})

// 3º dispacth exemplo
store.dispatch({
  type: 'ADD_TODO',
  todo: {
    id: 2,
    name: 'Play game',
    complete: true
  }
})
// unsubscribe()