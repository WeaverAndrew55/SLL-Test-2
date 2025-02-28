// sanity/sanity.config.js
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import schemaTypes from './schemas'; // Import your schema types

export default defineConfig({
  name: 'default',
  title: 'Your Project Title', // Replace with your project title
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Corrected project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // Corrected dataset
  plugins: [structureTool()],
  schema: { // Corrected schema object
    types: schemaTypes,
  },
});