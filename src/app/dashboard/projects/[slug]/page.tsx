import { getProjectBySlug } from "@/actions/project";
import ViewProject from "@/components/dashboard/view-project";

interface PageParams {
  params: {
    slug: string;
  };
}
export default async function View({ params }: PageParams) {
  const project = await getProjectBySlug(params.slug);

  return <ViewProject project={project} />;
}
