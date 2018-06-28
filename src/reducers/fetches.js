import { fetchAirtable } from "../api";

function fetches(state = [], action) {
  switch (action.type) {
    case "FETCH_DATA":
      // TODO: get data from airtable
      fetchAirtable().then(function(data) {
        return data;
      });
      return state;
    default:
      return state;
  }
}

export default fetches;
