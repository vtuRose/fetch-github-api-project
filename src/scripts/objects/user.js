const user = {
  avatarUrl: "",
  name: "",
  bio: "",
  userName: "",
  repositories: [],
  followers: "",
  following: "",
  forks: "",
  stargazers: "",
  watchers: "",
  language: "",
  setInfo(gitHubUser) {
    this.avatarUrl = gitHubUser.avatar_url;
    this.name = gitHubUser.name;
    this.bio = gitHubUser.bio;
    this.userName = gitHubUser.login;
    this.followers = gitHubUser.followers;
    this.following = gitHubUser.following;
    this.forks = gitHubUser.forks_count;
    this.stargazers = gitHubUser.stargazers_count;
    this.watchers = gitHubUser.watchers_count;
    this.language = gitHubUser.language;
  },
  setRepositories(repositories) {
    this.repositories = repositories;
  },
};

export { user };
