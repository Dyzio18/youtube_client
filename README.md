# Youtube client
An application using Youtube REST API build with React and [Bootstrap.386](http://kristopolous.github.io/BOOTSTRA.386/index.html). 


### Run 
Install dependencies: 
`` npm install ``

Build project:
``` npm run build:watch ```

Use ESLint:
```npm run lint:watch ```

Tests: (coming soon)

### Config
You need your own API key to use app loacaly.
1. Create Google API key with [this instruction](https://developers.google.com/youtube/v3/getting-started)
2. Create file "config.youtube.js" in ./config/ 
3. Paste you key into config.youtube.js 

```
export  const configYoutube = {
    userKey: 'YOUR__KEY'
};
```
