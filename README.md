# NRS IDT WebApp

NRS IDT WebApp is a Vue.js application that provides a user-friendly interface for managing and visualizing population data. It allows users to filter and highlight states based on population data, and view detailed information about each state.


## Technologies Used

- ![Vue.js](https://img.shields.io/badge/-Vue.js-4FC08D?logo=vue.js&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black)
- ![Yarn](https://img.shields.io/badge/-Yarn-2C8EBB?logo=yarn&logoColor=white)
- ![NPM](https://img.shields.io/badge/-NPM-CB3837?logo=npm&logoColor=white) 
- ![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white)
- ![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)


## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- Node.js (v20 or higher)
- Yarn or npm

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/olivier1208/nrs-idt-webapp.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
   or
   ```sh
   yarn install
   ```

### Usage

To start the development vite server (with HMR out of the box), run:

```sh
npm run dev
```
or
```sh
yarn dev
```

To build the project for production, run:

```sh
npm run build
```
or
```sh
yarn build
```

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Possible Improvements

As I was running out of time, here's what I could have implemented over the scope :

 - Using Pinia to manage the state instead of querying the API on every click
 - Using LoadingOverlay to display a loading spinner when fetching data
 - Using Vue Router to implement a more complex routing system
 - Implementing a more complex filtering system
 - CI/CD pipeline integration with auto deployment

## BONUS 🤘

The app is deployed to netlify at : [https://idt-nrs.netlify.app/](https://idt-nrs.netlify.app/)

Each push on master will trigger a new deployment

You just need to have a running backend at `http://localhost:6868` to make it work

## License

Distributed under the MIT License. See `LICENSE` for more information.

Enjoy! 🚀
