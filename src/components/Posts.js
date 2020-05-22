const createPostsHTML = (posts) => {
  return posts.map(({ title, body }) => {
    return `
    <h2>${title}</h2>
    <ul>
    <li>${body}</li>
    </ul>
    `
  }).join(' ')
}

export default ({ posts }) => `${createPostsHTML(posts)}`
