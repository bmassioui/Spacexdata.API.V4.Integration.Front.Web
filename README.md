# Spacexdata.API.V4.Integration.Front.Web

This project is a web frontend application built with React and TypeScript, designed to work with the backend application.

<div style="text-align:center">
    <img alt="Project banner" src="./documentation/banner.png" />
</div>

## Introduction

This web application provides a user interface to interact with the [backend application](https://github.com/bmassioui/Spacexdata.API.V4.Integration.ApiGateway). It is an UI management tool built to ease the visualization and readability of [SpaceX data](https://github.com/r-spacex/SpaceX-API/tree/master/docs#rspacex-api-docs).

## Getting Started

To get started with the React TypeScript web frontend, follow these steps:

### Requirements

- Node.js (version ^18)
- npm (version ^8)

### Installation

1. Clone the repository - _main_:

   ```shell
   git clone https://github.com/bmassioui/Spacexdata.API.V4.Integration.Front.Web
   ```

2. Navigate to the project directory:

   ```shell
    cd Spacexdata.API.V4.Integration.Front.Web
   ```

3. Install dependencies::
   ```shell
   npm install
   ```

### Running the App

To run the web frontend locally, use the following command:

```shell
npm start
```

This will start the development server and open the web app in your default browser. You can access it at http://localhost:3000.

### Running the app via docker

To build the Docker image for the React TypeScript web frontend, follow these steps:

1. Build the Docker image using the following command:

   ```shell
   docker build -t spacexdata-integration-frontweb .
   ```

2. Run the Docker container with the following command:

   ```shell
   docker run -p 3000:3000 spacexdata-integration-frontweb
   ```

3. Open your web browser and navigate to http://localhost:3000 to access the app.

### Building for Production

To build the web frontend for production, use the following command:

```shell
npm run build
```

This will create an optimized production-ready build in the `build` directory.

### Code Formatting and Linting

1. Prettier
   [Prettier](https://prettier.io/) is used for code formatting. You can run the following command to format the codebase:

```shell
npm run format
```

2. ESLint
   [ESLint](https://eslint.org/) is used for code linting. You can run the following command to lint and fix the codebase:

```shell
npm run lint:fix
```

#### License

[MIT License](https://opensource.org/license/mit/)

```
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
