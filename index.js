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

  const subscribe = (listener) => {
    listeners.push(listener)
    return () => {
      listeners = listeners.filter(l => l !== listener)
    }
  }

  return {
    getState,
    subscribe
  }
}

const store = createState()

store.subscribe(() => {
  console.log('O novo state é ', store.getState())
})

const unsubscribe = store.subscribe(() => {
  console.log('O state foi modificado!')
})

unsubscribe()