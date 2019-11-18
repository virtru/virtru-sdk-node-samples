const Virtru = require('virtru-sdk');
const fs = require('fs');

/*
 * Reads Virtru credentials from file.
 *
 * @return {array} [appId, email] Values of appId & email.
 */
function getCreds() {
  const appId = fs.readFileSync('.virtru/appId').toString().replace('\n', '');
  const email = fs.readFileSync('.virtru/emailAddress').toString().replace('\n', '');
  return [appId, email];
}

// Assign credentials to respective variables.
var creds = getCreds();
const appId = creds[0];
const email = creds[1];

// Generate the Virtru Client
const client = new Virtru.Client({email, appId});

/*
 * Main function to iterate through files in directory.
 *
 * Calls the 'decrypt' function on each file, and prints
 * status update when complete.
 */
function virtruStart() {
  console.log('Decrypted: ');
  promises = fs.readdirSync('./decrypt-in/').filter(function(x) {
    return x !== '.DS_Store';
  }).map(fileName => decrypt(fileName));

  Promise.all(promises).then(() =>
    console.log(`All files in ./decrypt-in have been decrypted and written to ./decrypt-out`));
}

/*
 * Encryption function.
 *
 * @param {string} fileName Name of the file to decrypt.
 */
async function decrypt(fileName){
  const decryptParams = new Virtru.DecryptParamsBuilder()
    .withFileSource(`./decrypt-in/${fileName}`)
    .build();
  const stream = await client.decrypt(decryptParams);
  await stream.toFile(`./decrypt-out/${fileName.replace('.tdf3.html', '')}`);
  console.log(`- ${fileName.replace('.tdf3.html', '')}`)
}

// Run the main function.
virtruStart();
