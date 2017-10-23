export const CONF_LOAD = 'CONF_LOAD';

export const configAction = (config) => {
  return {
    type: CONF_LOAD,
    config: { ...config }
  }
}
