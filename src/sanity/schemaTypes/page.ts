import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
  name: "page",
  type: "document",
  title: "Page",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Page Title",
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Page Description",
    }),
    defineField({
      name: "sections",
      type: "array",
      title: "Sections",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "sectionId", type: "string", title: "Section ID" }),
            defineField({ name: "title", type: "string", title: "Section Title" }),
            defineField({ name: "description", type: "text", title: "Section Description" }),
            defineField({ name: "image", type: "image", title: "Section Image" }),
            defineField({
              name: "items",
              type: "array",
              title: "Items",
              of: [
                defineArrayMember({
                  type: "object",
                  fields: [
                    defineField({ name: "itemTitle", type: "string", title: "Item Title" }),
                    defineField({ name: "itemDescription", type: "text", title: "Item Description" }),
                    defineField({ name: "itemImage", type: "image", title: "Item Image" }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
});
