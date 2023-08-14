
const posts = [
  {
    id: 1,
    title:
      "Empresa de Tecnologia da Informação abre vagas para programa de estágio",
    text: "A Framework Digital, empresa mineira especializada em Tecnologia da Informação, irá iniciar o seu sexto programa de estágio, com o prazo de inscrições entre os dias 08 e 28 de agosto. O programa é conhecido como Framework Padawans, com inspiração nos filmes Star Wars. Nas histórias, os iniciantes fazem treinamentos para se tornar cavaleiros Jedi, que compõem o lado bom da força.",
    user: "Iris Silva",
    stack: "Front end Engineer",
    img: "./src/assets/img/user2.svg",
    likes: 25
  },
  {
    id: 2,
    title:
      "Programa de estágio abre vagas em Segurança da Informação com regime remoto",
    text: "Em Segurança da Informação, as vagas são destinadas às áreas de Security Operations Center (SOC), Administração de Dispositivos de Segurança (ADS), Resposta a Incidentes (RI), Segurança e Privacidade e Consultoria Técnica. O candidato interessado deverá estar matriculado em um curso superior em Ciência da Computação, Segurança da Informação, Tecnologia da Informação e afins, com previsão de conclusão do curso de fevereiro de 2023 a fevereiro de 2025.",
    user: "Carla Maria",
    stack: "Back end Engineer",
    img: "./src/assets/img/user4.svg",
    likes: 19
  },
  {
    id: 3,
    title: "O que é programação orientada a objetos e programação funcional",
    text: "A Programação Funcional é uma orientação focada na programação declarativa. Conhecendo mais a programação funcional a partir de códigos podemos nos deparar de primeira com o conceito mais central da programação funcional, que é o conceito de funções puras, isso significa que o retorno de uma função deve depender apenas dos seus parâmetros de entrada. Com classes podemos editar os valores das propriedades dos objetos criados ou ainda criar métodos para essas propriedades, ainda por cima podemos definir se vão ser públicos (vão para o objeto) ou estáticos (não são instanciados, ou seja, não vão para o objeto), e isso tem seu lado bom e ruim.",
    user: "Júlia Martins",
    stack: "Devop's",
    img: "./src/assets/img/user5.svg",
    likes: 8
  },
];






const openbtn = document.querySelectorAll('.open__post')
const modal = document.getElementById('modalFirst')
const modalContent = modal.querySelector('.modal-content');

openbtn.forEach(button => {
  button.addEventListener('click', () => {
    const postsId = button.getAttribute('data-id');
    const postContent = obtenerContenidoDelPost(postsId);
    modalContent.innerHTML = postContent;
    modal.showModal();
  });
});

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.close();
  }
});

function obtenerContenidoDelPost(postsId) {
  const post = posts.find(post => post.id.toString() === postsId);
  if (post) {
    return `
    <div class="perfil__nome">
    <img class="img__usario" src="${post.img}" alt="${post.user}" />  
    <p class="user__name">${post.stack}</p>
    <h2 class="main__post">${post.title}</h2>
      <p class="parrafo1">${post.text}</p>
      <div class="div_name"></div>
      
      <button id="btnFollow" class="follow__modal">Seguir</button>
      <img
      src="./src/assets/img/gray-heart.svg"
      alt="Empty Heart(Post not liked)"
      class="modal__likeHeart"
    />
    `;
  }
}

const contenidoDelPost = obtenerContenidoDelPost('');





const followedUserIds = [];


const followButtons = document.querySelectorAll(".follow_btn");

function toggleFollow(button, userId) {
  const isFollowing = followedUserIds.includes(userId);

  if (isFollowing) {

    followedUserIds.splice(followedUserIds.indexOf(userId), 1);
  } else {

    followedUserIds.push(userId);
  }

  button.textContent = isFollowing ? "Seguir" : "Seguindo";
  button.classList.toggle("following", !isFollowing);
}


followButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const userId = parseInt(button.getAttribute('data-user-id'));
    toggleFollow(button, userId);
  });
});

followButtonsModal.forEach((button) => {
  button.addEventListener("click", () => {
    const userId = parseInt(button.getAttribute('data-user-id'));
    toggleFollow(button, userId);
  });
});




