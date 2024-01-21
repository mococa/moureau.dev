/* ---------- External ---------- */
import {
  ComponentResource,
  ComponentResourceOptions,
  interpolate,
} from "@pulumi/pulumi";
import { s3 } from "@pulumi/aws";

/* ---------- Interfaces ---------- */
export interface S3Props {
  bucket_name: string;
  environment: string;
}

export class PublicBucket extends ComponentResource {
  bucket: s3.Bucket;

  public constructor(
    name: string,
    props: S3Props,
    opts?: ComponentResourceOptions
  ) {
    super(`${name}:index:${props.environment}`, name, {}, opts);

    const { bucket_name, environment } = props;

    const bucket_final_name =
      environment === "production"
        ? bucket_name
        : `${bucket_name}-${environment}`;

    const bucket = new s3.Bucket(`${bucket_name}-${environment}`, {
      bucket: bucket_final_name,
      versioning: { enabled: true },
    });

    const access_block = new s3.BucketPublicAccessBlock(
      `${bucket_name}-bucket-public-access-block-${environment}`,
      {
        bucket: bucket.id,
        blockPublicAcls: false,
        blockPublicPolicy: false,
        ignorePublicAcls: false,
        restrictPublicBuckets: false,
      },
      { dependsOn: [bucket] }
    );

    new s3.BucketPolicy(
      `${bucket_name}-bucket-policy-${environment}`,
      {
        bucket: bucket.id,
        policy: {
          Version: "2012-10-17",
          Statement: [
            {
              Sid: "Moureau-Bucket-Policy",
              Effect: "Allow",
              Principal: "*",
              Action: [
                "s3:ListBucket",
                "s3:GetObject",
                "s3:GetObjectAcl",
                "s3:PutObject",
                "s3:PutObjectAcl",
              ],
              Resource: [bucket.arn, interpolate`${bucket.arn}/*`],
            },
          ],
        },
      },
      { dependsOn: [bucket, access_block] }
    );

    // Create a new S3 Bucket CORS
    new s3.BucketCorsConfigurationV2(
      `${bucket_name}-bucket-cors-${environment}`,
      {
        bucket: bucket.id,
        corsRules: [
          {
            allowedHeaders: ["*"],
            allowedMethods: ["PUT", "POST", "DELETE"],
            allowedOrigins: ["*"],
            exposeHeaders: [],
          },
        ],
      },
      { dependsOn: [bucket] }
    );

    this.bucket = bucket;
  }
}
