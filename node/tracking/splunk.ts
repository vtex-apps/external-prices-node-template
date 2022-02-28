import type { types } from 'vtex.splunk-monitoring'
import {
  main,
  withMetric as metricHoc,
  withQueryWrapper as queryHoc,
} from 'vtex.splunk-monitoring'

// https://splunk72.vtex.com/en-US/app/vtex_buyer-organizations/search
const monitoring = new main.SplunkMonitoring({
  token: '2f025d6b-72df-4cf3-9abb-d056305a908',
  endpoint: 'https://splunk72-heavyforwarder-public.vtex.com:8088',
})

export function getRuntimeInfo(): types.RuntimeInfo {
  const runtime = window?.__RUNTIME__ ?? {}

  const { workspace, renderMajor, production, account } = runtime

  const [appName] = ((process.env.VTEX_APP_ID as string) ?? '').split('@')

  return {
    appName,
    appVersion: process.env.VTEX_APP_VERSION as string,
    service: 'PricingHub',
    owner: 'B2B',
    renderMajor,
    workspace,
    production,
    account,
  }
}

export const withMetric = (args: types.WithMetricArgs) =>
  metricHoc(monitoring, args)

export const withQueryWrapper = <TProps, TData, TGraphQLVariables, TChildProps>(
  args: types.WithQueryWrapperArgs<
    TProps,
    TData,
    TGraphQLVariables,
    TChildProps
  >
) => queryHoc(monitoring, args)

export const { logMetric, logGraphQLError, logError } = monitoring
