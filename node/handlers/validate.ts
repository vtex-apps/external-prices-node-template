import { json } from 'co-body'
import { UserInputError } from '@vtex/api'

export async function validate(ctx: Context, next: Next) {
  ctx.body = await json(ctx.req)

  const { item } = ctx.body

  if (!item?.skuId) {
    const error = new UserInputError('Item.SkuId is required')

    ctx.vtex.logger.error({
      message: 'ExternalPriceApp_Validate',
      error,
    })

    throw error
  }

  await next()
}
