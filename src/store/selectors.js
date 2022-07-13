export const selectDeliveries = state => state.deliveries
export const selectDeliveryById = (state, id) => state.deliveries.find(d => d.id === id)