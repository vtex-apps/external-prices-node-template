import type { ExternalPriceResponse, Quote } from '../typings/externalPrice'

export async function formatResponse(ctx: Context) {
  const { state, body } = ctx

  const quote = state.quote as Quote

  const response: ExternalPriceResponse = {
    message: 'Price quoted successfully.',
    item: {
      costPrice: null,
      listPrice: null,
      priceTables: '',
      priceValidUntil: null,
      index: body.item.index,
      ...quote,
    },
  }

  ctx.body = response
  ctx.status = 200
}
