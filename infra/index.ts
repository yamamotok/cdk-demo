import {App} from 'aws-cdk-lib';

import {MainStack} from './MainStack';
import {makeId} from './makeId';

const app = new App();

new MainStack(app, makeId('main', 'stack'), {
  env: {
    account: process.env.AWS_ACCOUNT,
    region: process.env.AWS_DEFAULT_REGION,
  },
});
