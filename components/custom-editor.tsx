/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useRef } from 'react';

type EditorProps = {
    value: string;
    onChange: (data: string) => void;
};

const CustomEditor = ({ value, onChange }: EditorProps) => {
    const editorRef = useRef<HTMLDivElement>(null);
    const editorInstance = useRef<any>(null);

    useEffect(() => {
        if (!editorRef.current) return;

        let active = true;

        // Dynamically import the classic editor build
        import('@ckeditor/ckeditor5-build-classic').then((module) => {
            if (!active) return;
            const ClassicEditor = module.default || module;
            
            ClassicEditor.create(editorRef.current)
                .then((editor: any) => {
                    editorInstance.current = editor;
                    
                    // Set initial value
                    editor.setData(value || "");

                    // Listen to changes
                    editor.model.document.on('change:data', () => {
                        const data = editor.getData();
                        onChange(data);
                    });
                })
                .catch((error: any) => {
                    console.error("CKEditor initialization failed:", error);
                });
        });

        return () => {
            active = false;
            if (editorInstance.current) {
                editorInstance.current.destroy()
                    .catch((err: any) => console.log("CKEditor destroy error:", err));
            }
        };
    }, []);

    // Sync value changes from parent if editor is already initialized
    useEffect(() => {
        if (editorInstance.current && value !== editorInstance.current.getData()) {
            editorInstance.current.setData(value || "");
        }
    }, [value]);

    return (
        <div className="prose-editor w-full min-h-[300px] bg-white">
            <div ref={editorRef} className="min-h-[250px] text-slate-800" />
        </div>
    );
};

export default CustomEditor;
