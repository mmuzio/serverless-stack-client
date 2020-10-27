const dev = {
  STRIPE_KEY: "pk_test_51HgKC2GMDDCytPPBMPaPvyRrm6vrHsSXbrVZfZ1VV58f9T2nV8Z6a1575Thkqp2mYvnpTf3ry4CEjCnvtGBBZpD100ps3h2kKH",
  s3: {
    REGION: "us-east-1",
    BUCKET: "dev-notes-infra-s3-uploads4f6eb0fd-65dooyadakra",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://x0oqcdtfd2.execute-api.us-east-1.amazonaws.com/dev",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_7HjpuF32A",
    APP_CLIENT_ID: "1lnhkridse5jjv3dstpcn8bo2t",
    IDENTITY_POOL_ID: "us-east-1:62938141-eaf3-4559-a902-7868f5910b1c",
  },
};

const prod = {
  STRIPE_KEY: "pk_test_51HgKC2GMDDCytPPBMPaPvyRrm6vrHsSXbrVZfZ1VV58f9T2nV8Z6a1575Thkqp2mYvnpTf3ry4CEjCnvtGBBZpD100ps3h2kKH",
  s3: {
    REGION: "us-east-1",
    BUCKET: "prod-notes-infra-s3-uploads4f6eb0fd-t9hkq24qnrb1",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://dp9bskkrna.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_e5h6LaaGR",
    APP_CLIENT_ID: "75rj37tj952ojms184j6q66e0g",
    IDENTITY_POOL_ID: "us-east-1:331c9763-d827-4357-8829-1bf55966cf2d",
  },
};

// Default to dev if not set
const configuration = process.env.REACT_APP_STAGE === 'prod' ? prod : dev;

export const config = {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...configuration
};