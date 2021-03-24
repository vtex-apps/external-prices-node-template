import { json } from 'co-body'
import { UserInputError } from '@vtex/api'

export async function validate(ctx: Context, next: Next) {
  ctx.body = await json(ctx.req)

  const { Item } = ctx.body

  if (!Item?.skuId) throw new UserInputError('Item.SkuId is required')

  await next()
}
