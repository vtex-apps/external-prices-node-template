import type { ClientsConfig } from '@vtex/api'
import { LRUCache, method, Service } from '@vtex/api'

import { Clients } from './clients'
import { validate } from './handlers/validate'
import { fetchPrice } from './handlers/fetchPrice'
import { formatResponse } from './handlers/formatResponse'

const TIMEOUT_MS = 800
const memoryCache = new LRUCache<string, never>({ max: 5000 })

const clients: ClientsConfig<Clients> = {
  implementation: Clients,
  options: {
    default: {
      retries: 2,
      timeout: TIMEOUT_MS,
    },
    status: {
      memoryCache,
    },
  },
}

async function keepAlive(ctx: Context) {
  ctx.set('Cache-Control', 'no-cache')
  ctx.status = 200
}

export default new Service({
  clients,
  routes: {
    price: method({
      POST: [validate, fetchPrice, formatResponse],
    }),
    'keep-alive': method({
      GET: keepAlive,
    }),
  },
})
