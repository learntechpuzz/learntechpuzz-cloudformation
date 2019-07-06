@echo off
set ApplicationName=learntechpuzz
set StageName=dev
set S3BucketName=learntechpuzz
set S3SAMBucketName=learntechpuzz-sam
set InputFile=template.yaml
set OutputFile=template-output.yaml
set StackName=%ApplicationName%-%StageName%
set SourceEmail=learntechpuzz@gmail.com

:: Build Java application - Lambda Functions using maven
cd lambda-functions
call mvn clean package
cd ..

:: Delete SAM s3 bucket 
call aws s3 rb s3://%S3SAMBucketName% --force

:: Create SAM s3 bucket
call aws s3 mb s3://%S3SAMBucketName%

:: Copy swagger.yaml into SAM s3 bucket
call aws s3 cp swagger.yaml s3://%S3SAMBucketName%/swagger.yaml

:: Package SAM
call aws cloudformation package --template-file %InputFile% --output-template-file %OutputFile% --s3-bucket %S3SAMBucketName%

:: Deploy SAM
call aws cloudformation deploy --template-file %OutputFile% --stack-name %StackName% --parameter-overrides ApplicationName=%ApplicationName% StageName=%StageName% S3BucketName=%S3BucketName% S3SAMBucketName=%S3SAMBucketName% SourceEmail=%SourceEmail% --capabilities CAPABILITY_NAMED_IAM

:: Build web-site
cd web-site
call npm install
call npm run build

:: Deploy web-site
call npm run deploy
