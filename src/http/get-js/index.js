let shared = require('@architect/shared')
let views = require('@architect/views')

exports.handler = async () => ({ ok: `hi from get /js; ${shared()}; ${views()}` })
