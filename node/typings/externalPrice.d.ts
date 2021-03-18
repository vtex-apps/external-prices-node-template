import type { Maybe } from '@vtex/api'

export type Quote = {
  skuId: string
  price: number
}

export type InputItem = {
  skuId: string
  quantity: number
  index: number
}

export type ExternalPriceInput = {
  context: Record<string, unknown>
  item: InputItem
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
