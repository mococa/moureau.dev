/* ---------- External ---------- */
import Nullstack from 'nullstack';

/* ---------- Styles ---------- */
import './vscode-dark.css';
import './styles.css';

/* ---------- Interfaces ---------- */
interface Props {
  onChange: (md: string) => void;
  defaultValue?: string;
  getEditor: (editor: any) => void;
}

export class HyperMd extends Nullstack<Props> {
  /* ---------- Refs ---------- */
  editor_ref: HTMLTextAreaElement;

  /* ---------- Handlers ---------- */
  async handleSetupMarkdown({ onChange, defaultValue, getEditor }: Props) {
    require('codemirror/mode/htmlmixed/htmlmixed');
    require('codemirror/mode/markdown/markdown');
    require('codemirror/addon/display/placeholder');

    const { fromTextArea } = await import('hypermd');

    const editor = fromTextArea(this.editor_ref, {
      mode: 'hypermd',
      theme: 'vscode-dark',
      lineNumbers: false,
      fixedGutter: false,
      gutters: [],
      hmdHideToken: true,
      hmdCursorDebounce: true,
      hmdPaste: true,
      hmdClick: false,
      hmdHover: true,
      hmdTableAlign: true,
      placeholder: 'Enter content...',
    });

    editor.on('change', () => {
      onChange(editor.getValue());
    });

    if (defaultValue) editor.getDoc().setValue(defaultValue);

    getEditor(editor);
  }

  async hydrate({ onChange, defaultValue, getEditor }: Props) {
    this.handleSetupMarkdown({ onChange, defaultValue, getEditor });
  }

  render() {
    return (
      <div class="hyper-md-container">
        <textarea ref={this.editor_ref} />
      </div>
    );
  }
}
