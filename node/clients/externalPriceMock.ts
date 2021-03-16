import { IOClient } from '@vtex/api'

import type { ExternalPriceClient } from './externalPrice'

export default class ExternalPrice extends IOClient implements ExternalPriceClient {
  public async getPrice(skuId: string): Promise<number | undefined> {
    return Number(skuId) * 10
  }
}
