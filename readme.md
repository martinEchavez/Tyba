<!-- PROJECT LOGO -->

<p align="center">
   <p align="center">
    <img src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_124,h_45/https://tyba.com.co/wp-content/uploads/2021/02/tyba-logo.png" alt="Logo" width="124" height="45">
  </p>
   
  <p align="center">
    Tyba API
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#authentication">Authentication</a></li>
    <li><a href="#routes">Routes</a></li>
    <li><a href="#queris">Queris</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

## Installation

1. Clone the repo

   ```sh
   git clone https://github.com/martinEchavez/Tyba
   ```

2. Install NPM packages

   ```bash
   npm install
   ```

## Usage

1. Create an `.env` file with the following environment variables.

   | name           |     value      |
   | -------------- | :------------: |
   | PORT           |      4000      |
   | JWT_SECRET_KEY | JWT secret key |
   | API_KEY_MAPS   |  API_KEY_MAPS  |
   | URL_API        |    URL_API     |

   CONECTION DB

   | name              |        value        |
   | ----------------- | :-----------------: |
   | CLIENT_DB         |  db client sqlite3  |
   | FILENAME_DATABASE | connection filename |

2. Run the following command

   ```bash
     npm run dev
   ```

## Authentication

### credentials

| name     | value |
| -------- | :---: |
| username | admin |
| password | admin |

`Body Json Input`

```json
{
  "username": "admin",
  "password": "admin"
}
```

`Response`

```json
{
  "auth": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
}
```

## Routes

### authetication

> | `POST` | : `{{url}}/api/auth/signup`

> | `POST` | : `{{url}}/api/auth/signin`

### player

> | `GET` | : `{{url}}/api/maps/city?name=Cali`

`JSON response`

```json
{
  "responseMaps": [
    {
      "business_status": "OPERATIONAL",
      "formatted_address": "Cl. 1 #4b-2 a, Cra. 4b #130, Cali, Valle del Cauca, Colombia",
      "geometry": {
        "location": {
          "lat": 3.4484976,
          "lng": -76.54160639999999
        }
      },
      "name": "Sandwich Lovers"
    }
  ]
}
```

## Queris

> SELECT \* FROM user

## License

[MIT](https://choosealicense.com/licenses/mit/)
