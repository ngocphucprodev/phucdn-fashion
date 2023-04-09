export const request = (payload) => ({
  type: "REQUEST",
  payload,
});

export const requestSuccess = (payload) => ({
  type: "REQUEST_SUCCESS",
  payload,
});
