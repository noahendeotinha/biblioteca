document.addEventListener('DOMContentLoaded', () => {
  /* Toggle hamburger nav */
  document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
  });

  /* Inserir projetos dinamicamente */
  const projects = [
    { title: 'Projeto 1', desc: 'Descrição breve.', img: 'https://via.placeholder.com/400x300', url: '#' },
    { title: 'Projeto 2', desc: 'Descrição breve.', img: 'https://via.placeholder.com/400x300', url: '#' },
    // acrescente mais...
  ];

  const grid = document.querySelector('.projects-grid');
  projects.forEach(proj => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <img src="${proj.img}" alt="${proj.title}">
      <div class="card-body">
        <h3>${proj.title}</h3>
        <p>${proj.desc}</p>
        <a href="${proj.url}" target="_blank">Ver projeto</a>
      </div>`;
    grid.appendChild(card);
  });

  /* Formulário de contato – simulação envio */
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  form.addEventListener('submit', e => {
    e.preventDefault();
    // Simula envio
    setTimeout(() => {
      status.textContent = 'Mensagem enviada com sucesso!';
      form.reset();
    }, 1000);
  });
});
