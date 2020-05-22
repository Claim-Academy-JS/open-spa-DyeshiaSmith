import * as api from './api'

import { Posts } from './components'

// import 'bulma/css/bulma.min.css'

// '#root' is the 'mounting point' for our app inside of './index.html'
const root = document.querySelector('#root')

const state = {
  posts: []
}

const render = (state) => {
  root.innerHTML = `
    ${Posts(state)}
  `
}

(async () => {
  try {
    state.posts = await api.getAllPosts()
    render(state)
  } catch (error) {
    console.error(error)
  }
})()
