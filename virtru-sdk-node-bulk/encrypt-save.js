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
 * Calls the 'encrypt' function on each file, and prints
 * status update when complete.
 */
function virtruStart() {
  console.log('Encrypted: ');
  promises = fs.readdirSync('./encrypt-in/').filter(function(x) {
    return x !== '.DS_Store';
  }).map(fileName => encrypt(fileName));

  Promise.all(promises).then(() =>
    console.log(`All files in ./encrypt-in have been encrypted and written to ./encrypt-out`));
}


/*
 * Encryption function.
 *
 * @param {string} fileName Name of the file to encrypt.
 */
async function encrypt(fileName){
  const encryptParams = new Virtru.EncryptParamsBuilder()
    .withFileSource(`./encrypt-in/${fileName}`)
    .withDisplayfileName(fileName)
    .build();
  ct = await client.encrypt(encryptParams);
  await ct.toFile(`./encrypt-out/${fileName}.tdf3.html`);
  console.log(`- ${fileName}.tdf3.html`)
}

// Run the main function.
virtruStart();
