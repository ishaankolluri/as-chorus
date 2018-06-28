import { fetchAirtable } from "../api";

function fetches(state = [], action) {
  switch (action.type) {
    case "FETCH_DATA":
      // TODO: get data from airtable
      return [fetchAirtable()];
    default:
      return state;
  }
}

export default fetches;
