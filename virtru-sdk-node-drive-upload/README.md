# Virtru SDK Upload to Google Drive
Node.js command line script to encrypt & upload files to and decrypt & download files from Google Drive.

## Prerequisites
- [Node.js & npm](https://docs.npmjs.com/getting-started/installing-node#1-install-nodejs--npm) installed.
- Virtru JS SDK:
  - `npm install virtru-sdk`
- Drive-enabled G Suite Account.
- Destination / source folder ID. 
- [Drive API Enabled](https://developers.google.com/drive/api/v3/enable-drive-api) & credentials generated (see [Drive Node.js Quickstart](https://developers.google.com/drive/api/v3/quickstart/nodejs)).
- Drive client library:
  - `npm install googleapis@39 --save`

## User Inputs
- **./.virtru/virtruCreds.json**
  - Replace values for "appId" and "emailAddress" with your credentials..
- **./.google/credentials.json**
  - Generated when [Drive API Enabled](https://developers.google.com/drive/api/v3/enable-drive-api).  Store in ./.google/.
- **./.google/folderId.json**
  - Input the folderId to / from which you'll be uploading / downloading secure content.  

## Encrypt
- Place files to encrypt & upload in ./encrypt-in.
- ```node encrypt-upload.js```


## Decrypt
- ```node decrypt-download.js```
- Files downloaded & decrypted to ./decrypt-out.
