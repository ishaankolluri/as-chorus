// Tell the reducer to hit the API.
export function fetchData() {
  console.log("fetched");
  return {
    type: "FETCH_DATA"
  };
}
