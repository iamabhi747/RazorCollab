import React, { useState } from 'react'
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/mode/markdown/markdown'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/dracula.css'
import 'codemirror/addon/edit/closebrackets'
import 'codemirror/addon/edit/closetag'

const Editor = () => {
    const [value, setValue] = useState()
  return (
    <div>
      <CodeMirror className='text-2xl'
        value = {value}
        options={{
          mode: 'markdown',
          theme: 'dracula',
          autoCloseBrackets: true, 
          autoCloseTags: true,
          lineNumbers: true
        }}
        onChange={(editor, data, value) => {

        }}
      />
    </div>
  )
}

export default Editor
