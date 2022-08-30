import React, { useState, createRef, useRef, useImperativeHandle } from 'react';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import { EditorView } from '@codemirror/view';
import CodeMirror, { ReactCodeMirrorProps, ReactCodeMirrorRef } from '@uiw/react-codemirror';
import MarkdownPreview, { MarkdownPreviewProps, MarkdownPreviewRef } from '@uiw/react-markdown-preview';
import ToolBar, { IToolBarProps } from './components/ToolBar';
import { getCommands, getModeCommands } from './commands';
import { defaultTheme } from './theme';
import './index.less';

export * from './commands';

export const scrollerStyle = EditorView.theme({
  '&.cm-editor, & .cm-scroller': {
    borderBottomRightRadius: '3px',
    borderBottomLeftRadius: '3px',
  },
});

export interface IMarkdownEditor extends ReactCodeMirrorProps {
  className?: string;
  prefixCls?: string;
  /** The raw markdown that will be converted to html (**required**) */
  value?: string;
  /** Shows a preview that will be converted to html. */
  visible?: boolean;
  visibleEditor?: boolean;
  /** Option to hide the tool bar. */
  hideToolbar?: boolean;
  /** Override the default preview component */
  renderPreview?: (props: MarkdownPreviewProps, visible: boolean) => React.ReactNode;
  /** Tool display settings. */
  toolbars?: IToolBarProps['toolbars'];
  /** Tool display settings. */
  toolbarsMode?: IToolBarProps['toolbars'];
  /** [@uiw/react-markdown-preview](https://github.com/uiwjs/react-markdown-preview#options-props) options */
  previewProps?: MarkdownPreviewProps;
}

export interface ToolBarProps {
  editor?: React.RefObject<ReactCodeMirrorRef>;
  preview: React.RefObject<MarkdownPreviewRef>;
  container: React.RefObject<HTMLDivElement>;
  containerEditor: React.RefObject<HTMLDivElement>;
  editorProps: IMarkdownEditor;
}

export interface MarkdownEditorRef {
  editor: React.RefObject<ReactCodeMirrorRef>;
  preview?: React.RefObject<MarkdownPreviewRef> | null;
}

export default React.forwardRef<MarkdownEditorRef, IMarkdownEditor>(MarkdownEditor);

function MarkdownEditor(
  props: IMarkdownEditor,
  ref?: ((instance: MarkdownEditorRef) => void) | React.RefObject<MarkdownEditorRef> | null,
) {
  const {
    prefixCls = 'md-editor',
    className,
    onChange,
    toolbars = getCommands(),
    toolbarsMode = getModeCommands(),
    visible = true,
    renderPreview,
    visibleEditor = true,
    hideToolbar = true,
    previewProps = {},
    extensions = [],
    ...codemirrorProps
  } = props;
  const [value, setValue] = useState(props.value || '');
  const codeMirror = createRef<ReactCodeMirrorRef>();
  const previewContainer = useRef<MarkdownPreviewRef>(null);
  const container = useRef<HTMLDivElement>(null);
  const containerEditor = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    editor: codeMirror,
    preview: previewContainer,
  }));

  const toolBarProps: ToolBarProps = {
    editor: codeMirror,
    preview: previewContainer,
    container: container,
    containerEditor: containerEditor,
    editorProps: props,
  };
  const height = typeof codemirrorProps.height === 'number' ? `${codemirrorProps.height}px` : codemirrorProps.height;
  const extensionsData: IMarkdownEditor['extensions'] = [
    markdown({ base: markdownLanguage, codeLanguages: languages }),
    scrollerStyle,
    ...extensions,
  ];
  previewProps['className'] = `${prefixCls}-preview`;
  previewProps['source'] = value;
  return (
    <div className={`${prefixCls || ''} wmde-markdown-var ${className || ''}`} ref={container}>
      {hideToolbar && (
        <div>
          <ToolBar {...toolBarProps} toolbars={toolbarsMode} mode />
          <ToolBar {...toolBarProps} toolbars={toolbars} />
        </div>
      )}
      <div className={`${prefixCls}-content`} style={{ height: codemirrorProps.height }}>
        <div className={`${prefixCls}-content-editor`} ref={containerEditor}>
          {visibleEditor && (
            <CodeMirror
              theme={defaultTheme}
              {...codemirrorProps}
              extensions={extensionsData}
              height={height}
              ref={codeMirror}
              onChange={(value, viewUpdate) => {
                setValue(value);
                onChange && onChange(value, viewUpdate);
              }}
            />
          )}
        </div>
        {renderPreview ? (
          renderPreview(previewProps, !!visible)
        ) : (
          <MarkdownPreview {...previewProps} data-visible={!!visible} ref={previewContainer} />
        )}
      </div>
    </div>
  );
}
