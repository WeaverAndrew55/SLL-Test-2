import { type SchemaTypeDefinition } from 'sanity';
import page from "./page"; // Import the page schema

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    page, // Add the page schema to the types array
  ] // Add the closing curly brace here
};