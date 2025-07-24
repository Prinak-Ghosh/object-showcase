function showModal(title, details) {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-details').textContent = details;
  document.getElementById('modal').classList.add('show');
}
function hideModal() {
  document.getElementById('modal').classList.remove('show');
} 