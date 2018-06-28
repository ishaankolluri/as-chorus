const env = require("./env.json");

const request = new Request(
  "https://api.airtable.com/v0/appnoXBJsT05s6Jux/Feedback%20Items ",
  {
    method: "get",
    headers: new Headers({
      Authorization: `Bearer ${env.AIRTABLE_API_KEY}`
    })
  }
);

export async function fetchAirtable() {
  var resp = await fetch(request).catch(err => {
    console.log(err);
  });
  if (resp.status >= 200 && resp.status < 300) {
    var json = await resp.json();
    const { records } = json;
    return records;
  }
}
