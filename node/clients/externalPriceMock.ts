import { IOClient } from '@vtex/api'

import type { ExternalPriceClient, } from './externalPrice'
import type { InputItem } from '../typings/externalPrice'

export default class ExternalPrice extends IOClient implements ExternalPriceClient {
  public async getPrice(item: InputItem): Promise<number | undefined> {
    return Number(item.skuId) * 10
  }
}
