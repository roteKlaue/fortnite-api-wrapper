# Fortnite API TypeScript Client

This TypeScript project provides a client for retrieving various Fortnite data using the [fortnite-api.com](https://fortnite-api.com). You can use this client to fetch information about banners, cosmetics, news, playlists, and more from the Fortnite game.

## Prerequisites

Before you get started, ensure you have the following prerequisites:

- [Node.js](https://nodejs.org/) installed on your machine.
- A code editor of your choice (e.g., Visual Studio Code).

## Installation

1. Clone or download this repository to your local machine.

```bash
git clone https://github.com/roteKlaue/fortnite-api-wrapper.git
```

2. Navigate to the project directory.

```bash
cd <project_directory>
```

3. Install the required dependencies using npm or yarn.

```bash
npm install
# or
yarn install
```

## Usage

You can use the provided functions to fetch Fortnite data from the Fortnite API. Here are some examples of how to use the client:

```js
const { aesKey, banners, shop } = require("wrapper-fortnite-api");

// Fetch the current AES key
aesKey().then((data) => {
    console.log("Current AES Key:", data);
});

// Fetch Fortnite banners
banners().then((data) => {
    console.log("Fortnite Banners:", data);
});

// Fetch Fortnite shop data
shop().then((data) => {
    console.log("Fortnite Shop:", data);
});
```

Feel free to customize the usage examples based on your specific needs.

## Documentation

Each function in the client is documented using JSDoc comments. You can refer to the comments in the source code for detailed information about each function, including the parameters they accept and the data they return.

## Contributing

Contributions are welcome! If you have improvements, bug fixes, or new features to add, please open an issue or submit a pull request.

License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
