import React from 'react';
import { RichTextEditor } from '@mantine/tiptap';
import { BubbleMenu } from '@tiptap/react';
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

const TextEditor = ({ editor, useBubble = true }) => (
  <EditorWrapper editor={editor}>
    <RichTextEditor.Toolbar bg="var(--body-bg-color)">
      {useBubble && editor && (
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

export default TextEditor;
