const screen = {
  userProfile: document.querySelector(".profile-data"),
  renderUser(user) {
    this.userProfile.innerHTML = `<div class="info">
                <img src="${user.avatarUrl}" alt="Foto do perfil do usuário" />
                <div class="data">
                    <h1>${user.name ?? "não possui nome cadastrado 😭"}</h1>
                    <p>${user.bio ?? "não possui bio cadastrado 😭"}</p>
                    <p>Seguidores: ${user.followers}</p>
                    <p>Seguindo: ${user.following}</p>
                </div>
                </div>`;

    let repositoriesItens = "";
    user.repositories.forEach((repo) => (repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`));

    if (user.repositories.length > 0) {
      this.userProfile.innerHTML += `<div class="repositories section">
                                        <h2>Repositórios</h2>
                                        <ul>${repositoriesItens}</ul>
                                     </div>`;
    }
  },
  renderEvents(events) {
    if (!events.length) {
      this.userProfile.innerHTML += `<h3>Não há eventos disponíveis</h3>`;
      return;
    }

    let eventsItens = "";
    events.forEach((event) => {
      if (event.type === "PushEvent") {
        event.payload.commits.forEach((commit) => {
          eventsItens += `<li><span class="push">PushEvent</span> -> <span>${event.repo.name}</span><br>
          ${commit.message}</li>`;
        });
      } else if (event.type === "CreateEvent") {
        eventsItens += `<li><span class="create">CreateEvent</span> -> <span>${event.repo.name}</span><br>
        Sem mensagem de commit</li>`;
      }
    });

    this.userProfile.innerHTML += `<h2>Eventos recentes</h2>
     <ul>${eventsItens}</ul>`;
  },
  renderNotFound() {
    this.userProfile.innerHTML = `<h3>Usuário não encontrado</h3>`;
  },
};

export { screen };
