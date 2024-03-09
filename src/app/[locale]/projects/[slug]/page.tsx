import Container from "@/components/container";
import Link from "next/link";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import MDXContent from "@/components/mdx-content";
import { getProjectsBySlug } from "@/services/project";
import { Metadata } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { RxCaretRight } from "react-icons/rx";

interface PageParams {
  params: {
    slug: string;
  };
}

export const generateMetadata = ({ params }: PageParams): Metadata => {
  const post = getProjectsBySlug(params.slug);
  return {
    title: post.title + " - Ayaase Atalier",
    description: post.summary,
  };
};

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
      <div className=" w-full flex items-center justify-center">
        <div className=" bg-black w-full h-[700px] absolute z-10 bg-opacity-50"></div>

        <div className=" container mx-auto px-5 lg:px-8 w-full h-full absolute z-20">
          <div className=" flex grid grid-cols-5 w-full h-full items-center text-white">
            <div className=" flex grid gap-y-2 lg:col-span-3 col-span-5">
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
        <div className=" xl:px-[350px] lg:px-48 md:px-32 pt-24 space-y-5">
          <div className=" flex w-full items-center">
            <Link href="/">
              <p className=" font-bold">Home </p>
            </Link>
            <RxCaretRight />
            <Link href="/projects">
              <p className=" font-bold">Projects</p>
            </Link>
            <RxCaretRight />
            <p>{project.title}</p>
          </div>
          <MDXContent content={content} />
        </div>
      </Container>
    </>
  );
}
