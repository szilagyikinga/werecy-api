# Werecy backend

## Development

- with live reload for the admin
  `cd admin && npm install && npm start`
  `npm install && npm run dev`
  - access to admin on `http://localhost:3000/`
  - you should have mongo running locally with data
- without live reload for the admin
  `cd admin && npm install && npm run build`
  `npm install && npm run dev`
  - access to admin on `http://localhost:8080/`
  - you should have mongo running locally with data
- you can also make it work in docker (to be fixed)

### Use production data locally

- download dump from clever cloud
- `mongorestore --archive --gzip < mongodb_7be143fc-5a59-4182-8409-b3236eb46ab8-20220105023350`

### Create admin

- insert admin with the following format in `admins` collection

```
{
    "_id": {
        "$oid": "61efcae25e92a5292ff31e9a"
    },
    "superAdmin": true,
    "name": "Werecy",
    "email": "werecy@test.fr",
    "hash": "$2b$12$hcDftZ2aY2DR0xh9RjICHuPzCSm9TEwTVyQ/4oVnjQVYTiJH0f23S", // werecy
    "createdAt": {
        "$date": "2022-01-19T08:04:43.987Z"
    },
    "updatedAt": {
        "$date": "2022-01-19T08:04:43.987Z"
    },
    "__v": 0
}
```

## Deployment

- The backend is hosted on clever cloud
  `git push master` to deploy
