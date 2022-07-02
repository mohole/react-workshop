# React Workshop - 15+29/06/2022 @ Mohole

## Requirements

- [Node.js](https://nodejs.org/) v16+
- [VS Code](https://code.visualstudio.com/)
- [React developer tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) (_browser extension_)

## What we are using

- [React v18](https://reactjs.org/) - reactive UI library
- [React Router v6](https://reactrouter.com/) - client side routing for React
- [Vite.js](https://vitejs.dev/) - project bootstrapping
- [TailwindCSS](https://tailwindcss.com/) - CSS as utility classes
- [DaisyUI](https://daisyui.com/) - UI components built on top of TailwindCSS

## Repository structure

| Folder          | Description                     |
| --------------- | ------------------------------- |
| `(root)`        | main config files               |
| `/fundamentals` | React introduction source files |
| `/examples `    | Out of scope examples           |
| `/src`          | web app source files            |

## API

The API consumed by the application in the /src folder is [https://mohole-react-backend.herokuapp.com/excursions](https://mohole-react-backend.herokuapp.com/excursions) , the project behind it is the [backend](https://github.com/mohole/react-workshop/tree/backend) branch.

## Getting started

Clone the repo

```bash
$ git clone https://github.com/mohole/react-workshop
```

change to project folder

```bash
$ cd react-workshop
```

install the dependencies

```bash
$ npm ci
```

start the local development server

```bash
$ npm run dev
```

you can now check your application at `http://localhost:3000`.

## License

Released under the [MIT License](LICENSE).
