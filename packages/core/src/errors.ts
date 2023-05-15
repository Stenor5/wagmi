export class ChainNotFoundError {
  name = 'ChainNotFoundError'
  message = 'No chains provided to config.'
}

export class ChainNotConfiguredError {
  name = 'ChainNotConfiguredError'
  message = 'Chain not configured'
}

export class ProviderNotFoundError {
  name = 'ProviderNotFoundError'
  message = 'Provider not found'
}

export class ConnectorAlreadyConnectedError {
  name = 'ConnectorAlreadyConnectedError'
  message = 'Connector already connected'
}
