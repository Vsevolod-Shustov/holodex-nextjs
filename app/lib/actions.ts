'use server';

const HOLODEX_API_KEY = process.env.HOLODEX_API_KEY

const apiUrl = "https://holodex.net/api/v2/live"

export async function getLiveData(queryOrg = "Hololive") {
  console.log("actions.ts HOLODEX_API_KEY: " + HOLODEX_API_KEY);
  try {
    let fetchUrl = new URL(apiUrl)
    const org = queryOrg
    if (org !== "All") { fetchUrl.searchParams.append("org", org) }
    //console.log(fetchUrl);
    //console.log(fetchUrl);
    const response = await fetch(fetchUrl, {
      headers: {
        "X-APIKEY": HOLODEX_API_KEY
      },
      cache: 'no-store'
    });
    const live = await response.json();
    console.log("actions.ts: ");
    console.log(live[0]);
    return live;
  } catch (error) {
    console.log(error)
  }
}