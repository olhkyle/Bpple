import React from 'react';
import { useController } from 'react-hook-form';
import useTextEditor from '../../hooks/useTextEditor';
import { TextEditor } from '.';

/**
 * isValid가 업데이트 되도록 TextEditor를 controlled로 사용한다.
 * 따로 컴포넌트를 뺼지 말지 고민 (QuestionForm 컴포넌트는 onSubmit 로직에만 집중)
 */

const ContentEditor = ({ name, control }) => {
  const {
    field: { value, onChange },
  } = useController({ name, control });

  const editor = useTextEditor({
    initContent: value,
    placeholder: '질문이 무엇입니까?',
    option: {
      onUpdate: ({ editor }) => onChange(editor.getHTML()),
    },
  });

  return <TextEditor editor={editor} />;
};

export default ContentEditor;
