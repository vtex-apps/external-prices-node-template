import type { InstanceOptions, IOContext, RequestConfig } from '@vtex/api'
import { JanusClient } from '@vtex/api'
import type { AxiosError } from 'axios'

import { statusToError } from '../utils/statusCodeUtils'
import type { CurrentProfile, Profile } from '../typings/profileSystem'

const FIVE_SECONDS_MS = 5 * 1000

export class ProfileSystemClient extends JanusClient {
  private baseUrl = '/api/profile-system/pvt/profiles'

  constructor(context: IOContext, options?: InstanceOptions) {
    super(context, {
      ...options,
      headers: {
        ...options?.headers,
        VtexIdClientAutCookie: context.authToken,
      },
      timeout: FIVE_SECONDS_MS,
    })
  }

  public getProfileInfo = (user: CurrentProfile, customFields?: string) =>
    this.get<Profile>(
      `${this.baseUrl}/${this.getUserIdentification(user)}/personalData`,
      {
        metric: 'profile-system-getProfileInfo',
        params: {
          extraFields: customFields,
        },
      }
    )

  protected get = <T>(url: string, config?: RequestConfig) =>
    this.http.get<T>(url, config).catch<AxiosError>(statusToError)

  private getUserIdentification = (user: CurrentProfile) =>
    user.userId ?? encodeURIComponent(user.email)
}
