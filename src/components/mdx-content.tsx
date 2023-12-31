"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import React from "react";

interface ProjectContentProps {
  content: MDXRemoteSerializeResult;
}

export default function MDXContent({ content }: ProjectContentProps) {
  return (
    <div className=" justify-center prose prose-stone max-w-full prose-sm mt-10 lg:text-lg text-base leading-relaxed">
      <MDXRemote {...content} />
    </div>
  );
}
