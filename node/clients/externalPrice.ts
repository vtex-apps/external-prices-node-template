import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'
import { path } from 'ramda'

import ENV from '../env'

export interface ExternalPriceClient {
  getPrice: (skuId: string) => Promise<number | undefined>
}

export default class ExternalPrice
  extends ExternalClient
  implements ExternalPriceClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super(ENV.SERVICE_URI, context, options)
  }

  public async getPrice(skuId: string): Promise<number | undefined> {
    const result = await this.http.get(skuId, {
      metric: 'validate-get',
    })

    return path(ENV.PRICE_PATH.split('.'), result)
  }
}
