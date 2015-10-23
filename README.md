## Prerequisites

1\. Install [Node.js](http://nodejs.org). You should have the lastest node and npm versions or you will get an npm error. `>= npm 2.10.1, node 0.12.4`

2\. Install these NPM packages globally

3\. Install cordova and ionic globally

```bash
npm install -g cordova ionic
```

```bash
npm install -g bower gulp
```

3\. [Set up an SSH key with github](https://help.github.com/articles/generating-ssh-keys/)

4\. Ensure you are in the `up-ui-readaccess` team on github

### Usage


Run `gulp` from the command line to build the `www` folder which contains processed and minified code
- `gulp` -> default development task
- `gulp deploy` -> development task + minification and compression

To run project on ios simulator

Add platform

```bash
ionic platform add ios
```
Emulate using xcode

```bash
ionic emulate ios
```
