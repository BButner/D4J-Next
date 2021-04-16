import { CodePreview } from 'lib/getting-started'
import { FunctionComponent, useEffect, useRef } from 'react'
import Prism from 'prismjs'
import { motion } from 'framer-motion'

type CodeExampleProps = {
  codePreview: CodePreview;
}

export const CodeExample: FunctionComponent<CodeExampleProps> = ({ codePreview }) => {
  const codeRef = useRef(null)

  const codeVariants = {
    hidden: { x: -10, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  }

  const highlight = () => {
    Prism.highlightAll()
  }

  useEffect(() => {
    if (codeRef && codeRef.current) highlight()
  })

  return (
    <motion.pre
      variants={codeVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      ref={codeRef}
    >
      <code className={`language-${codePreview.language}`}>{codePreview.text}</code>
    </motion.pre>
  )
}