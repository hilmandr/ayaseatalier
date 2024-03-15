import { GetProjectBySlug } from "@/actions/project";
import React from "react";
import ViewProject from "@/components/view-project";
interface PageParams {
  params: {
    slug: string;
  };
}

export default async function ProjectPage({ params }: PageParams) {
  const project = await GetProjectBySlug(params.slug);

  return (
    <>
      <div>
        <ViewProject project={project} />
      </div>
    </>
  );
}
