// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAYCqVK4sa7QypRZ9hljJjNK7N55xqdfoY',
    authDomain: 'firechat-f60a9.firebaseapp.com',
    databaseURL: 'https://firechat-f60a9.firebaseio.com',
    projectId: 'firechat-f60a9',
    storageBucket: 'firechat-f60a9.appspot.com',
    messagingSenderId: '806415354767'
  }
};
