import AWS from 'aws-sdk';
import { injectable } from 'inversify';

AWS.config.update({ region: 'us-east-1' });

@injectable()
export class AwsService{
  
  constructor(){}

  public getSecret = async (secretName: string): Promise<string> => {
    const secretsManager = new AWS.SecretsManager();
    try {
      const data = await secretsManager.getSecretValue({ SecretId: secretName }).promise();
  
      if ('SecretString' in data) {
        return data.SecretString as string;
      } else {
        const buff = Buffer.from(data.SecretBinary as string, 'base64');
        return buff.toString('ascii');
      }
    } catch (err) {
      throw new Error(`Error retrieving secret: ${err}`);
    }
  };

}
