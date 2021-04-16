import { FunctionComponent, useEffect, useState } from 'react'
import { getCodePreviews, CodePreview } from 'lib/getting-started'
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import { CodeExample } from './CodeExample'
import 'prismjs/components/prism-groovy'
import 'prismjs/components/prism-java'

export const CodePreviewTable: FunctionComponent = () => {
  const [codePreviews, setCodePreviews] = useState<CodePreview[]>(getCodePreviews('1.1.1'))
  const [selectedLanguage, setSelectedLanguage] = useState<string>('')
  const [currentHeight, setCurrentHeight] = useState<number>(0)

  const updateSelectedLanguage = (language: string, lines: number): void => {
    setSelectedLanguage(language)
    setCurrentHeight(lines)
  }

  return (
    <div className="p-3 rounded-lg bg-white md:w-[600px] xl:w-[750px] m-auto shadow-xl">
      {/* Language Selection */}
      <div className="pb-2 border-b border-gray-300">
        <AnimateSharedLayout>
          <ul className="flex justify-center space-x-4 list-none">
            {codePreviews.map(code => {
              return (
                <li className="h-full relative" key={code.title}> 
                  <button
                    onClick={(): void => updateSelectedLanguage(code.title, code.text.match(/\n/g).length)}
                    className="focus:outline-none w-16 focus:ring ring-gray-200 transition duration-200"
                  >
                    {code.title}
                  </button>
                  {selectedLanguage === code.title && <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 w-full h-0.5 bg-blurple"
                    initial={false}
                  />}
                </li>
              )
            })}
          </ul>
        </AnimateSharedLayout>
      </div>

      {/* Code Preview */}
      <div
        className="transition-all duration-200 text-sm"
        style={{
          height: currentHeight * 1.5 * 18 + 'px',
        }}
      >
        <AnimatePresence>
          {codePreviews.map(code => {
            return (
              <div key={code.title}>
                {selectedLanguage === code.title && <CodeExample codePreview={code} />}
              </div>
            )
          })}
        </AnimatePresence>
      </div>
    </div>
  )
}