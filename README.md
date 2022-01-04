# Ozone [![TravisCI](https://app.travis-ci.com/jhdev96/ozone.svg?branch=main&status=passed)](https://app.travis-ci.com/github/jhdev96/ozone)

Ozone is a React toolkit and design library for building UIs.

Built with React and Typescript.

## Using the React components

```bash static
npm install @jhdev96/ozone
```

```js static
import React from 'react';
import { Alert } from '@jhdev96/core';

function App() {
  return (
    <Alert variation="info">Example alert</Alert>
  );
}

export default App;
```

## Development

The webpack dev server is used to serve a hot-reloading playground
where components can be viewed.

1. Clone this repo `git clone https://github.com/jhdev96/ozone.git`

2. Run the following commands from the project root:
    1. `npm install` in the project root
    1. `npm run bootstrap` (First time only)
    1. `npm start`
3. Navigate to http://localhost:4000 to view the React components

## Testing

To test the components run the following commands from the project root: 
1. `npm run build`
2. `npm test`

## License

Ozone is licensed under the Apache 2.0 License.