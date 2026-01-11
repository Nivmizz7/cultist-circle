module.exports = {
  apps: [
    {
      name: "cultistcircle-staging",
      script: "bun",
      args: "run dev",
      env: {
        NODE_ENV: "development",
        PORT: "3489",
      },
    },
    {
      name: "cultistcircle-prod",
      script: "bun",
      args: "run dev",
      env: {
        NODE_ENV: "development",
        PORT: "3490",
      },
    },
  ],
};
