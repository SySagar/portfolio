import {createClient, type ClientConfig} from '@sanity/client'

const config: ClientConfig = {
  projectId: '43kllfvi',
  dataset: 'dataset',
  useCdn: true, 
  apiVersion: '2024-04-06', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
}

export const client = createClient(config)