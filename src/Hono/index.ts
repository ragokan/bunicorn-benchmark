import { Hono } from "hono";

export default new Hono()
  .get("/", (c) => c.text("Hi"))
  .get("/id/:id", (c) => c.text(c.req.param("id") + " " + c.req.query("name")))
  .post("/api/json", async (c) => {
    const json = await c.req.json();
    return c.json(json);
  });
