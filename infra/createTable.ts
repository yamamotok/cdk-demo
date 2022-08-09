import { aws_dynamodb as DynamoDb, RemovalPolicy } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export function createTable(scope: Construct, id: string): DynamoDb.Table {
  const table = new DynamoDb.Table(scope, id, {
    tableName: id,
    partitionKey: {
      name: 'pk',
      type: DynamoDb.AttributeType.STRING,
    },
    sortKey: {
      name: 'sk',
      type: DynamoDb.AttributeType.STRING,
    },
    removalPolicy: RemovalPolicy.RETAIN,
    billingMode: DynamoDb.BillingMode.PAY_PER_REQUEST,
  });
  table.addGlobalSecondaryIndex({
    indexName: 'GSI1',
    partitionKey: {
      name: 'dataType',
      type: DynamoDb.AttributeType.STRING,
    },
    sortKey: {
      name: 'index1',
      type: DynamoDb.AttributeType.STRING,
    },
  });
  table.addGlobalSecondaryIndex({
    indexName: 'GSI2',
    partitionKey: {
      name: 'dataType',
      type: DynamoDb.AttributeType.STRING,
    },
    sortKey: {
      name: 'index2',
      type: DynamoDb.AttributeType.STRING,
    },
  });
  table.addGlobalSecondaryIndex({
    indexName: 'SKPK',
    partitionKey: {
      name: 'sk',
      type: DynamoDb.AttributeType.STRING,
    },
    sortKey: {
      name: 'pk',
      type: DynamoDb.AttributeType.STRING,
    },
  });
  return table;
}
