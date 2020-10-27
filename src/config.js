export default {
  STRIPE_KEY:
    "pk_test_51HgKC2GMDDCytPPBMPaPvyRrm6vrHsSXbrVZfZ1VV58f9T2nV8Z6a1575Thkqp2mYvnpTf3ry4CEjCnvtGBBZpD100ps3h2kKH",
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-gitdate",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://dp9bskkrna.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_DG8vwjPSX",
    APP_CLIENT_ID: "74p0nv37jishf3o3q23hld5veu",
    IDENTITY_POOL_ID: "us-east-1:c89c93d7-a56c-4f8c-a500-057a67c13275",
  },
};