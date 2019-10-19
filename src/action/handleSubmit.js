import { CODE_PROMO_ONSUBMIT } from "./types/type";
export default function handleSubmit(e) {
  return {
    type: CODE_PROMO_ONSUBMIT,
    payload: e.target.value
  };
}
