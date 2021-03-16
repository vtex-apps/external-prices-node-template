import type {
  ExternalPriceResponse,
  PricedQuote,
} from '../typings/externalPrice'

export async function formatResponse(ctx: Context<QuoteState<PricedQuote>>) {
  const { state, body } = ctx

  const response: ExternalPriceResponse = {
    message: 'Price quoted successfully.',
    item: {
      costPrice: null,
      listPrice: null,
      priceTables: '',
      priceValidUntil: null,
      index: body.item.index,
      ...state.quote,
    },
  }

  ctx.body = response
  ctx.status = 200
}
