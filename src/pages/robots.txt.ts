import type { APIRoute } from "astro";

const rules = `
User-Agent: *
Allow: /
`;
export const GET: APIRoute = () => {
  return new Response(rules.trim(), {
    status: 200,
    statusText: "OK",
    headers: {
      "Content-Type": "text/plain",
    },
  });
};
