async function loadNews() {
  try {
    const res = await fetch('/api/news?page=1&limit=20');
    const data = await res.json();

    const grid = document.querySelector('.news-grid');
    grid.innerHTML = ''; 

    data.items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'news-card';
      card.innerHTML = `
        <div class="news-date">${item.date}</div>
        <div class="news-content">
          <h3 class="news-title">${item.title}</h3>
          <div class="news-meta">
            <span class="news-comments">
              ${item.comment_count === 0 ? 'No Comments' : `${item.comment_count} Comment${item.comment_count !== 1 ? 's' : ''}`}
            </span>
            <a href="${item.url}" class="news-readmore">Read More</a>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
  } catch (err) {
    console.error('Failed to load news:', err);
  }
}

document.addEventListener('DOMContentLoaded', loadNews);



document.addEventListener('DOMContentLoaded', async () => {
  const comments = document.querySelectorAll('.news-comments');

  if (comments.length === 0) return;

  const ids = Array.from(comments)
    .map(el => el.dataset.postId)
    .filter(Boolean);

  if (ids.length === 0) return;

  try {
    const res = await fetch(`/api/news/comments-count?ids=${ids.join(',')}`);

    if (!res.ok) throw new Error('Network response was not ok');

    const data = await res.json();

   
    comments.forEach(el => {
      const id = el.dataset.postId;
      const count = Number(data.counts?.[id]) || 0;
      el.classList.remove('loading');
      el.textContent = count === 0 ? 'No Comments' : `${count} Comment${count !== 1 ? 's' : ''}`;
    });
  } catch (err) {
    console.error('Failed to load comment counts:', err);
    comments.forEach(el => {
      el.classList.remove('loading');
      el.textContent = 'Comments';
    });
  }
});
