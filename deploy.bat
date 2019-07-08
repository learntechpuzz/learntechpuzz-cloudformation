@echo off
set ApplicationName=learntechpuzz
set StageName=dev
set S3BucketName=learntechpuzz
set S3SAMBucketName=learntechpuzz-sam
set InputFile=template.yaml
set OutputFile=template-output.yaml
set StackName=%ApplicationName%
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

:: Replace CognitoAuthLoginURL in public.html

set search=CognitoAuthLoginURL
call aws cloudformation describe-stacks --stack-name %StackName% --query "Stacks[0].Outputs[?OutputKey=='CognitoAuthLoginURL'].OutputValue" --output text > CognitoAuthLoginURL.txt
set /p replace=<CognitoAuthLoginURL.txt

powershell "(Get-Content public\public.html) | Foreach-Object {$_ -replace '%search%', '%replace%'} | Set-Content public\public.html"

:: Replace S3WebsiteURL in secured.html

set search=S3WebsiteURL
call aws cloudformation describe-stacks --stack-name %StackName% --query "Stacks[0].Outputs[?OutputKey=='S3WebsiteURL'].OutputValue" --output text > S3WebsiteURL.txt
set /p replace=<S3WebsiteURL.txt

powershell "(Get-Content public\secured.html) | Foreach-Object {$_ -replace '%search%', '%replace%'} | Set-Content public\secured.html"

:: Replace APIGatewayURL in axios-api.js

set search=APIGatewayURL
call aws cloudformation describe-stacks --stack-name %StackName% --query "Stacks[0].Outputs[?OutputKey=='APIGatewayURL'].OutputValue" --output text > APIGatewayURL.txt
set /p replace=<APIGatewayURL.txt

powershell "(Get-Content src\modules\common\axios\axios-api.js) | Foreach-Object {$_ -replace '%search%', '%replace%'} | Set-Content src\modules\common\axios\axios-api.js"

:: Replace APIGatewayURL in axios-cognito.js

set search=CognitoAuthAPIURL
call aws cloudformation describe-stacks --stack-name %StackName% --query "Stacks[0].Outputs[?OutputKey=='CognitoAuthAPIURL'].OutputValue" --output text > CognitoAuthAPIURL.txt
set /p replace=<CognitoAuthAPIURL.txt

powershell "(Get-Content src\modules\common\axios\axios-cognito.js) | Foreach-Object {$_ -replace '%search%', '%replace%'} | Set-Content src\modules\common\axios\axios-cognito.js"

:: Replace APIGatewayURL in axios-cognito.js

set search=CognitoAuthLogoutURL
call aws cloudformation describe-stacks --stack-name %StackName% --query "Stacks[0].Outputs[?OutputKey=='CognitoAuthLogoutURL'].OutputValue" --output text > CognitoAuthLogoutURL.txt
set /p replace=<CognitoAuthLogoutURL.txt

powershell "(Get-Content src\modules\header\components\Header.js) | Foreach-Object {$_ -replace '%search%', '%replace%'} | Set-Content src\modules\header\components\Header.js"


call npm install
call npm run build
call npm run deploy

:: Copy public html
call aws s3 cp public/public.html s3://%S3BucketName%/public.html

:: Copy secured html
call aws s3 cp public/secured.html s3://%S3BucketName%/secured.html

:: Copy logo
call aws s3 cp public/learntechpuzz_logo.png s3://%S3BucketName%/learntechpuzz_logo.png

cd ..