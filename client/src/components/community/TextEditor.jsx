import React from 'react';
import { RichTextEditor } from '@mantine/tiptap';
import { useEditor, BubbleMenu } from '@tiptap/react';
import Highlight from '@tiptap/extension-highlight';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Placeholder from '@tiptap/extension-placeholder';
import styled from '@emotion/styled';

const EditorWrapper = styled(RichTextEditor)`
  border-radius: 10px;
  background-color: var(--body-bg-color);
  overflow: hidden;
`;

const EditorButtonGroup = styled(RichTextEditor.ControlsGroup)`
  button {
    background-color: var(--body-bg-color);
    color: var(--font-color);

    :hover {
      color: var(--hover-font-color);
    }
  }
`;

const TextEditor = ({ placeholder, setValue }) => {
  const editor = useEditor({
    extensions: [StarterKit, Underline, Highlight, Placeholder.configure({ placeholder })],
    content: '',
    onUpdate: ({ editor }) => setValue(editor.getHTML()),
  });

  return (
    <EditorWrapper editor={editor}>
      <RichTextEditor.Toolbar bg="var(--body-bg-color)">
        {editor && (
          <BubbleMenu editor={editor}>
            <EditorButtonGroup>
              <RichTextEditor.Bold />
              <RichTextEditor.Italic />
              <RichTextEditor.Link />
            </EditorButtonGroup>
          </BubbleMenu>
        )}
        <EditorButtonGroup>
          <RichTextEditor.Bold />
          <RichTextEditor.Italic />
          <RichTextEditor.Underline />
          <RichTextEditor.Strikethrough />
          <RichTextEditor.Highlight />
          <RichTextEditor.ClearFormatting />
        </EditorButtonGroup>
      </RichTextEditor.Toolbar>
      <RichTextEditor.Content bg="var(--body-bg-color)" c="var(--font-color)" />
    </EditorWrapper>
  );
};

export default TextEditor;
