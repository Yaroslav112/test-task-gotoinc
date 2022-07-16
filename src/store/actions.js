export const CREATE_DELIVERY = "CREATE_DELIVERY";
export const DELETE_DELIVERY = "DELETE_DELIVERY";
export const EDIT_DELIVERY = "EDIT_DELIVERY";

export const createDelivery = (payload) => ({
  type: CREATE_DELIVERY,
  payload,
});

export const deleteDelivery = (payload) => ({
  type: DELETE_DELIVERY,
  payload,
});

export const editDelivery = (payload) => ({
  type: EDIT_DELIVERY,
  payload,
});
