const posts = [
    {
        title: "First Blog Post",
        content: "This is the content of the first blog post."
    },
    {
        title: "Second Blog Post",
        content: "This is the content of the second blog post."
    },
    {
        title: "Third Blog Post",
        content: "This is the content of the third blog post."
    }
];

const postsDiv = document.getElementById('posts');
posts.forEach(post => {
    const postDiv = document.createElement('div');
    postDiv.className = 'post';
    postDiv.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
    postsDiv.appendChild(postDiv);
});
