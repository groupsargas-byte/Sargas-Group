import { useEffect } from "react";
import { setPageSeo } from "@/lib/seo.js";

export function usePageSeo({
  title,
  description,
  path = "/",
  image,
  noindex = false,
  includeOrganizationSchema = false,
  keywords,
}) {
  useEffect(() => {
    setPageSeo({
      title,
      description,
      path,
      image,
      noindex,
      includeOrganizationSchema,
      keywords,
    });
  }, [title, description, path, image, noindex, includeOrganizationSchema, keywords]);
}
