# express-sub
An easy and simple subdomain routing.

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally) command:

```sh
$ npm install express-sub
```

## API

```js
var { root, sub } = require('express-sub')
```

## Usage
### Root
**localhost**:
```js
root(route)
```
**localhost** **domain**:
```js
root(route, 'domain')
```

### Subdomain
**Subdomain Routing** is not support *. because it's simple
```js
sub('subdomain', route)
```

## Sample

```js
const
    express = require('express'),
    { root, sub } = require('express-sub'),
    app = express(),
    main = express.Router(),
    api = express.Router()

main
    .get('*', (req, res) => {
        res.send(`This is main`)
    })

api
    .get('*', (req, res) => {
        res.send(`This is api`)
    })

app
    .use(sub('api.', api)) // <-- route for api subdomain
    .use(sub('www.', main)) // <-- route for www subdomain
    .use(root(main, 'example.com')) // <-- route for root domain

    .use((req, res, callback) => {
        res.status(404).send(`404`)
    })

app.listen(80, () => {
    console.log(`App listening on port 80`)
})
```
