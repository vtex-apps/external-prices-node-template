import type { Maybe } from '@vtex/api'

export type EmptyQuote = {
  skuId?: Maybe<string>
  price?: Maybe<number>
}

export type ValidQuote = {
  skuId: string
  price?: Maybe<number>
}

export type PricedQuote = {
  skuId: string
  price: number
}

export type ExternalPriceInput = {
  context: Record<string, unknown>
  item: {
    skuId: string
    quantity: number
    index: number
  }
}

export type ExternalPriceResponse = {
  message: string
  item: {
    index: number
    skuId: string
    price: number
    costPrice: Maybe<number>
    listPrice: Maybe<number>
    priceValidUntil: Maybe<number>
    priceTables: string
  }
}
