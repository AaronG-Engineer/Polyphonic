//Main Code hidden due to private course restrictions


const { PollyClient, SynthesizeSpeechCommand } = require("@aws-sdk/client-polly");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");

const polly = new PollyClient({});
const s3 = new S3Client({});

exports.handler = async (event) => {
    try {
        if (!event.text) {
            throw new Error("No text provided for speech synthesis.");
        }

        const voiceParams = {
            Text: event.text,
            OutputFormat: "mp3",
            VoiceId: "Matthew", // Changed Voice ID for variation
        };

        // Request speech synthesis
        const speechResponse = await polly.send(new SynthesizeSpeechCommand(voiceParams));

        // Define S3 storage key
        const objectKey = `speech-${Date.now()}.mp3`;

        // Upload synthesized audio to S3
        const uploadParams = {
            Bucket: "<YOUR-BUCKET-NAME>", // Replace with actual bucket name
            Key: objectKey,
            Body: speechResponse.AudioStream,
            ContentType: "audio/mpeg",
        };

        await s3.send(new PutObjectCommand(uploadParams));

        return {
            statusCode: 200,
            body: JSON.stringify({ message: `Speech file successfully saved as ${objectKey}` }),
        };
    } catch (err) {
        console.error("Processing error:", err);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "An issue occurred while processing the request." }),
        };
    }
};
