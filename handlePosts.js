/*
Refactor this code to use forEach

function handlePosts() {
    
    
    for (var i = 0; i < posts.length; i++) {
      savePost(posts[i]);
    }
}
*/
var posts = [
      { id: 23, title: 'Daily JS News' },
      { id: 52, title: 'Code Refactor City' },
      { id: 105, title: 'The Brightest Ruby' }
    ];

  posts.forEach(post => {
      console.log(post.title);

  })

