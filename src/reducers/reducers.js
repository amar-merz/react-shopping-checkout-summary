import pricingData from "../data/pricingData";
const { price, taxes, pickupSaving } = pricingData.data;
const est_taxes = ((price + pickupSaving) * taxes) / 100;
const total = price + pickupSaving + est_taxes;
const initialState = {
  total: total
};

export default function rootReducer(state = initialState, action) {
  //const totalEst = state.total;
  const { total } = state;
  switch (action.type) {
    case "PROMO_CODE_ONSUBMIT":
      if (action.payload === "REDUX50") {
        return {
          ...state,
          //apply 10% discount
          total: total - total * 0.1
        };
      }

      break;

    default:
      return state;
      break;
  }
}
