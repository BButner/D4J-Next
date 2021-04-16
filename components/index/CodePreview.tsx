import { FunctionComponent, useEffect, useRef, useState } from 'react'
import Prism from 'prismjs'
import { getCodePreviews, CodePreview } from 'lib/getting-started'
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript'
import axios from 'axios'

export const CodePreviewTable: FunctionComponent = () => {
  const codeRef = useRef(null)
  const code: CodePreview[] = getCodePreviews('1.1.1')
  const [codePreviews, setCodePreviews] = useState<CodePreview[]>([])
  const [selectedLanguage, setSelectedLanguage] = useState<string>('')

  useEffect(() => {
    axios.get('https://api.discord4j.com/versions')
      .then(data => {
        console.log(data)
      })
  }, [])

  const highlight = () => {
    if (codeRef && codeRef.current) Prism.highlightAll()
  }

  return (
    <div className="p-3 rounded-lg bg-white w-full">
      <div className="pb-2">
        <ul className="flex justify-center space-x-4 list-none">
          {code.map(code => {
            return (
              <li className="h-full"> 
                <button>
                  {code.title}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
      <pre>
      </pre>
    </div>
  )
}