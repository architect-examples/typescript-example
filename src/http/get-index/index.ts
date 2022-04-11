import { Handler, APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from 'aws-lambda';
type LambdaHandler = Handler<APIGatewayProxyEventV2, APIGatewayProxyResultV2>;

// a local import
import msg from './message';

// Imported code and corresponding `tsconfig.json` > `compilerOptions` > `paths` setting
import tsShared from 'shared';                    // "shared": [ "src/shared-ts" ]
import { createFizzBuzz } from 'shared/fizzBuzz'; // "shared/*": [ "src/shared-ts/*" ]
import arcViews from '@architect/views';          // "@architect/views": [ "src/views" ]
import arcShared from '@architect/shared';        // paths: "@architect/shared": [ "src/shared" ]

const RANDOM = Math.floor(Math.random() * 30) + 1;

export const handler: LambdaHandler = async (_event, _context) => {
  return {
    'statusCode': 200,
    'headers': { 'content-type': 'application/json' },
    body: JSON.stringify({
      msg: msg(),
      'shared': tsShared(),
      '@architect/views': arcViews(),
      '@architect/shared': arcShared(),
      'shared/fizzBuzz': `RANDOM=${RANDOM}: ${createFizzBuzz(RANDOM)}`,
    }),
  }
}
