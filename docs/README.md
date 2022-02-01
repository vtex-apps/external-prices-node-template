# External Price App

A reference IO app to integrate external price sources with VTEX Pricing Hub.

## Implementation

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
    
4. Change the ` node/clients/externalPrice.ts` file to parse data received by the external pricing app and return it in a way that Pricing Hub can understand. See more details on the specification of this format in the [Specifications](#specifications) section.


> ⛔ Do not change the `"routes"` in `node/service.json` nor the files in `node/typings/`, since they were created to reflect Pricing Hub behavior.

