Bun: 1.0.7

Tested at: 15:13, October 24th, 2023

## OS Details
- Cores: 12
- Model: Apple M2 Pro
- OS: Mac
- System memory: 16GB
- Architecture: arm64
## Tests
### GET `/`
Should return `Hi` as a response.
### GET `/id/84?name=SMg`
Should return the `id` parameter value and the query value, for example `1 a` when the request path is `/id/1?name=a`.
### GET `/api/js`
Should return a response with `404` status code.
### POST `/api/json`
Return the request body with `Content-Type` set to `application/json`.
### Info
- Connections: 500
- Duration: 20s
- Using `fasthttp`: `true`
- Results are measured in requests per second.

## Results
| Name | Average | GET `/` | GET `/id/77?name=yzN` | GET `/api/js` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Bunicorn 0.0.18](/results/main/Bunicorn) | 79204.25 | 76982.94 | 81068.13 | 81378.43 | 77387.51 |
| [Hono 3.7.2](/results/main/Hono) | 76710.43 | 75398.62 | 79552.49 | 79567.03 | 72323.60 |
| [Elysia 0.7.15](/results/main/Elysia) | 75583.11 | 75114.60 | 72507.34 | 75548.82 | 79161.67 |
| [RawBun 100.0.0](/results/main/RawBun) | 74238.77 | 73922.38 | 74951.25 | 75539.43 | 72542.04 |