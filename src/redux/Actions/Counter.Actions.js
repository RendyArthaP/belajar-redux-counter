export const INCEREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const increase = () => {
  return {
    type: INCEREMENT
  }
}

export const decrease = () => {
  return {
    type: DECREMENT
  }
}