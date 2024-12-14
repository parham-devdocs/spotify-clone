import aws from "@aws-sdk/client-s3";

export default function S3Client() {
    
    return new aws.S3Client({
        endpoint:process.env.LIARA_ENDPOINT,
      region: process.env.LIARA_REGION,
      credentials: {
        accessKeyId: LIARA_SECRET_KEY,
        secretAccessKey: process.env.LIARA_ACCESS_KAY,
      },
    });
}
