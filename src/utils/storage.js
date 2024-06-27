export const getPosts = () => {
    return JSON.parse(localStorage.getItem('posts')) || [];
  };
  
  export const getPostById = (id) => {
    const posts = getPosts();
    return posts.find(post => post.id === id);
  };
  
  export const savePost = (post) => {
    const posts = getPosts();
    if (post.id) {
      const index = posts.findIndex(p => p.id === post.id);
      posts[index] = post;
    } else {
      post.id = Date.now().toString();
      posts.push(post);
    }
    localStorage.setItem('posts', JSON.stringify(posts));
  };
  
  export const deletePost = (id) => {
    let posts = getPosts();
    posts = posts.filter(post => post.id !== id);
    localStorage.setItem('posts', JSON.stringify(posts));
  };
  