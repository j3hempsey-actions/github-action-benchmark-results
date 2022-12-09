window.BENCHMARK_DATA = {
  "lastUpdate": 1670627744171,
  "repoUrl": "https://github.com/j3hempsey-actions/github-action-benchmark",
  "entries": {
    "Go Benchmark": [
      {
        "commit": {
          "author": {
            "email": "jhempsey33@gmail.com",
            "name": "Justin Hempsey",
            "username": "j3hempsey"
          },
          "committer": {
            "email": "jhempsey33@gmail.com",
            "name": "Justin Hempsey",
            "username": "j3hempsey"
          },
          "distinct": true,
          "id": "6f27854738397c7fdf321b2bafd457150da06f4b",
          "message": "Fix external repo url",
          "timestamp": "2022-12-09T14:56:13-08:00",
          "tree_id": "058d75ef2769d04122fcd53cec72c69ce8a2ffca",
          "url": "https://github.com/j3hempsey-actions/github-action-benchmark/commit/6f27854738397c7fdf321b2bafd457150da06f4b"
        },
        "date": 1670627518138,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkFib10",
            "value": 407,
            "unit": "ns/op",
            "extra": "3000000 times\n2 procs"
          },
          {
            "name": "BenchmarkFib20",
            "value": 50097,
            "unit": "ns/op",
            "extra": "30000 times\n2 procs"
          }
        ]
      }
    ],
    "Rust Benchmark": [
      {
        "commit": {
          "author": {
            "email": "jhempsey33@gmail.com",
            "name": "Justin Hempsey",
            "username": "j3hempsey"
          },
          "committer": {
            "email": "jhempsey33@gmail.com",
            "name": "Justin Hempsey",
            "username": "j3hempsey"
          },
          "distinct": true,
          "id": "199abc83cdf9b37f6180294f507ead121520acf8",
          "message": "Add job summary example",
          "timestamp": "2022-12-09T15:13:44-08:00",
          "tree_id": "bb864c08699a7429567ecf47e65415bb100c35d4",
          "url": "https://github.com/j3hempsey-actions/github-action-benchmark/commit/199abc83cdf9b37f6180294f507ead121520acf8"
        },
        "date": 1670627743649,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_fib_10",
            "value": 178,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_fib_20",
            "value": 24481,
            "range": "± 125",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}