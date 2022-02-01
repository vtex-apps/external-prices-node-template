# B2B Seller Price

A reference IO app to allow B2B sellers to define prices based on the user email, by using the external price source through the Pricing Hub service.

## Implementation

This app is ready to use. You can install it on the `master` workspace of the seller account.

If you want to customize the app to use other price parameters, follow the instructions below.

1. Fork this app.

2. In the `manifest.json` file:
    * Change the `vendor` field to the name of the account you are using.
    * Change the `name` field to one of your choosing.
    * Add your service host (e.g. `myhost.com`) in an `outbound-access` policy.

3. In the `node/env.ts` file, add your service endpoint as follows:

    ```
    const ENV = {
      SERVICE_ENDPOINT: 'http://myservice.com',
    }
    
    export default ENV
    ```

4. Change the ` node/clients/externalPrice.ts` file to parse data received by the external pricing app and return it in a way that Pricing Hub can understand. See more details on the specification of this format in the [Pricing Hub documentation](https://developers.vtex.com/vtex-rest-api/docs/pricing-hub).


> ⛔ Do not change the `"routes"` in `node/service.json` nor the files in `node/typings/`, since they were created to reflect Pricing Hub behavior.
