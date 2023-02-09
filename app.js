const postsContainer = document.getElementById("posts");
const postDetailsContainer = document.getElementById("post-details");

async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    posts.slice(0, 8).forEach(post => {
      const postElement = document.createElement("li");
      const postLink = document.createElement("a");
      postLink.href = `post.html?id=${post.id}`;
      postLink.innerText = post.title;
      postElement.appendChild(postLink);
      postsContainer.appendChild(postElement);
    });
  } catch (error) {
    console.error(error);
  }
}
async function getPostDetails(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const post = await response.json();
    const postTitle = document.createElement("h3");
    postTitle.innerText = post.title;
    postDetailsContainer.appendChild(postTitle);
    const postBody = document.createElement("p");
    postBody.innerText = post.body;
    postDetailsContainer.appendChild(postBody);
  } catch (error) {
    console.error(error);
  }
}


const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get("id");
if (postId) {
  getPostDetails(postId);
} else {
  getPosts();
}
