"use client";

import React from "react";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/js/plugins/image.min.js";
import FroalaEditor from "react-froala-wysiwyg";
import dynamic from "next/dynamic";

interface FroalaEditorProps {
  setValue: (value: string) => void;
  value?: string;
}

const ContentEditor = ({ value, setValue }: FroalaEditorProps) => {
  // @ts-ignore
  return (
    <>
      <div>
        <FroalaEditor
          tag="textarea"
          model={value}
          onModelChange={setValue}
          config={{
            placeholderText: "Write your project here...",
            events: {
              "image.beforeUpload": function (files: any) {
                var editor = this;

                if (files.length) {
                  // @ts-ignore
                  var reader = new FileReader();
                  // @ts-ignore
                  reader.onload = function (e) {
                    // @ts-ignore
                    var result = e.target.result;
                    // @ts-ignore
                    editor.image.insert(result, null, null, editor.image.get());
                  };
                  // Read image as base64.
                  reader.readAsDataURL(files[0]);
                }
                // @ts-ignore
                editor.popups.hideAll();
                // Stop default upload chain.
                return false;
              },
            },
          }}
        />
      </div>
    </>
  );
};

export default ContentEditor;
