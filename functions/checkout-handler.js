const stripe = require(`stripe`)(`sk_test_N5gHqJ1BCHIxPiSGfRbvmGtH`)

module.exports.handler = (event, context, callback) => {
    const requestData = JSON.parse(event.body)
    const amount = requestData.amount
    const token = requestData.token.id
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type"
    }
    return stripe.charges
    .create({
      amount: amount,
      token: token,
      currency: `cad`,
      description: `Serverless test Stripe charge`,
      statement_descriptor: `Custom descriptor for customer bank statement`
    })
    .then(charge => {
      const response = {
        headers,
        statusCode: 200,
        body: JSON.stringify({
          message: `Charge processed!`,
          charge
        })
      }
      callback(null, response)
    })
}

// module.exports.handler = (event, context, callback) => {

//   return stripe.charges
//     .create()
//     .then(charge => {
//       // Success response
//       console.log(charge);
//       const response = {
//         headers,
//         statusCode: 200,
//         body: JSON.stringify({
//           message: `Charge processed!`,
//           charge
//         })
//       };
//       callback(null, response);
//     })
//     .catch(err => {
//       // Error response
//       console.log(err);
//       const response = {
//         headers,
//         statusCode: 500,
//         body: JSON.stringify({
//           error: err.message
//         })
//       };
//       callback(null, response);
//     });
// };
