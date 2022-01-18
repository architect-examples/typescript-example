import whatev from 'whatev'
import copy from './copy'
import shared from 'shared'

// You don't need to use the @architect/[shared|views] pattern, since it'll all be bundled
// But if you do want, see `tsconfig.json` for the `compilerOptions` settings
import views from '@architect/views'

export default function (): string {
  return `${copy()}; ${shared()}; ${views()}; and here's a string from a npm dep: ${whatev.string}!`
}
