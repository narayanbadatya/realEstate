import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectid = import.meta.env.VITE_PROJECT_ID;
// Initialize the Sanity client
const client = createClient({
  projectId: projectid,  // Replace with your project ID
  dataset: 'production',
  apiVersion: '2023-01-01',      // Use latest date
  useCdn: true,
});

// Helper function to get image URLs
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;
