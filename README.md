# Facebook desktop client

## What

Standalone app with facebook website access.

## Why

Because I want to run it in separate process with its own cookies, local storage etc.
Because I don't want it to search through dozenz of tabs.

## How

It is possible thanks to atom electron project. This app is based on [really super kit](https://github.com/Aluxian/electron-superkit).

## Is it safe?

Short answer: Yes, it is.

Long answer: Basically it is just a webview with single src. There is no cookies reading/sniffing from app itself.
Everything is does is just wrapping the facebook website.


## For development

###Installation

````sh
git clone git@github.com:akovalyov/facebook-desktop.git
cd facebook-desktop
npm install
#optional, for deb signing
bundle install --path vendor/bundle
````

### Launching

```sh
gulp build:linux64
```
