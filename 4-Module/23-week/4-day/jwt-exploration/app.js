// configure environment - DO NOT MODIFY
require('dotenv').config();

// Import package

// Your code here 
const jwt = require('jsonwebtoken')

// Define variables - DO NOT MODIFY

// 1. Sign (create) a JWT containing your email address
let token; // DO NOT MODIFY! Re-assign the token variable below.

// Your code here 
token = jwt.sign(
    {email: 'james@someEmail.com'},
    process.env.SECRET_KEY,
    {expiresIn: '20s'}
)

// See the JWT in the console - DO NOT MODIFY
console.log('JWT:', token);

// 2. Decode a JWT Payload

let payload; // DO NOT MODIFY! Re-assign the payload variable below.

// Your code here 
payload = jwt.decode(token)

// See the decoded payload in the console - DO NOT MODIFY
console.log('Payload:', payload);

// 3. Verify a JWT

let verifiedPayload; // DO NOT MODIFY! Re-assign the verifiedPayload variable below.

// Your code here 
verifiedPayload = jwt.verify(token, "dc1783e61ab05a9fa1b64d892f4b8edab51c159c7091d57feb955ad5ae8ce9191dbe3a50f95086a018654e6f3c7dbffd6215d656d63a2da811843fc746a664b2")

// See the verified payload in the console - DO NOT MODIFY
console.log('Verified Payload:', verifiedPayload);

// (Optional) Bonus: Catch Error With Invalid Signature
// Generate an alternate secret key and use it
//    To "try" to get the payload using jwt.verify
//    Then "catch" the error and log it to the console.

// Your code here 

// (Optional) Bonus: Catch Error With Expired Token
// First, set the token's expiration (above) to 1 second
// Second, add a setTimeout longer than 1 second
//    To "try" to get the payload using jwt.verify (with proper secret)
//    Then "catch" the error and log it to the console

// Your code here 
