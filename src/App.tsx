import './App.css'
import Markdown from 'markdown-to-jsx'
// import {useEffect, useState} from "react";
import Code from "./code";

const markdownFile = `
# Useful JavaScript Code Snippets
## Useful JavaScript Code Snippets2
### Useful JavaScript Code Snippets3
#### Useful JavaScript Code Snippets4
##### Useful JavaScript Code Snippets5
###### Useful JavaScript Code Snippets6

\`**\` - Item 1\\n- Item 2\\n- Item 3\\n- Item 4 \`**\`
- Item 1
- Item 2
- Item 3
- Item 4


**React Component for Rendering Markdown**: **\`markdown-to-jsx\`** is a React component that converts Markdown content into React elements. It doesn't support embedding React components within the Markdown content itself.


1- **Sort an Array**

<Code language="javascript">
//strings
const names = ["Seema", "Rekha", "Jaya"];
names.sort();
//['Jaya', 'Rekha', 'Seema' ]

//Numbers
const numbers = [101, 8, 87];
numbers.sort((a, b) => {
return a - b;
});
//[ 8, 87, 101 ]
</Code>

2- *Select a random element*

<Code language="javascript">
const items = ["Ball", "Bat", "Cup"]
const randomIndex = Math.floor(Math.random()*items.length)
items[randomIndex]
</Code>

3. Reverse a string

<Code language="javascript">
function reverseString(string) {
  return string.split(" ").reverse().join(" ")
}

revereseString("Random String")
</Code>
`

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
  // const [postContent,setPostContent] = useState<string>("")
  const processedContent = preprocessMarkdown(markdownFile);
  // useEffect(()=>{
  //   import('./article.md')
  //       .then(res=>{
  //         fetch(res.default)
  //             .then(response=>response.text())
  //             .then(response=>{
  //               setPostContent(response)
  //             })
  //             .catch(error=>console.log(error))
  //       })
  // },[])
  return (
    <div style={{display:"flex",justifyContent:"space-between",gap:"2em"}}>
      <div style={{maxWidth:"45%",overflow:"hidden"}}>
        <h1 style={{textDecoration:"underline"}}>The content of markdown(.md) file</h1>
        <pre>
          {markdownFile}
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
