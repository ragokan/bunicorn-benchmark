# Benchmark

## This is not my repo, I cloned and changed it, you can see original here: -> https://github.com/bunsvr/benchmark

Benchmarking Bun, Node and Deno [frameworks](/src) performance, in requests per second.

You can see the details results [here](/results/index.md).

I recommend testing this by yourself as performance may varies on different machine.

## Requirements

All tool required to set up and run the benchmark.

### Bun

Bun is required to run Bun frameworks and benchmark scripts. See [bun.sh](https://bun.sh).

### Bombardier

Go is required to install the `bombardier` CLI. See [go.dev](https://go.dev).
Install `bombardier` using:

```bash
# Install the CLI without a `go.mod` file
go install -mod=mod github.com/codesenberg/bombardier

# Check after install
bombardier --version
```

You need to manually set `GO_PATH` to your extracted `go` directory, `GO_BIN` to `$GO_PATH/bin` and add `GO_BIN` to `PATH` if `bombardier --version` fails.

## Start

Clone this reposity. Go to the root directory and run:

```bash
# Install required dependencies
bun ins

# Run the benchmark
bun bench

# Or do both
bun start
```

## Configurations

See [configuration file](/config.ts) and the [type declarations](/lib/types.ts).

## Results

### Chart

![Chart](/results/chart.png)

### Table

|                   Name                    | Average  | GET `/`  | GET `/id/92?name=QHc` | GET `/api/js` | POST `/api/json` |
| :---------------------------------------: | :------: | :------: | :-------------------: | :-----------: | :--------------: |
| [Bunicorn 0.0.10](/results/main/Bunicorn) | 85977.58 | 85468.24 |       87349.40        |   86833.95    |     84258.73     |
|  [RawBun 100.0.0](/results/main/RawBun)   | 83996.48 | 86949.35 |       83664.37        |   86077.60    |     79294.59     |
|     [Hono 3.7.2](/results/main/Hono)      | 83603.11 | 85848.63 |       83114.43        |   84393.96    |     81055.42     |
|   [Elysia 0.7.15](/results/main/Elysia)   | 82055.08 | 84941.05 |       81298.26        |   81093.59    |     80887.43     |
