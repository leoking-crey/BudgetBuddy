module.exports = {
  apps: [{
    name: 'BudgetBuddy',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-217-87-201.us-east-2.compute.amazonaws.com',
      key: '~/AWS/hannahapp.pem',
      ref: 'origin/master',
      repo: 'git@github.com:hmkiesel/BudgetBuddy.git',
      path: '/home/ubuntu/BudgetBuddy',
      'post-deploy': 'npm install && pm2 startOrRestart /home/ubuntu/BudgetBuddy/source/ecosystem.config.js'
    }
  }
}
