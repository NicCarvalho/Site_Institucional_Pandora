module.exports = {
  apps : [{
    name: 'pandora-next',
    script: 'node_modules/next/dist/bin/next',
    args: 'start -p 21040',
    cwd: '/home/pandoratextil/apps_nodejs',
    exec_mode: 'fork',
    instances: 1,
    autorestart: true,
    env: {
      NODE_ENV: "production"
  },
}],
}