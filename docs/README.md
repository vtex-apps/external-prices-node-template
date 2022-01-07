# Seller Price App

A reference App IO to allow sellers to define prices based on the user email, by using the external price source in Pricing Hub service.

## Settings
This app is ready to use. Install it on the `master` workspace of the seller account.

It can be customized to use other price parameters, by following:

- Fork this app
- Change app vendor and app name in `manifest.json` before publishing
- Add your service host (eg. myhost.com) in `manifest.json` outbound policy
- Add your service endpoint (eg. http://myservice.com ) in `node/env.ts`
- Change `node/clients/externalPrice.ts` to parse data received by the external app and return in a way that Pricing Hub can understand

##Do not
- Change service route in `node/service.json`
- Change the types, all types were created to reflect Pricing Hub behaviour
