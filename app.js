// Renders the single newest post from posts.json as the entire page.
// To change what's showing: add a new post block to the top of posts.json
// (or edit the existing one). Whichever post has the latest date wins.

document.getElementById('year').textContent = new Date().getFullYear();

const container = document.getElementById('post');

fetch('posts.json', { cache: 'no-store' })
  .then(res => {
    if (!res.ok) throw new Error('posts.json not found');
    return res.json();
  })
  .then(posts => {
    if (!Array.isArray(posts) || posts.length === 0) {
      container.innerHTML = '<p class="loading">nothing posted yet.</p>';
      return;
    }

    // newest date wins
    const sorted = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
    renderPost(sorted[0]);
  })
  .catch(err => {
    container.innerHTML = `<p class="loading">couldn't load posts.json — see README if you're previewing locally.</p>`;
    console.error(err);
  });

function renderPost(post) {
  container.innerHTML = '';

  if (post.image) {
    const img = document.createElement('img');
    img.src = post.image;
    img.alt = post.alt || post.title || 'update image';
    container.appendChild(img);
  }

  if (post.title) {
    container.classList.add('has-title');
    const title = document.createElement('h1');
    title.className = 'post-full-title';
    title.textContent = post.title;
    container.appendChild(title);
  }

  if (!post.image && !post.title) {
    container.innerHTML = '<p class="loading">this post has no image or title.</p>';
  }
}
