import './styles.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';

marked.setOptions({
    breaks: true,
  });

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
return `<a target="_blank" href="${href}">${text}` + '</a>';
}

//main react component
class Markdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: sample
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({
            input: e.target.value
        })
    }
    render() {
        return (
            <div id = 'markdown'>
                <h1>Markdown Previewer</h1>
                <h2 id = 'edLabel'>Editor</h2>
                <textarea id = 'editor' value = {this.state.input} onChange = {this.handleChange}/>
                <h2 id = 'prevLabel'>Preview</h2>
                <div id='preview' dangerouslySetInnerHTML={{__html: marked(this.state.input, { renderer: renderer })}} />
            </div>
        )
    }
}

const rootDiv = document.getElementById('root');

const sample = `# Header 
## Sub-header

[freeCodeCamp Project Page](https://learn.freecodecamp.org/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer)

\`console.log('inline code')\`

\`\`\`
// this is an example of a code block

console.log('code block')
\`\`\`

- List item 1
- List item 2
- List item 3

> "This is an example of 
> a blockquote"
> ~ **Jake**

![Puppy Cat](https://vignette.wikia.nocookie.net/beeandpuppycat/images/d/db/Bpclineup-1p.png/revision/latest?cb=20181024033201)

`

ReactDOM.render(<Markdown />, rootDiv);