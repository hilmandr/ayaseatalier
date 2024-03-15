"use client";
import React, { useState } from "react";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/js/plugins.pkgd.min.js";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";
import "froala-editor/js/plugins/image.min.js";
import { Project } from "@/db/schema";

interface PageParams {
  project: Project;
}
export default function ViewProject({ project }: PageParams) {
  return (
    <>
      <div>
        <h1>{project.title}</h1>
        <div>
          <FroalaEditorView model={project.content} />
        </div>
      </div>
    </>
  );
}
