# Benchmark

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

|                   Name                    | Average  | GET `/`  | GET `/id/77?name=yzN` | GET `/api/js` | POST `/api/json` |
| :---------------------------------------: | :------: | :------: | :-------------------: | :-----------: | :--------------: |
| [Bunicorn 0.0.18](/results/main/Bunicorn) | 79204.25 | 76982.94 |       81068.13        |   81378.43    |     77387.51     |
|     [Hono 3.7.2](/results/main/Hono)      | 76710.43 | 75398.62 |       79552.49        |   79567.03    |     72323.60     |
|   [Elysia 0.7.15](/results/main/Elysia)   | 75583.11 | 75114.60 |       72507.34        |   75548.82    |     79161.67     |
|  [RawBun 100.0.0](/results/main/RawBun)   | 74238.77 | 73922.38 |       74951.25        |   75539.43    |     72542.04     |
