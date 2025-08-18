module.exports = {
  apps: [
    {
      name: "rishiexports",
      script: "npm",
      args: "start -- -p 3010",
      cwd: "./",
      env: {
        NODE_ENV: "production",
        PORT: 3010,
      },
      instances: 1,
      exec_mode: "fork",
      watch: false,
      max_memory_restart: "1G",
      error_file: "./logs/err.log",
      out_file: "./logs/out.log",
      log_file: "./logs/combined.log",
      time: true
    }
  ]
};
