import { IOClients } from '@vtex/api'

import ExternalPrice from './externalPriceMock'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get externalPrice() {
    return this.getOrSet('externalPrice', ExternalPrice)
  }
}
