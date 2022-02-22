require("dotenv").config();
module.exports = {
      fileSystem: {
        path: "./DB",
      },
      mongodb: {
        cnxStr: process.env.MONGODB_URI,
        options: {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true,
          serverSelectionTimeoutMS: 5000,
        },
      },
      firebase: {
        "type": "service_account",
        "project_id": "nodejs-coderhouse-pf",
        "private_key_id": "dc4970139cfd98533df501150ab3ee5bfcb65ebf",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDLN1bNctI7dEDg\nsn1ZZpcaaQGMZAE9kw56gta8NlKYFHak7akqUvUlY4LrzYM3yi8vBwbvYCFjyruz\nqjFe4WiwK7Lgymu3tzQkzk7oen757V6cAQVlztvIYEAiQCZiYQUgFQG/s4LnRY7u\nuWJg8JuHWRM9GskuNrZpebOlGGD6gyQ6G5pJJrMQdAl2pPMCLQWCQC2P6R3Rvux6\nNe2WiMy6Ke7Eq9HcFLZRWsZ7H8UE4G95rhYBDY4uQhS/t8f0X4Jg4sER7uDunTJC\nE7RWe2KAADlj/9yV3/v4ehUzF9tR8/2qtXrTU/WZx+XG9Yxz4k5+baTPQh8NvnqA\nlir3m+xjAgMBAAECggEAE27ASzcuqWbNiW8oE3N/AZSHBGDPyY6VdNusIyViso5K\nZi0f3x89uAyTCW+Gm8Am0O1wGVXs+3j4iA6/V95gP3B+U4an1FKdluNvokWMfOPZ\nBzwFwx2L4NZra5sM0J2MeuvnVeiZnPoG2Ac8RB7eEIxRDafREy1CNkXgCuqQ44OZ\nQNfdPnMvgc8j4kdD0enk3kpOOyO5BQqcAs2oRbNYlqECJW3ZkgAnCpwoURInBTmv\n5zM8nxFBpVPZdVq3Gd81DVAMNixh52Vbut5M+ioQA/fgjH8X++AfYy09xAa/qINP\nxXjdOcVbhmIUAqQxjA1e4uqz1xnrGS6+cu3SVaQsgQKBgQDqWOI172Ye8cEwYTwA\nKSQlYZkP5DBHTn7jooGXUNbf+B4HPVfhY+lb4xHCmwJthSfk8eAwQ3aqO9ahVLwH\nLmXUU5y/u+QFQycQNvExB+K6IwzE6MH/r7bUvdJHlNWhI9n/xB/l7HsJbSX+hGYD\nW7oYgFByreQD0+vTh25ajeHiwQKBgQDd/hl8RnQ72H5pGYeUzmz21P5ZDAE3Ni71\nIvYurNAum4BqJT/22RMBbkbvUbI7dg03NA7vp4k3vrnEVMudSuKQAbWKyJlq5SEf\nDWFYRi4I40Q7pTVD1ut17sX+LTV0VpWB2foVD0ORIfyxwmjNloGMyOecrBmtIkzj\nHb69cLDsIwKBgBHHZIILA4hddvagqdipRmC/oskd2rvOLLpAXeyI6YRcYorSEJS8\n67tY4sQM1oZQj9JCt2tx8tK/b20V7J3u2zLclQvGyWnMym3kfS/nFUBh4Fof/nfT\ncN969zUPCZYMDkHlMzZSVpNEgJlqmgKvNtMdCP1qS94uebm2kJy2HukBAoGBAKkU\nbFzXXJhoYH+0TivsvdmSiNdR6Wsf/cwAAPmz7ixRjBFMpddhprQkRirpUpMvawls\nwSOPu1eWEO+UljELZFzCsH8wIonkUsHP8yDE8zMZxlKXlmZBP73nSy45SMl/WQg5\n+dwocBIOjOTnaeOMisesDZyrCDNyOJWThj/LoTV5AoGAbqAes2iIPTP8DIT7v7Vc\njcVyLqfKaYmanoFViUtC3d8rqeLO2oThDAKIEJ5dFcnU6nhV2Qh5rMNB3HncDhjQ\nTTjg0ojoeMnB84A0KI5OecBtkFiFa77sVjckO3QcHLIq8s3Ps9gIbdTVaLVTWFu5\nbitnvu9XuDh38gsDgoZ5Xas=\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-enc67@nodejs-coderhouse-pf.iam.gserviceaccount.com",
        "client_id": "109806321668578863664",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-enc67%40nodejs-coderhouse-pf.iam.gserviceaccount.com"
      }
    };
    