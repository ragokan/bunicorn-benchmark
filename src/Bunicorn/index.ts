import { BunicornApp, RB } from "@bunicorn/server";

const rb = new RB();

const app = new BunicornApp().addRoutes([
  rb.get("/", (ctx) => ctx.raw("Hi")),
  rb.get("/id/:id", (ctx) => ctx.raw(ctx.params.id + " " + ctx.getSearchParams().name)),
  rb.post("/api/json", async (ctx) => ctx.json(await ctx.getBody())),
]);

app.serve({ port: 3000 });
