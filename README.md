# Tiny Node.JS Service Starter Kit

Helps quickly start coding tiny/small Node.JS services.

Standard settings are provided for:

- Convenience [`npm`](https://docs.npmjs.com/misc/scripts) scripts
- [ESLint](http://eslint.org/) and [Standard](https://standardjs.com/)
- [Husky](https://github.com/typicode/husky) git hooks integration
- [npm-check](https://github.com/dylang/npm-check) checks!
- [Mocha](https://mochajs.org/), [Chai](http://chaijs.com/) and [istanbul/nyc](https://istanbul.js.org)

## Getting started

First of all, clone the repo:

```bash
$ git clone https://github.com/gabmontes/tiny-nodejs-service-starter.git <my-service-name>
$ cd <my-service-name>
```

Then, do some cleanup and init the new service's repo:

```bash
$ rm -rf .git    # Cleans up git and unlinks from the upstream repo
$ git init       # Initializes git again
$ npm init       # Initializes npm
$ npm install    # Installs base packages
```

After the service's code is ready, just set the proper version and publish!

```bash
$ npm version <major|minor|patch>    # updates package.json and applies tag
$ npm publish                        # lints, builds and publishes
$ git push --follow-tags             # don't forget to push the code and tags!
```

## Folder's structure

```
.
├── src        # Service source files
└── test       # Tests folder
```

## TODO

[ ] Lint commit messages in a hook like `@commitlint/cli` with, unfortunatelly, cannot be used to follow the [The seven rules of a great Git commit message](https://chris.beams.io/posts/git-commit/). A good option would be [git-good-commit](https://github.com/tommarshall/git-good-commit) but needs to be properly configured for non-interactive usage from within editors.

## License

WTFPL
