"use client";

import { useEffect, useRef } from "react";
import { useClient } from "sanity";
import type { LayoutProps } from "sanity";
import {
  homePageDefaults,
  aboutPageDefaults,
  servicesPageDefaults,
  projectsPageDefaults,
  contactPageDefaults,
  defaultServices,
  defaultProjects,
} from "../defaults";

export function StudioAutoInit(props: LayoutProps) {
  const client = useClient({ apiVersion: "2024-01-01" });
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    async function initPages() {
      try {
        const singletons = [
          { id: "homePage", type: "homePage", defaults: homePageDefaults },
          { id: "aboutPage", type: "aboutPage", defaults: aboutPageDefaults },
          { id: "servicesPage", type: "servicesPage", defaults: servicesPageDefaults },
          { id: "projectsPage", type: "projectsPage", defaults: projectsPageDefaults },
          { id: "contactPage", type: "contactPage", defaults: contactPageDefaults },
        ];

        for (const page of singletons) {
          // Check draft and published status
          const draft = await client.getDocument(`drafts.${page.id}`);
          const published = await client.getDocument(page.id);

          if (!published) {
            if (draft) {
              // Publish the draft by creating the published document with draft data!
              const { _id, _rev, _updatedAt, ...data } = draft;
              await client.createOrReplace({ ...data, _id: page.id, _type: page.type } as any);
              await client.delete(`drafts.${page.id}`).catch(() => {});
            } else {
              // Create and publish with full bilingual defaults
              await client.createIfNotExists({ _id: page.id, _type: page.type, ...page.defaults } as any);
            }
          } else {
            // Ensure published document has all default fields populated
            await client.patch(page.id).setIfMissing(page.defaults).commit().catch(() => {});
            if (draft) {
              await client.patch(`drafts.${page.id}`).setIfMissing(page.defaults).commit().catch(() => {});
            }
          }
        }

        // Auto-seed the 15 services if not yet present
        for (const s of defaultServices) {
          await client.createIfNotExists(s as any);
        }

        // Auto-seed the 4 projects if not yet present
        for (const p of defaultProjects) {
          await client.createIfNotExists(p as any);
        }
      } catch (err) {
        console.warn("Notice: Studio auto-init check:", err);
      }
    }

    void initPages();
  }, [client]);

  return props.renderDefault(props);
}
