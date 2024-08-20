# JamReel

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Dependencies](#dependencies)
6. [Acknowledgements](#acknowledgements)

## Introduction

JamReel, a web application using React, allows users to construct customized playlists using the Spotify library that they can save to their Spotify account. It's fun and user-friendly, with a visually appealing interface. 

## Features

- **Spotify Integration**: Creates and manages Spotify playlists by first authenticating with one's Spotify account. 
- **Dynamic Search**: Produces real-time search results to user input. 
- **User-Friendly Track Management**: Allows users to build limitless playlists, rename their playlists, add songs, and remove songs. Incorporates easily understandable, visual cues and buttons to guide users through the playlist creation process. 

## Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/irened123/JamReel.git
    ```

2. **Navigate to the project directory**:
    ```sh
    cd JamReel 
    ```

3. **Install dependencies**:
    Make sure you have [Node.js](https://nodejs.org/) installed. Then, run:
    ```sh
    npm install
    ```
4. **Create a Spotify Developer account**: If you haven’t already, sign up for a Spotify Developer account and create a new application. Obtain your Client ID and Client Secret from the Spotify Developer Dashboard.

5. **Set up environment variables**: Create a .env file in the root directory of the project and add your Spotify API credentials. Your .env file should look something like this:

```plaintext
REACT_APP_SPOTIFY_CLIENT_ID=your-client-id
```

6. **Start the development server**:
   ```sh
    npm start 
    ```
   
## Usage

To run JamReel, follow these steps:

1. **Authenticate with Spotify**: The first time you use JamReel, you'll be redirected to an authentication page, where you should log into your Spotify account. 

2. **Enter a song name**: Start searching for songs, which will appear in your search results.

3. **Create, name, and save your playlist**: Add songs and remove songs from your playlist using the buttons! Have fun, and remember that you can create as many playlists as you want. 

## Dependencies

This project relies on several key dependencies:

- **React:** A JavaScript library for building user interfaces.
- **React Router:** For handling routing within the single-page application.
- **Spotify Web API JS:** A lightweight JavaScript library for interacting with the Spotify Web API.
- **Axios:** Used for making HTTP requests to the Spotify API.
- **dotenv:** For loading environment variables from a `.env` file into `process.env`.

All dependencies will be installed automatically when you run `npm install`.

## Acknowledgements

The inspiration for this project—creating a React application for users to construct Spotify playlists—originated from Codecademy's [Full Stack Engineer Career Path](https://www.codecademy.com/learn/paths/full-stack-engineer-career-path). While the project task was part of the portfolio projects offered in the course, the implementation is unique and my own.

- **Spotify.js File:** This project includes the `Spotify.js` file, which was directly copied from the example provided by [Codecademy](https://www.codecademy.com/journeys/full-stack-engineer/paths/fscj-22-front-end-development/tracks/fscj-22-react-part-ii/modules/wdcp-22-jammming-54dd6aa4-39da-42be-989f-67a12f65b1a8/kanban_projects/jammming-react18#:~:text=project%3F%20Click%20this-,link,-to%20download%20a). This file handles the interactions with the Spotify API, making it easier to authenticate users and search for songs.

- **Guidance from Example Solution:** I used the example solution provided by Codecademy as a reference to guide my code development process. The example solution came from [here](https://www.codecademy.com/journeys/full-stack-engineer/paths/fscj-22-front-end-development/tracks/fscj-22-react-part-ii/modules/wdcp-22-jammming-54dd6aa4-39da-42be-989f-67a12f65b1a8/kanban_projects/jammming-react18#:~:text=project%3F%20Click%20this-,link,-to%20download%20a). While my project is unique, this resource was invaluable in helping me understand key concepts and implementation strategies.


