# Polyphonic
Polyphonic is a text narrator powered by Amazon Polly that converts uploaded text from an S3 bucket into speech, with adjustable voice, pitch, and speed for a personalized listening experience.


# 🎙️ **Amazon Polly Text Narrator**  

## 🔹 **Overview of Project** ☁️  
This project was developed as part of **TechWithLucy’s cloud challenge**, where I followed a tutorial to build a **text-to-speech narrator** using **Amazon Polly**.  
Once completed, this tool can:  
✅ **Convert text (books, articles, newsletters) into speech**  
✅ **Adjust voice, pitch, and speed parameters**  
✅ **Store generated audio files in an Amazon S3 bucket**  

## 🔹 **Steps to Be Performed** 👩‍💻  
Throughout the tutorial, I followed these key steps:  
1️⃣ **Exploring Amazon Polly** – Understanding how it generates human-like speech  
2️⃣ **Creating an IAM role** – Setting up permissions for Polly and Lambda  
3️⃣ **Creating an S3 Bucket** – Storing input text and output audio  
4️⃣ **Writing the Lambda function code** – Processing text-to-speech conversion  
5️⃣ **Checking the output of Amazon Polly** – Verifying results  

## 🔹 **AWS Services Used** 🛠  
🚀 **Amazon Polly** → Converts text to realistic speech  
🚀 **AWS Management Console** → Manages accounts and Polly configurations  
🚀 **AWS IAM** → Ensures secure access by managing permissions  

## 🔹 **How I Built It**  
This wasn’t my first time using Amazon Polly, but it was my first time **building this specific project following the tutorial**.  
I chose a **neutral tone for human-like speech** and selected **Joanna** as the voice—she reminded me of a grade school teacher I had!  

### **1️⃣ Setting Up IAM Roles**  
I went straight to IAM roles, improving my understanding of AWS security setup.  
I added the following permissions:  
- **AmazonPollyFullAccess**  
- **AmazonS3FullAccess**  
- **AWSLambdaBasicExecutionRole**  

Named the role: **pollywannacracker** 🦜  
![IAM Roles Setup](https://github.com/AaronG-Engineer/Polyphonic/blob/main/Creating%20the%20polly%20IAM%20Roles.png)  

### **2️⃣ Writing the JavaScript Code**  
I used JavaScript for this implementation, even though I haven’t had much hands-on experience with JS.  
With the help of AI, I dissected and understood each part:  
✅ **AWS Polly & S3 initialized** to process text-to-speech conversion  
✅ **Listening function** extracts incoming text input  
✅ **Polly converts text to MP3** and uploads the file to an S3 bucket  
✅ **Error handling & success messages implemented**  

### **3️⃣ Creating the Lambda Function**  
This is where I ran into issues! Initially, I **couldn’t add my IAM roles properly**—after troubleshooting, I realized I had **misspelled AWSpolystuffandthings** (missed an "L" 😅).  
After correcting the issue, Lambda worked smoothly!  
![Lambda Function Setup](https://github.com/AaronG-Engineer/Polyphonic/blob/main/lambda%20for%20polly.png)  

### **4️⃣ Running the Test & Verifying Output**  
I ensured my **S3 bucket name** was correct, then ran the test.  
Lambda logs showed function **start, end, and success**—time to listen!  
I downloaded the MP3 file and **heard my 9th-grade teacher "Ms. Minor" reading a short message**—surreal but awesome!  

Might add a **full book** later, but got other projects to complete first.  
Still part of the **TechWithLucy cloud challenge**—wonder if I'll earn a badge? 🤔  

### **5️⃣ Full End Results – System in Action**  
![Full End Running](https://github.com/AaronG-Engineer/Polyphonic/blob/main/Full%20end%20shot.png)  

📌 **Final Screenshot Layout:**  
🔹 **Top:** JavaScript Code Snippet  
🔹 **Left:** AI Assistance with Polly  
🔹 **Bottom:** Lambda function logs running successfully  
🔹 **Right:** Audio file downloaded & working perfectly  

Huge **shoutout to Lucy** for the awesome learning experience! 🎉  
