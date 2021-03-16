import type { RecorderState, ServiceContext } from '@vtex/api'
import type { Clients } from '../clients'
import type { EmptyQuote, ExternalPriceInput } from './externalPrice'

declare global {
  type Context<TState extends State = State> = ServiceContext<Clients, TState>

  interface State extends RecorderState {
    quote: EmptyQuote
    body: ExternalPriceInput
  }

  interface QuoteState<TQuote> extends State {
    quote: TQuote
  }

  type Next = () => Promise<void>
}
