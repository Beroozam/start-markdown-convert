import './App.css'
import Markdown from 'markdown-to-jsx'
import {useEffect, useState} from "react";
import Code from "./code";

const preprocessMarkdown = (content) => {
  // Replace "1-" with "1." for ordered lists
  const processedContent_1 = content.replace(/(\d+)-/g, '$1.');
  const processedContent = processedContent_1.replace(/:/g, ':\n\n');
  return processedContent;
};

const OlTag = ({children, ...props}) => {
  return <ol {...props} style={{padding:"0"}}>
    {children}
  </ol>
}

const UlTag = ({children, ...props}) => {
  return <ul {...props} style={{padding:"0"}}>
    {children}
  </ul>
}

const LiTag = ({children, ...props}) => {
  return <li {...props} style={{paddingInlineStart:".375em"}}>
    {children}
  </li>
}

function App() {
  const [postContent,setPostContent] = useState<string>("")
  const processedContent = preprocessMarkdown(postContent);
  useEffect(()=>{
    import('./article.md')
        .then(res=>{
          fetch(res.default)
              .then(response=>response.text())
              .then(response=>{
                setPostContent(response)
              })
              .catch(error=>console.log(error))
        })
  },[])
  return (
    <div style={{display:"flex",justifyContent:"space-between",gap:"2em"}}>
      <div style={{maxWidth:"45%",overflow:"hidden"}}>
        <h1 style={{textDecoration:"underline"}}>The content of markdown(.md) file</h1>
        <pre>
          {postContent}
        </pre>
      </div>
      <div style={{display:"block",width:"5px",height:"2000px",backgroundColor:"#000",maxWidth:"45%"}}></div>
      <div>
        <h1 style={{textDecoration:"underline"}}>The converted content to JSX</h1>
        <Markdown
            options={{
              overrides: {
                Code:{
                  component: Code
                },
                ol:{
                  component: OlTag
                },
                ul:{
                  component: UlTag
                },
                li:{
                  component: LiTag
                }
              },
            }}
        >{processedContent}</Markdown>
      </div>
    </div>
  )
}

export default App
