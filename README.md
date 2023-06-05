<h2 align="center">SHORTIFY</h2>

  <p align="center">
    A Node.js web application for generating shortened URLs
    <br />
    <a href="https://github.com/AnthonyGunardi/Shortify"><strong>Explore the project »</strong></a>
    <br />
    <br />
    <a href="https://github.com/AnthonyGunardi/Shortify/issues">Report Bug</a>
    ·
    <a href="https://github.com/AnthonyGunardi/Shortify/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary><h3>Table of Contents</h3></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#list-of-available-endpoints">List of available endpoints</a></li>
  </ol>
</details>
<br>


## About The Project
A web application for generating shortened URLs from original URLs, using Node.js with Express.js for the backend and Vue.js with Vuetify for the frontend. 

<p align="right">(<a href="#about-the-project">back to top</a>)</p>



### Built With

#### Back-end Tech Stacks:
* [Node.js](https://nodejs.org)
* [express.js](https://expressjs.com)
* [Mongoose](https://mongoosejs.com)
* [CORS](https://www.npmjs.com/package/cors)

#### Front-end Tech Stacks:
* [Vue.js](https://vuejs.org)
* [Vuetify](https://vuetifyjs.com)
* [SASS](https://sass-lang.com)


<p align="right">(<a href="#about-the-project">back to top</a>)</p>



## Getting Started


### Prerequisites

* Node.js installed
* MongoDB Atlas account
* API testing tool (Postman, Insomnia, etc)


### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/AnthonyGunardi/Shortify.git
   ```
2. Change into the project directory.
   ```sh
   cd Shortify
   ```
3. Install NPM packages
   <br>
   Change into backend folder, and type:
   ```sh
   npm install
   ```
   Open new terminal and change into frontend folder, and type:
   ```sh
   npm install
   ```
4. The project will start running on your local machine. You can access the backend at ```http://localhost:8081``` and the frontend at ```http://localhost:8080```.

<p align="right">(<a href="#about-the-project">back to top</a>)</p>



## Usage

### Backend

1. Change into backend folder
2. Rename file .env.example into .env and then change DATABASE_URL with your own MongoDB Atlas URL
3. Run the application
   ```sh
   npm run dev
   ```
4. The backend API will start running on your local machine. You can access the API at ```http://localhost:8081```
5. Test the API endpoints using API testing tool (Postman, Insomnia, etc)



### Frontend

1. Change into frontend folder
2. Run the application
   ```sh
   npm run serve
   ```
3. The frontend app will start running on your local machine. You can access the frontend at ```http://localhost:8080```

<p align="right">(<a href="#about-the-project">back to top</a>)</p>



## List of available endpoints

- `POST /`
- `GET /`
- `GET /:short_url`

<p align="right">(<a href="#about-the-project">back to top</a>)</p>


### POST /

description: 
  Generate short URL

Request:

- data:

```json
{
    "url": "https://www.google.com"
}
```

Response:

- status: 201
- body:

```json
{
    "status": 201,
    "message": "success",
    "data": {
        "id": "645db9a354abc377e7899641",
        "url": "https://www.google.com",
        "shortened_url": "UmJHXQ3V",
        "ip": "127.0.0.1",
        "created_at": "2023-05-12T03:59:31.061Z",
        "expire_at": "2023-05-14T03:59:31.061Z"
    }
}
```

- status: 400
- body:

```json
{
    "status": 400,
    "message": [
      "URL cannot be empty",
      "Please enter a valid URL",
      "URL is a required field"
    ]
    "data": {}
}
```

- status: 500
- body:
  ​
```json
{
    "status": 500,
    "message": "Internal Server Error!"
    "data": {}
}
```

<p align="right">(<a href="#list-of-available-endpoints">back to endpoints list</a>)</p>


### GET /

description: 
  Get all URL records

Response:

- status: 200
- body:

```json
{
    "status": 200,
    "message": "success",
    "data": [
      {
        "id": "647d53dd0c516e8ef2605c99",
        "url": "https://github.com/AnthonyGunardi/Shortify",
        "shortened_url": "Wqlsilzl",
        "ip": "127.0.0.1",
        "created_at": "2023-06-05T03:17:49.641Z",
        "expire_at": "2023-06-07T03:17:49.641Z"
      }
    ]
}
```


- status: 500
- body:
  ​
```json
{
    "status": 500,
    "message": "Internal Server Error!"
    "data": {}
}
```

<p align="right">(<a href="#list-of-available-endpoints">back to endpoints list</a>)</p>


### GET /short_url

description: 
  Redirect to the original URL

Request:

- params: short_url (string)

Response:

- status: 404
- body:

```json
{
    "code": 404,
    "msg": "Invalid short url"
}
```


- status: 500
- body:
  ​
```json
{
    "status": 500,
    "message": "Internal Server Error!"
    "data": {}
}
```

<p align="right">(<a href="#about-the-project">back to top</a>)</p>



## Frontend Web App

The frontend web app is located at ```http://localhost:8080```. It allows users to enter a URL and generate a shortened URL.

Desktop View : <br><br>
![Desktop View](https://raw.githubusercontent.com/AnthonyGunardi/Shortify/master/screenshot/Shortify-desktop.png)

Mobile View : <br><br>
![Mobile View](https://raw.githubusercontent.com/AnthonyGunardi/Shortify/master/screenshot/Shortify-mobile.png)

