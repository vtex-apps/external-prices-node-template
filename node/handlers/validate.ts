import { json } from 'co-body'
import { UserInputError } from '@vtex/api'

import { getRuntimeInfo, logError } from '../tracking/splunk'

export async function validate(ctx: Context, next: Next) {
  ctx.body = await json(ctx.req)

  const { item } = ctx.body

  if (!item?.skuId) {
    const runtimeInfo = getRuntimeInfo()
    const error = new UserInputError('Item.SkuId is required')

    logError({ runtimeInfo, error, instance: 'ExternalPriceApp_Validate' })
    throw error
  }

  await next()
}
