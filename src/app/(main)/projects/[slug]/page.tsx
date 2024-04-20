import { getProjectBySlug } from "@/actions/project";
import ViewProject from "@/components/view-project";
import { Metadata } from "next";

interface PageParams {
  params: {
    slug: string;
  };
}

export const generateMetadata = async ({
  params,
}: PageParams): Promise<Metadata> => {
  const post = await getProjectBySlug(params.slug);
  return {
    title: post.title + " - Ayaase Atalier",
    description: post.summary,
  };
};

export default async function ProjectBySlugPage({ params }: PageParams) {
  const project = await getProjectBySlug(params.slug);

  return <ViewProject project={project} />;
}
