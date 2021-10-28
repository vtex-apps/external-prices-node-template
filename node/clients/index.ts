import { IOClients } from '@vtex/api'

import ExternalPrice from './externalPriceMock'
import PricingClient from './pricingClient'
import { ProfileSystemClient } from './profileSystemClient'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get externalPrice() {
    return this.getOrSet('externalPrice', ExternalPrice)
  }

  public get pricing() {
    return this.getOrSet('pricing', PricingClient)
  }

  public get profileSystem() {
    return this.getOrSet('profileSystem', ProfileSystemClient)
  }
}
