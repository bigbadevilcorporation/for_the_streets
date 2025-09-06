// Minimal Worker that serves static assets and supports SPA fallback
export default {
  async fetch(request, env, ctx) {
    // Try to serve the requested asset first
    const res = await env.ASSETS.fetch(request);

    // For SPA routes, fall back to index.html on 404 HTML requests
    const accept = request.headers.get("Accept") || "";
    if (res.status === 404 && accept.includes("text/html")) {
      const url = new URL(request.url);
      const fallback = new Request(new URL("/index.html", url.origin), request);
      return env.ASSETS.fetch(fallback);
    }

    return res;
  }
};