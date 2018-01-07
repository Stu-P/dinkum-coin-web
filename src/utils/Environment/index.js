import debug from './debug.json'
import build from './build.json'

const Environment = process.env.npm_lifecycle_event.indexOf('start') !== -1 ? debug : build

export default Environment
