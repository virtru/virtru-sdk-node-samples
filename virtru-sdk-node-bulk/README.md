# Virtru SDK Node Bulk Encrypt / Decrypt
Node.js command line script to encrypt & decrypt files locally.

## Prerequisites
- [Node.js & npm](https://docs.npmjs.com/getting-started/installing-node#1-install-nodejs--npm) installed.
- Virtru JS SDK:
  - `npm install virtru-sdk`

## User Inputs
- **./.virtru/emailAddress**
  - Add the data owner's email address to file.
- **./.virtru/appId**
  - [Generate a Virtru AppID](https://developer.virtru.com/docs/how-to-add-authentication#section-1-appid-token-downloaded) for the above email address and add to file.

## Encrypt
- Place files to encrypt in ./encrypt-in.
- ```node encrypt-save.js```
- Encrypted files placed in ./encrypt-out as tdf3.html files.


## Decrypt
- Place tdf3.html files to decrypt in ./decrypt-in.
- ```node decrypt-save.js```
- Decrypted files placed in ./decrypt-out.
