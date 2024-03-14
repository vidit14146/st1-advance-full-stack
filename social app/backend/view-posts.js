window.onload = function() {
    fetchPosts();
    };
    function fetchPosts() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000/posts');
    xhr.setRequestHeader('Authorization', 'Bearer ' +
    localStorage.getItem('jwtToken'));
    xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
    var posts = JSON.parse(xhr.responseText);
    displayPosts(posts);
    }
    };
    xhr.send();
    }
    function displayPosts(posts) {
    var userId =
    JSON.parse(atob(localStorage.getItem('jwtToken').split('.')[1])).userId;
    var postsContainer = document.getElementById('posts-container');
    postsContainer.innerHTML = ''; // Clear existing posts
    posts.forEach(post => {
    var postElement = document.createElement('div');
    postElement.innerHTML = `
    <h3>${post.title}</h3>
    
    <p>${post.content}</p>
    ${post.userId === userId ?
    `<button onclick="editPost('${post._id}')">Edit</button>
    <button onclick="deletePost('${post._id}')">Delete</button>` : ''}
    <hr>
    `;
    postsContainer.appendChild(postElement);
    });
    }
    function editPost(postId) {
    localStorage.setItem('editPostId', postId);
    window.location.href = 'edit-post.html';
    }
    function deletePost(postId) {
    var xhr = new XMLHttpRequest();
    xhr.open('DELETE', 'http://localhost:3000/posts/' + postId, true);
    xhr.setRequestHeader('Authorization', 'Bearer ' +
    localStorage.getItem('jwtToken'));
    xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
    if (xhr.status === 200) {
    alert('Post deleted successfully');
    window.location.reload(); // Reload the posts
    } else {
    alert('Error deleting post');
    }
    }
    };
    xhr.send();
    }