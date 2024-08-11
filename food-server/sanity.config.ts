import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { dataset, projectId } from "./evironmnent";

export default defineConfig({
  name: "default",
  title: "food-server",
  projectId,
  dataset,
  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
