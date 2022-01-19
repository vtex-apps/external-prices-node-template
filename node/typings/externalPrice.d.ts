import type { Maybe } from '@vtex/api'

export type Quote = {
  skuId: string
  listPrice: number
  costPrice: number
  sellingPrice: number
  priceValidUntil: string
  tradePolicyId?: string
}

export type InputItem = {
  skuId: string
  quantity: number
  index: number
}

export type ExternalPriceInput = {
  context: {
    email: string
  }
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
    priceValidUntil: string
    priceTables: string
    sellingPrice: Maybe<number>
    tradePolicyId: Maybe<string>
  }
}
