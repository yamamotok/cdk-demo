2022 Summer
------

環境変数の設定が必要  
Environment variables are required for every cdk* npm scripts.
```
AWS_ACCESS_KEY_ID=mmmmm
AWS_SECRET_ACCESS_KEY=nnnnn
AWS_DEFAULT_REGION=us-west-2
AWS_ACCOUNT=00000
```

Bootstrapの実行が必要  
You need bootstrapping before execute CDK commands.
```
cdk bootstrap aws://{{your_AWS_account}}/{{AWS_region}}
```
