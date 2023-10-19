Bun: 1.0.6

Tested at: 17:53, October 18th, 2023

## OS Details
- Cores: 12
- Model: Apple M2 Pro
- OS: Mac
- System memory: 16GB
- Architecture: arm64
## Tests
### GET `/`
Should return `Hi` as a response.
### GET `/id/53?name=p6A`
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
| Name | Average | GET `/` | GET `/id/92?name=QHc` | GET `/api/js` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Bunicorn 0.0.10](/results/main/Bunicorn) | 85977.58 | 85468.24 | 87349.40 | 86833.95 | 84258.73 |
| [RawBun 100.0.0](/results/main/RawBun) | 83996.48 | 86949.35 | 83664.37 | 86077.60 | 79294.59 |
| [Hono 3.7.2](/results/main/Hono) | 83603.11 | 85848.63 | 83114.43 | 84393.96 | 81055.42 |
| [Elysia 0.7.15](/results/main/Elysia) | 82055.08 | 84941.05 | 81298.26 | 81093.59 | 80887.43 |