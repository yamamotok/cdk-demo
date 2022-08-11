2022 夏の特別企画 「AWS CDK だけでサーバーレス」の教材
------

This is a material for the webinar "Serverless with AWS CDK" in 2022 Summer.

## ウェビナーの概要 - Summary

[Serverless](https://www.serverless.com/) や [SST](https://sst.dev/)
などのフレームワークを用いずに、[AWS CDK](https://aws.amazon.com/cdk/) だけでウェブアプリケーションをデプロイします。 今回は [Fastify](https://www.fastify.io/) と
TypeScript で書かれたAPIサーバーをAPI Gateway + Lambda でホストします。

Now we try to deploy a web application on AWS without serverless frameworks
e.g. [Serverless](https://www.serverless.com/), [SST](https://sst.dev/) but only
using [AWS CDK](https://aws.amazon.com/cdk/). The application is made with [Fastify](https://www.fastify.io/) and
written in TypeScript, then it will be served through API Gateway + Lambda.

## 注意 - Note

ご自身でお試しの際は、以下の設定が必要ですのでご注意ください。

Please be noted that following settings are required when you try by yourself.

(1) すべての npm script の実行のに際しては以下の環境変数の設定が必要です。

(1) Before executing every npm script, you need to set environment variables below;

```
AWS_ACCESS_KEY_ID=mmmmm
AWS_SECRET_ACCESS_KEY=nnnnn
AWS_DEFAULT_REGION=us-west-2
AWS_ACCOUNT=00000
```

(2) 最初に AWS CDK の bootstrap が必要です

(2) At first you need bootstrapping with the CDK command below;

```
cdk bootstrap aws://{{your_AWS_account}}/{{AWS_region}}
```
