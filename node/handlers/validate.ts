import { json } from 'co-body'
import { UserInputError } from '@vtex/api'

export async function validate(ctx: Context, next: Next) {
  ctx.body = await json(ctx.req)

  const { item } = ctx.body

  if (!item?.skuId) throw new UserInputError('Item.SkuId is required')

  ctx.state.quote = item

  await next()
}
