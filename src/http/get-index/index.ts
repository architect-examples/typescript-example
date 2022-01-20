import { Handler, APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from 'aws-lambda'
type LambdaHandler = Handler<APIGatewayProxyEventV2, APIGatewayProxyResultV2>
import msg from './message'

export const handler: LambdaHandler = async (event, context) => {
  return { body: msg() }
}
