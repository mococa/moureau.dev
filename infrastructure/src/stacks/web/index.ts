/* ---------- External ---------- */
import { Config } from "@pulumi/pulumi";
import { join } from "path";
import { compressSSRNullstackApps } from "nullstack-serverless-pulumi-aws";

/* ---------- Resources ---------- */
import { WebDistribution } from "./resources";

/* ---------- Utils ---------- */
import { walk_back_until } from "../../utils/helpers/walk_back_until";

/* ---------- Constants ---------- */
const config = new Config();
const environment = config.require("environment");
const certificate_arn = config.requireSecret("certificate_arn");
const api_endpoint = config.requireSecret("api_endpoint");

const src = walk_back_until(__dirname, "src");
const app_dir = join(src, "..", "..", "web");

compressSSRNullstackApps([app_dir]);

/* ---------- Component Resources ---------- */
const { app, sls, s3 } = new WebDistribution("moureau-web-distribution", {
  app_dir,
  environment,
  certificate_arn,
  api_endpoint,
});

const [{ lambda_fn_url }, { apigateway_domain_name: domain }] = [app, sls];

/* ---------- Output ---------- */
export const panel_lambda_url = lambda_fn_url?.functionUrl;
export const panel_cname = domain?.domainNameConfiguration.targetDomainName;
export const bucket = s3.bucket.bucketRegionalDomainName;
