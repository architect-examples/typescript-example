import msg from './message'
export async function handler (request: any, context: any): Promise<any> {
  return { ok: msg() }
}
