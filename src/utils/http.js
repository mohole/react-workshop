/**
 * Base values
 */
const BASE_URL = "https://learn-nextjs-six-cyan.vercel.app";
const ENDPOINT = BASE_URL + "/api/excursions";

/**
 * Fetch wrapper
 * @param {string} id
 * @param {object} options
 * @returns fetch response formatted as JSON data
 */
const http = (id, options) =>
  fetch(ENDPOINT + id, options).then((response) => response.json());

/**
 * GET all the data
 */
const GET = () => http("", { method: "GET" });

/**
 * GET a single activity, ID is mandatory
 */
const GET_ONE = (id) => http(id, { method: "GET" });

/**
 * POST (add) a new activity, body data is mandatory
 */
const POST = (data) =>
  http("", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

/**
 * DELETE a single activity, ID is mandatory
 */
const DELETE = (id) => http(id, { method: "DELETE" });

/**
 * Update (PUT) a single activity, ID and body data are mandatory
 */
const PUT = (id, data) =>
  http(id, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

export { GET, GET_ONE, POST, PUT, DELETE };
