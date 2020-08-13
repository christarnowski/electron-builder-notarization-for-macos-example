# Example of macOS notarization setup for Electron
This repository is a companion to [my blog post about notarization of macOS builds of Electron apps](https://christarnowski.com/blog/making-notarization-work-on-macos-for-electron-apps-built-with-electron-builder).

## Building a package
To build a notarized `.app`, set the `APPLE_ID`, `APPLE_ID_PASSWORD` and `APP_BUNDLE_ID` environment variables as per
instructions described in the blog post, then run:
```shell script
yarn run build && yarn run release:package
```