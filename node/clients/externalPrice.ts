import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

import type { InputItem } from '../typings/externalPrice'
import ENV from '../env'

export interface ExternalPriceClient {
  getPrice: (item: InputItem) => Promise<number | undefined>
}

export default class ExternalPrice
  extends ExternalClient
  implements ExternalPriceClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super(ENV.SERVICE_ENDPOINT, context, options)
  }

  public async getPrice(item: InputItem): Promise<number | undefined> {
    const result = await this.http.get(item.skuId, {
      metric: 'get-price',
    })

    // parse payload and return price as number

    return result
  }
}
