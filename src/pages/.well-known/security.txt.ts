import type { APIRoute } from "astro";

const expirationDate = new Date(2025, 11, 31);
const info = `
Contact: mailto:${
  // @ts-ignore
  import.meta.env.PUBLIC_SECURITY_EMAIL
}
Expires: ${expirationDate.toISOString()}
Preferred-Languages: en
`;

export const GET: APIRoute = () => {
  return new Response(info.trim(), {
    status: 200,
    statusText: "OK",
    headers: {
      "Content-Type": "text-plain",
    },
  });
};
