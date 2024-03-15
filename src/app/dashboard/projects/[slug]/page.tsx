import { GetProjectBySlug } from "@/actions/project";
import React, { useState } from "react";
import ViewProject from "@/components/dashboard/view-project";

interface PageParams {
  params: {
    slug: string;
  };
}
export default async function View({ params }: PageParams) {
  const project = await GetProjectBySlug(params.slug);

  return (
    <>
      <div>
        <ViewProject project={project} />
      </div>
    </>
  );
}
