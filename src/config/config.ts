import path from 'path'
import * as dotenv from 'dotenv'
import pathDir from '../utils/path'

dotenv.config({ path: path.resolve(pathDir, '..', 'config.env') })

export default {
  port: process.env.PORT || 5000,
}
