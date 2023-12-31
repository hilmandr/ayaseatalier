import { getProjectsBySlug } from "@/services/project";
import Container from "@/components/container";
import { Metadata } from "next";
import { serialize } from "next-mdx-remote/serialize";
import MDXContent from "@/components/mdx-content";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import { format } from "date-fns";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";

interface PageParams {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const project = getProjectsBySlug(params.slug);

  return {
    title: project.title,
  };
}

export default async function ProjectPage({ params }: PageParams) {
  const project = getProjectsBySlug(params.slug);

  const content = await serialize(project.content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        // @ts-ignore
        rehypeHighlight,
      ],
    },
  });

  return (
    <>
      <Header />

      <div className=" w-full flex items-center justify-center">
        <div className=" bg-black w-full h-[700px] absolute z-10 bg-opacity-50"></div>

        <div className=" container mx-auto px-5 lg:px-8 w-full h-full absolute z-20">
          <div className=" flex grid grid-cols-5 w-full h-full items-center text-white">
            <div className=" flex grid gap-y-2 col-span-3">
              <h1 className=" lg:text-6xl md:text-4xl text-4xl font-semibold lg:leading-tight">
                {project.title}
              </h1>
              <h2 className=" lg:text-lg text-base font-normal">
                {project.summary}
              </h2>
            </div>
          </div>
        </div>
        <div
          className=" bg-cover bg-center w-full h-[700px] z-0 relative"
          style={{ backgroundImage: `url(${project.thumbnail})` }}
        ></div>
      </div>
      <Container>
        <div className=" xl:px-72 lg:px-48 md:px-32">
          <MDXContent content={content} />
        </div>
      </Container>
      <Footer />
    </>
  );
}
