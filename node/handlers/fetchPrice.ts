import { NotFoundError } from '@vtex/api'

export async function fetchPrice(
  ctx: Context,
  next: Next
) {
  const { clients, body } = ctx

  const { externalPrice } = clients

  const price = await externalPrice.getPrice(body.item)

  if (!price) throw new NotFoundError('Price not found')

  ctx.state.quote = {
    skuId: body.item.skuId,
    price,
  }

  await next()
}
