import './App.css'
import Markdown from 'markdown-to-jsx'
import {useEffect, useState} from "react";

function App() {
  const [postContent,setPostContent] = useState<any>()
  useEffect(()=>{
    import('./article.md')
        .then(res=>{
          fetch(res.default)
              .then(response=>response.text())
              .then(response=>{
                console.log("response",response)
                setPostContent(response)
              })
              .catch(error=>console.log(error))
        })
  },[])
  return (
    <>
      <Markdown>{postContent}</Markdown>
    </>
  )
}

export default App
