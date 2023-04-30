import React from 'react';
import styled from '@emotion/styled';
import { RichTextEditor } from '@mantine/tiptap';
import { BubbleMenu } from '@tiptap/react';
import transientOptions from '../../utils/transientOptions';

const EditorWrapper = styled(RichTextEditor, transientOptions)`
  border-radius: 10px;
  background-color: var(--body-bg-color);
  overflow: hidden;
  border: ${({ $isFocused }) => ($isFocused ? '1px solid var(--hover-font-color)' : 'undefined')};
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
  <EditorWrapper editor={editor} $isFocused={editor?.isFocused}>
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
