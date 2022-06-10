const BASE_URL = "https://learn-nextjs-chi-eosin.vercel.app";
const ENDPOINT = BASE_URL + "/api/excursions"

const http = (id, options) =>
  fetch(ENDPOINT + id, options).then((response) => response.json());

const GET = () => http("", { method: "GET" });

const GET_ONE = (id) => http(id, { method: "GET" });

const POST = (data) =>
  http("", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

const DELETE = (id) =>
  http(id, { method: "DELETE" });

const PUT = (id, data) =>
  http(id, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

export { GET, GET_ONE, POST, PUT, DELETE };