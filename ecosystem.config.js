module.exports = {
  apps: [
    {
      name: "cultistcircle-staging",
      script: "bun",
      args: "run start",
      env: {
        NODE_ENV: "production",
        PORT: "3489",
      },
    },
    {
      name: "cultistcircle-prod",
      script: "bun",
      args: "run start",
      env: {
        NODE_ENV: "production",
        PORT: "3490",
      },
    },
  ],
};
