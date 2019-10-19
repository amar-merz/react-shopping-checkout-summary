import { CODE_PROMO_ONCHANGE } from "./types/type";
export default function handleChange(e) {
  return {
    type: CODE_PROMO_ONCHANGE,
    payload: e.target.value
  };
}
