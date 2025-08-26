// Abre o modal com conteúdo do card
document.querySelectorAll('.project-card .card-header').forEach(header => {
    header.addEventListener('click', function () {
        const card = this.parentElement;
        const modal = document.getElementById('projectModal');
        const modalBody = document.getElementById('modalBody');

        // Copia o conteúdo interno da card-body para o modal
        const content = card.querySelector('.card-body').innerHTML;
        modalBody.innerHTML = content;

        modal.classList.add('show');
    });
});

// Fecha o modal ao clicar no botão de fechar
document.querySelector('.close-button').addEventListener('click', () => {
    document.getElementById('projectModal').classList.remove('show');
});

// Fecha o modal ao clicar fora da modal-content
window.addEventListener('click', function (event) {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        modal.classList.remove('show');
    }
});


// Toggle Dark Mode
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
