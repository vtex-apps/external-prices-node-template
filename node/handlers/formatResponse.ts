import type { ExternalPriceResponse, Quote } from '../typings/externalPrice'

export async function formatResponse(ctx: Context) {
  const { state, body } = ctx
  const quote = state.quote as Quote

  // Checkout service expect prices coming from Pricing Service to be multiplied by 100
  const response: ExternalPriceResponse = {
    message: 'Price quoted successfully.',
    item: {
      price: quote.sellingPrice * 100,
      priceTables: quote.tradePolicyId ?? '',
      index: body.item.index,
      skuId: quote.skuId,
      listPrice: quote.listPrice * 100,
      costPrice: quote.costPrice * 100,
      sellingPrice: quote.sellingPrice * 100,
      priceValidUntil: quote.priceValidUntil,
      tradePolicyId: quote.tradePolicyId,
    },
  }

  ctx.body = response
  ctx.status = 200
}
