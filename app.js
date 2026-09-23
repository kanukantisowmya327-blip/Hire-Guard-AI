const modal = document.querySelector('#candidateModal');
const openModal = () => modal.classList.remove('hidden');
const closeModal = () => modal.classList.add('hidden');
document.querySelector('#addCandidate').addEventListener('click', openModal);
document.querySelector('#closeModal').addEventListener('click', closeModal);
modal.addEventListener('click', (event) => { if (event.target === modal) closeModal(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeModal(); });
document.querySelector('#candidateForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const name = new FormData(event.target).get('name');
  closeModal();
  event.target.reset();
  document.querySelector('.count-badge').textContent = '4';
  alert(`${name} was added to the review queue.`);
});
document.querySelectorAll('[data-view]').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.nav-item').forEach((item) => item.classList.remove('active'));
    const matchingNav = document.querySelector(`.nav-item[data-view="${button.dataset.view}"]`);
    if (matchingNav) matchingNav.classList.add('active');
    if (button.dataset.view !== 'overview') alert(`${button.textContent.trim()} is ready for your next review.`);
  });
});
document.querySelector('#rangeSelect').addEventListener('change', (event) => {
  const subtitle = document.querySelector('.chart-panel .panel-heading p');
  subtitle.textContent = `${event.target.value} candidate movement`;
});
