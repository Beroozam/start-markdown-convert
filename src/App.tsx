import './App.css'
import Markdown from 'markdown-to-jsx'
import {useEffect, useState} from "react";
import Code from "./code";

function App() {
  const [postContent,setPostContent] = useState<string>("")
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
    <>
      <Markdown
        options={{
          overrides: {
            Code:{
              component: Code
            }
          },
        }}
      >{postContent}</Markdown>
    </>
  )
}

export default App
