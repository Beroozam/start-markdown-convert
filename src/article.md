# Useful JavaScript Code Snippets
## Useful JavaScript Code Snippets2
### Useful JavaScript Code Snippets3
#### Useful JavaScript Code Snippets4
##### Useful JavaScript Code Snippets5
###### Useful JavaScript Code Snippets6

`**` - Item 1\n- Item 2\n- Item 3\n- Item 4 `**`
- Item 1
- Item 2
- Item 3
- Item 4


**React Component for Rendering Markdown**: **`markdown-to-jsx`** is a React component that converts Markdown content into React elements. It doesn't support embedding React components within the Markdown content itself.


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