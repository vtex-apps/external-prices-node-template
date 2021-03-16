import { NotFoundError } from '@vtex/api'

import type { ValidQuote } from '../typings/externalPrice'

export async function fetchPrice(
  ctx: Context<QuoteState<ValidQuote>>,
  next: Next
) {
  const { state, clients } = ctx
  const { skuId } = state.quote

  const { externalPrice } = clients

  const price = await externalPrice.getPrice(skuId as string)

  if (!price) throw new NotFoundError('Price not found')

  ctx.state.quote = {
    skuId,
    price,
  }

  await next()
}
