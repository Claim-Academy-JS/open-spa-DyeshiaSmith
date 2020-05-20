export const getAllPosts = async () => {
  try {
    const resp = await window.fetch('https://jsonplaceholder.typicode.com/posts')

    return resp.json()
  } catch (error) {
    throw Error(error)
  }
}
