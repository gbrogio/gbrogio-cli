# ![GUilherme Brogio CLI - LOGO](./assets/logo.svg)

> A cli to clone your template projects more easily and fast. One command and your project are created with all package installed.

- Improve your code velocity with this simple cli.
- Getting project template from (GITHUB).

## Instalação

Instale my-project com npm

```bash
  npm i -g @gbrogio/gbrogio-cli
```

---

## Commands 🤖

```bash
  • --init  -i  Initialize creation of the config file for cli works.

  • create  c   Initialize creation of new project from template repository.
  • update  u   Initialize update of the config file.
```

---
---
<a id="ghp-access-token"></a>

## GHP Access Token 🗝️

The GitHub Personal access token are an alternative to using passwords for authentication to GitHub when using the GitHub API or the command line. Personal access tokens are intended to access GitHub resources on behalf of yourself... [read mode](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

Follow the tutorial to generate your:
[Creating a personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#creating-a-personal-access-token-classic)

> In step 6 you can use the name "gbrogio-cli".

For update your ghp token when it expires usage:

```bash
  $ gbrg u -ght <your-gh-token-here>
  # or
  $ gbrogio u -ght <your-gh-token-here>
```

---
---

## Creating a template repository

> If you want to use a private repository, you will need ghp access token, follow the [last step](#ghp-access-token).

- Now [create your github repository](https://docs.github.com/en/get-started/quickstart/create-a-repo) and add your projects templates.
Then run the command:

  ```bash
    $ gbrg -i
    # or
    $ gbrogio --init
  ```

- Response the Answers correctly.
- Now run the command

  ```bash
    $ gbrg c
    # or
    $ gbrogio create
  ```

if your want to use another repository usage:

  ```bash
    $ gbrg c --rp https://github.com/<owner>/<repo>
    # or
    $ gbrogio create --repository https://github.com/<owner>/<repo>
  ```

> Run for more details:\
  > ```$ gbrg -h create -m```

---

## Feedback 📫

Have some feedback, talk with me guilhermebrogio.ps@gmail.com

## Creators

- [@gbrogio](https://www.github.com/gbrogio)

---

## Licença 📜

read the [MIT LICENSE](./LICENSE)
