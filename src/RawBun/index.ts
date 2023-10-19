const regex = /\/id\/(\d+)(?:\?name=([a-zA-Z0-9]+))?/;

Bun.serve({
  port: 3000,
  async fetch(req) {
    if (req.method === "POST") {
      return new Response(await req.text(), {
        headers: {
          "content-type": "application/json",
        },
      });
    }
    const path = req.url;
    if (path.includes("id")) {
      const match = regex.exec(path)!;
      const id = match[1];
      const name = match[2];
      return new Response(id + " " + name);
    }
    if (path.includes("api/js")) {
      return new Response(undefined, { status: 404 });
    }
    return new Response("Hi");
  },
});
