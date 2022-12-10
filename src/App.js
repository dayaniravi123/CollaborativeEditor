import Editor from "@monaco-editor/react";
import * as Y from 'yjs';
import { WebsocketProvider } from 'y-websocket';
import { MonacoBinding } from 'y-monaco';
import * as monaco from 'monaco-editor';



function App() {
  const ydoc = new Y.Doc()
  const provider = new WebsocketProvider('wss://demos.yjs.dev', 'monaco-demo', ydoc)
  const type = ydoc.getText('monaco')
  
  const editor = monaco.editor.create((document.getElementById('myeditor')), {
    defaultValue: "// Welcome to My Editor",
    height: '90vh',
    language: 'javascript',
    theme: 'vs-dark',
    minimap: {
      enabled: false
    }
  })
  const monacoBinding = new MonacoBinding(type, (editor.getModel()), new Set([editor]), provider.awareness)

}

export default App;
