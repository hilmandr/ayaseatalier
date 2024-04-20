import { getProjectBySlug } from "@/actions/project";
import EditProjectForm from "@/components/dashboard/edit-project";

interface PageParams {
  params: {
    slug: string;
  };
}
export default async function EditProject({ params }: PageParams) {
  const project = await getProjectBySlug(params.slug);
  return (
    <>
      <EditProjectForm project={project} />
    </>
  );
}
