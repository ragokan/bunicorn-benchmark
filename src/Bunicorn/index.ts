import { BuniApp, RB, getBody, getSearchParams } from "@bunicorn/server";

const rb = new RB();

const app = new BuniApp().addRoutes([
  rb.get("/", (ctx) => ctx.raw("Hi")),
  rb.get("/id/:id", (ctx) => ctx.raw(ctx.params.id + " " + getSearchParams(ctx).name)),
  rb.post("/api/json", async (ctx) => ctx.json(await getBody(ctx))),
]);

app.serve({ port: 3000 });
