# Polyphonic – AI Text-to-Speech Converter

![AWS](https://img.shields.io/badge/AWS-Polly-orange) ![Lambda](https://img.shields.io/badge/Lambda-JavaScript-yellow) ![S3](https://img.shields.io/badge/S3-Storage-green)

## 🎯 Purpose
Text-to-speech conversion system using Amazon Polly that transforms written content into natural-sounding audio with customizable voice parameters, enabling accessibility and audio content creation.

## 🏗️ Architecture
- **Amazon Polly** – Neural text-to-speech engine
- **AWS Lambda** – Serverless processing function
- **Amazon S3** – Input text and output audio storage
- **IAM** – Secure service permissions

## ⚙️ Technical Implementation

### IAM Configuration
Created role with required permissions:
- AmazonPollyFullAccess
- AmazonS3FullAccess
- AWSLambdaBasicExecutionRole

![IAM Roles](assets/Creating%20the%20polly%20IAM%20Roles.png)

### Lambda Function
Implemented serverless processing using JavaScript:
```javascript
// Initialize AWS services
const AWS = require('aws-sdk');
const Polly = new AWS.Polly();
const S3 = new AWS.S3();

// Convert text to speech
const params = {
  Text: inputText,
  OutputFormat: 'mp3',
  VoiceId: 'Joanna',
  Engine: 'neural'
};

// Upload to S3
const audioStream = await Polly.synthesizeSpeech(params);
await S3.putObject({
  Bucket: bucketName,
  Key: `audio/${timestamp}.mp3`,
  Body: audioStream.AudioStream
});
```

![Lambda Function](assets/lambda%20for%20polly.png)

### System Architecture
![Full System](assets/Full%20end%20shot.png)

**Process Flow:**
1. Text uploaded to S3 bucket
2. Lambda function triggered
3. Polly converts text to speech
4. Audio file stored in S3
5. Download link generated

## 🎯 Key Features
- ✅ Neural text-to-speech conversion
- ✅ Multiple voice options (Joanna, Matthew, etc.)
- ✅ Adjustable pitch and speed parameters
- ✅ MP3 audio output format
- ✅ Serverless architecture for scalability

## 📊 Configuration Options

### Voice Parameters
- **Voice:** Joanna (neural engine)
- **Speed:** Adjustable (0.25x - 4x)
- **Pitch:** Customizable range
- **Format:** MP3, OGG, PCM

### Use Cases
- Accessibility features for visually impaired users
- Audiobook creation from text content
- Voice-over generation for videos
- Podcast automation from written scripts
- E-learning content narration

## 🔧 Technical Highlights
- Event-driven serverless architecture
- Neural TTS engine for natural speech
- S3 integration for scalable storage
- IAM least-privilege security model
- Lambda function optimization for performance

## 📈 Performance Metrics
- **Processing Speed:** ~1-2 seconds per paragraph
- **Audio Quality:** 24kHz neural voices
- **Cost Efficiency:** Pay-per-character pricing
- **Scalability:** Handles concurrent requests automatically

## 🔒 Security Implementation
- IAM role-based access control
- S3 bucket policies for data protection
- Lambda execution role isolation
- Secure credential management

---

**Built with:** Amazon Polly | AWS Lambda | S3 | IAM | JavaScript

**Tags:** `aws` `polly` `text-to-speech` `lambda` `s3` `serverless` `accessibility` `audio`
