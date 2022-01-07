import type { ExternalPriceResponse, Quote } from '../typings/externalPrice'

export async function formatResponse(ctx: Context) {
  const { state, body } = ctx

  const quote = state.quote as Quote

  const convertedQuote: Quote = {
    skuId: quote.skuId,
    listPrice: quote.listPrice*100,
    costPrice: quote.costPrice*100,
    sellingPrice: quote.sellingPrice*100,
    priceValidUntil: quote.priceValidUntil,
    tradePolicyId: quote.tradePolicyId
  }

  const response: ExternalPriceResponse = {
    message: 'Price quoted successfully.',
    item: {
      price: convertedQuote.sellingPrice,
      priceTables: convertedQuote.tradePolicyId ?? '',
      index: body.item.index,
      ...convertedQuote,
    },
  }

  ctx.body = response
  ctx.status = 200
}
