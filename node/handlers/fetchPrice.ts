import { NotFoundError } from '@vtex/api'

import type { Profile } from '../typings/profileSystem'

export async function fetchPrice(ctx: Context, next: Next) {
  const { clients, body } = ctx

  const { profileSystem, pricing } = clients

  let currentProfile: Profile | null = null

  if (body.context.email) {
    try {
      currentProfile = (await profileSystem.getProfileInfo(
        {
          email: body.context.email,
          userId: body.context.email,
        },
        'priceTables'
      )) as Profile
    } catch (e) {
      ctx.vtex.logger.warn({
        message: 'ExternalPriceApp_FetchPrice_NoProfile',
        e,
      })

      throw e
    }
  }

  const price = await pricing.getPrice(
    body.item.skuId,
    currentProfile?.priceTables ?? '1'
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
