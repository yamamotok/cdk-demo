import {
  aws_lambda as Lambda,
  aws_apigateway as ApiGateway,
  Duration,
  Stack,
  StackProps,
} from 'aws-cdk-lib';
import {Construct} from 'constructs';
import path from 'path';

import {createTable} from './createTable';
import {makeId} from './makeId';

export class MainStack extends Stack {
  readonly stageName = 'main';

  constructor(
    scope: Construct,
    id: string,
    props: StackProps
  ) {
    super(scope, id, props);

    const userTable = createTable(this, makeId('user', 'table'));

    const mainFn = new Lambda.Function(this, makeId('main', 'fn'), {
      code: Lambda.Code.fromAsset(path.join(__dirname, '../build')),
      handler: 'index.handler',
      runtime: Lambda.Runtime.NODEJS_16_X,
      timeout: Duration.millis(5000),
      environment: {
        PATH_PREFIX: `/${this.stageName}`,
        STAGE_NAME: this.stageName,
      },
      memorySize: 512,
    });
    userTable.grantReadWriteData(mainFn);

    // API Gateway
    const gw = new ApiGateway.LambdaRestApi(this, makeId('main', 'gw'), {
      handler: mainFn,
      proxy: true,
      endpointConfiguration: {
        types: [ApiGateway.EndpointType.REGIONAL],
      },
      deployOptions: {
        stageName: 'app', // Note: this is another thing, not our "stage".
        throttlingBurstLimit: 100,
        throttlingRateLimit: 10,
      },
      defaultMethodOptions: {
        apiKeyRequired: false,
      },
    });
  }
}
