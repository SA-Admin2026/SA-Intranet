---
title: "AWS for D&B Set up"
confluence_id: 195592193
source: 195592193.html
---

# AWS for D&B Set up

This is Set up for running go here [AWS running lambdas for D&B](aws-running-lambdas-for-db/README.md)

I have now started over, as can't get anything to work

new account is through [dave.mccomb@semanticarts.com](mailto:dave.mccomb@semanticarts.com)

767364526248 

pwd Bex661&&

acct dnb

Note: the S3 browser is failing on my Mac, I got cyber duck.  I asked for credentials I'd never heard of, but when I was logged into my S3 account I was able to create and download new credentials

Access Key ID:    AKIAJEBA4OLGC2RIB7B

Secret Access Key:   1kasbCxXcY8UQM1RqsDBdTuEit36Nc0ClfP3zIep

I bought a developers account at $29 a month (maybe I can add a bucket for that)

waiting on an email from them.

Ok got this to work, set up the buckets and folders.

These buckets

- [awsbucket](http://awsbucket.dnb.com).[dnb.com](http://dnb.com).matrix
- [awsbucket](http://awsbucket.dnb.com).[dnb.com](http://dnb.com).tabular
- [awsbucket](http://awsbucket.dnb.com).[dnb.com](http://dnb.com).triples
- [awsbucket](http://awsbucket.dnb.com).[dnb.com](http://dnb.com).previous
- [awsbucket](http://awsbucket.dnb.com).[dnb.com](http://dnb.com).deltas
- [awsbucket.dnb.com](http://awsbucket.dnb.com).archive

What you need to work is N windows open, something like this:

1. The AWS Console [https://us-east-2.console.aws.amazon.com/console/home?region=us-east-2#](https://us-east-2.console.aws.amazon.com/console/home?region=us-east-2)
2. The IAM consule  <https://console.aws.amazon.com/iam/home?region=us-east-2#/home>
3. The Lambda Console <https://us-east-2.console.aws.amazon.com/lambda/home?region=us-east-2#/functions>

## In window 1 (Role set up in the IAM)

![](/internal-systems/attachments/195592193/205324299.png)

![](/internal-systems/attachments/195592193/205225990.png)

Might have to add one as I did here

![](/internal-systems/attachments/195592193/205455362.png)

Note that you find the existing policy and attach it to the role

## In window 2 (s3 buckets)

![](/internal-systems/attachments/195592193/205258771.png)

Note that when a drop occurs inside a folder the file has the folder in the path

![](/internal-systems/attachments/195592193/205389846.png)

## Window 3 (Coding, testing and monitoring)

This window has tabs and is context sensitie.

The tabs are these

![](/internal-systems/attachments/195592193/205357060.png)

When you'r in config

You have to have selected teh method name (grabMatrix) to see the code below.  The stuff on the left is the trigger the stuff on teh right, don't know.

![](/internal-systems/attachments/195592193/205226003.png)

Up on the top you can define test events and run locally, (easier to debug the results come out below your code)

![](/internal-systems/attachments/195592193/205324310.png)

Hwever it appears that the real events fire the lambda, but in order to see the trace you need to go to monitoring

And its the "jum to Logs in teh invocation count that gets you to the output

![](/internal-systems/attachments/195592193/205226008.png)

## To upload a package to lambda

1. ) get the package in a folder by itself (either PIP or look in the python3.6.4/ Lib /sitepacakges directory and copy the packages
2. ) I found that I had to take a copy of all the files in my sitepacakges + the file I'm writing (in this case lambda\_function.py)
3. ) and then zip all of this into a zip folder that I renamed to lambda\_package.zip

### 

Then in teh function area of the lambeda manager, uplaod the zip

![](/internal-systems/attachments/195592193/229539867.png)

Now the code is too big to run in the manager (but at least it runs)

### apendix

Note: I am paying for some support I should figure out how to access it

[https://console.aws.amazon.com/support/plans/home?#/](https://console.aws.amazon.com/support/plans/home#/)

## Big Challenge now

1. how to get the openpyxl library in there
2. how to write to a tmp file so that openpyxl can get at it.

So far I only have a folder for

- Direct1xElements in matrix
- Direct1xElements-flat in tabular

Supposedly I move stuff there through scp

`http://bucket.s3.amazonaws.com` should become

http://[awsbucket](http://awsbucket.dnb.com).[dnb.com](http://dnb.com).matrix.s3.amazonaws.com

and therefore the instruction to copy my code there

scp -i key.pem /path/to/my\_code.py ec2-user@public-ip-address:~/CreateThumbnail.py

should become something like

scp -i key.pem //Users/davemccomb/Desktop/lambda\_python.py dave.mccomb@**public-ip-address**:~/CreateThumbnail.py

\*\* couldn't figure the above out.  it is implied that I need a EC2 to host the code in addition to an s3 for the data (maybe??)

Meanwhile I'll try to work this example in <https://us-east-2.console.aws.amazon.com/lambda/home?region=us-east-2#/create?firstrun=true>

![](/internal-systems/attachments/195592193/197033985.png)

I believe I need an s3 read/write but that wasn't one of the two dozen or so options (most of which make no sense at all)

In the <https://console.aws.amazon.com/iam/home?region=us-east-2#/roles$new?step=permissions&selectedService=Lambda&selectedUseCase=Lambda>

IAM console I found a place to add roles, one of which was a lambda role, and to that I added AdminAccess, S3FullAccess and LambdaExcute and LambdaFull and CloudWatchFullAccess

This bit of advice

[![...](https://res.cloudinary.com/acloud-guru/image/fetch/w_40,h_40,c_thumb,q_auto,f_auto/https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F3501956%3Fv%3D3)](https://acloud.guru/named/Mossie93)[Mossie93 3Answered 9 months ago](https://acloud.guru/named/Mossie93)

I think AWS has recently stopped automatically adding permissions required to trigger your lambda function when you create the trigger from S3 management console. The quickest workaround I've found is adding a trigger from AWS Lambda configuration panel. (Go to AWS Lambda management console --> select your lambda function --> go to "Triggers" tab --> click "Add trigger" --> click on the empty box which points to lambda --> select S3 from the services dropdown --> Select bucket and Event type --> click "Submit")

Lead to this

![](/internal-systems/attachments/195592193/198115333.png)

Which allowed me to go back to

[https://s3.console.aws.amazon.com/s3/buckets/awsbucket.dnb.com.matrix/?region=us-east-2&tab=properties#](https://s3.console.aws.amazon.com/s3/buckets/awsbucket.dnb.com.matrix/?region=us-east-2&tab=properties)

And get the event wired up

![](/internal-systems/attachments/195592193/198115338.png)

I am now trying to hook up a policy to my bucket.  I have no idea what I'm doing.  This was the best advice I could find, cobbled from a couple of sources

{  
 "Version":"2018-01-24",  
 "Statement":[  
 {  
 "Sid":"statement1",  
 "Effect":"Allow",  
 "Action":[  
 "s3:CreateBucket", "s3:ListAllMyBuckets", "s3:GetBucketLocation" ,"s3:GetObject"  
 ],  
 "Resource":[  
 "arn:aws:s3:::\*"  
 ]  
 }  
 ]  
}

Couple of interesting things to note in the above:

- "2018-01-24" is not a valid version string, however "2012-10-17" (which I found in some examples)
- Principal is missing even though it wasn't in either of the examples I was working through.

This one is much closer

{  
"Version":"2012-10-17",  
"Statement":[  
{  
"Sid":"statement1",  
"Effect":"Allow",  
"Principal": {"AWS": ["arn:aws:iam::767364526248:root"]},  
"Action":["s3:GetObject"],  
"Resource":["arn:aws:s3:::\*"]  
}  
]  
}

however it says this is an invalid resource (despite the fact that I copied it from two different exemplars!

Which I put here

![](/internal-systems/attachments/195592193/199262244.png)

OLD Unsuccessful try

<https://aws.amazon.com/console/>

my account number is 542100339675 

Therefore my specific login is

<https://542100339675.signin.aws.amazon.com/console>

mkumba / Bex661&&

There is also an admin

Administrator / Bex661&&

To get to buckets

<https://console.aws.amazon.com/s3/>

<!-- section-nav:start -->

## In this section

- [AWS running lambdas for D&B](aws-running-lambdas-for-db/README.md)

<!-- section-nav:end -->
