const createPostsHTML = (posts) => {
  return posts.map(({ title, body }) => {
    return `
    <h2>${title}</h2>
    <p>${body}</p>
    `
  }).join(' ')
}

export default ({ posts }) => `${createPostsHTML(posts)}`
