import { NotFoundError } from '@vtex/api'

import type { Profile } from '../typings/profileSystem'

export async function fetchPrice(ctx: Context, next: Next) {
  const { clients, body } = ctx

  const { profileSystem, pricing } = clients

  const currentProfile = body.context.email
    ? ((await profileSystem.getProfileInfo(
        {
          email: body.context.email,
          userId: body.context.email,
        },
        'priceTables'
      )) as Profile)
    : null

  if (!currentProfile) {
    const error = new NotFoundError('Profile not found')

    ctx.vtex.logger.error({
      message: 'ExternalPriceApp_FetchPrice_NoProfile',
      error,
    })

    throw error
  }

  const price = await pricing.getPrice(
    body.item.skuId,
    currentProfile?.priceTables
  )

  if (!price) {
    const error = new NotFoundError('Price not found')

    ctx.vtex.logger.error({
      message: 'ExternalPriceApp_FetchPrice_Noprice',
      error,
    })

    throw error
  }

  ctx.state.quote = {
    ...price,
    skuId: body.item.skuId,
  }

  await next()
}
