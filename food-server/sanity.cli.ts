import {defineCliConfig} from 'sanity/cli'
import {dataset, projectId} from './evironmnent'

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
})
