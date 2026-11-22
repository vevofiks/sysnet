export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "2caq43ho";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

export const isSanityConfigured = Boolean(
  projectId && projectId !== "placeholder" && projectId !== "your_project_id_here"
);
