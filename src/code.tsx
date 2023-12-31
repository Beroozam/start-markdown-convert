import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import {materialDark} from "react-syntax-highlighter/dist/cjs/styles/prism";

const Code = ({children,language}) => {
  return (
      <div className={`code`}>
        <SyntaxHighlighter
            language={language}
            style={materialDark}
        >
          {children}
        </SyntaxHighlighter>
      </div>
  );
};

export default Code;