/* ---------- External ---------- */
import {
  ComponentResource,
  ComponentResourceOptions,
  Output,
  Resource,
} from "@pulumi/pulumi";
import {
  PulumiNullstack,
  ServerlessApp,
} from "nullstack-serverless-pulumi-aws";

/* ---------- Resources ---------- */
import { PublicBucket } from "./s3";

/* ---------- Constants ---------- */
import { domains } from "../../../utils/constants/domains";

/* ---------- Interfaces ---------- */
export interface WebDistributionProps {
  app_dir: string;
  environment: string;
  certificate_arn: Output<string>;
  api_endpoint: Output<string>;
}

/* ---------- Component Resources ---------- */
export class WebDistribution extends ComponentResource {
  app: PulumiNullstack;
  sls: ServerlessApp;
  s3: PublicBucket;

  public constructor(
    name: string,
    props: WebDistributionProps,
    opts?: ComponentResourceOptions
  ) {
    super(`${name}:index:${props.environment}`, name, {}, opts);

    const { app_dir, environment, certificate_arn, api_endpoint } = props;

    /* ---------- Component Resources ---------- */
    this.s3 = new PublicBucket("moureau-bucket", {
      bucket_name: "moureau",
      environment,
    });

    this.app = new PulumiNullstack("moureau-web", {
      environment,
      domain: domains.web[environment],
      env: {
        NULLSTACK_SECRETS_API_ENDPOINT: api_endpoint,
      },
      nullstack_app_path: app_dir,
    });

    this.sls = new ServerlessApp(
      "moureau-web-sls",
      {
        lambda_fn: this.app.lambda_fn,
        environment,
        certificate_arn,
        hostname: domains.web[environment],
      },
      { dependsOn: [this.app.lambda_fn as Resource] }
    );
  }
}
