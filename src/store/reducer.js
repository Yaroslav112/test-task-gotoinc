import { CREATE_DELIVERY, DELETE_DELIVERY, EDIT_DELIVERY } from "./actions";
import { v4 as uuid } from "uuid";

const initialState = {
  deliveries: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_DELIVERY:
      return {
        ...state,
        deliveries: [...state.deliveries, { ...action.payload, id: uuid() }],
      };
    case DELETE_DELIVERY:
      return {
        ...state,
        deliveries: state.deliveries.filter((d) => d.id !== action.payload.id),
      };
    case EDIT_DELIVERY:
      return {
        ...state,
        deliveries: state.deliveries.map((d) =>
          d.id !== action.payload.id ? d : action.payload
        ),
      };
  }
  return state;
};
