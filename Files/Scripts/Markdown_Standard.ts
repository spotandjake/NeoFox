import Prism from 'prismjs';
// Define language if needed
Prism.languages.markdown=Prism.languages.extend("markup",{});
Prism.languages.insertBefore("markdown","prolog", {
  "url-reference":{
    pattern:/(?:!\[(.*?)\]\((.*?)\))/,
    inside:{
      Type: {
        pattern:/(?<=\[)([^\[\]]*)/,
      },
      Url: {
        pattern:/((?<=\()|(?<=\(<))([^(<>)]+)/,
      }
    }
  },
  url:{
    pattern:/(?:\[(.*?)\]\((.*?)\))|<[^\n<>]*>/,
    inside:{
      Type: {
        pattern:/(?<=\[)([^\[\]]*)/,
      },
      Url: {
        pattern:/((?<=\()|(?<=\(<))([^(<>)]*)|(?!<)[^\n<>]+(?=>)/,
      }
    }
  },
  blockquote:{
    pattern:/^> (.*)$/m,
    inside: {
      pattern: /^> /
    },
  },
  code:{
    pattern:/(?<!`)`[^`\n]+`/m,
    inside:{
      punctuation: /(^`|`$)/
    }
  },
  code_block: {
    pattern:/```([\s\S]*?)```/m,
    inside:{
      punctuation: {
        pattern: /^\`\`\`|\`\`\`/
      },
      language: {
        pattern:/^[^\s\n]+/,
      }
    }
  },
  bold:{
    pattern:/(?<!\*)\*\*([^*\n]+)\*\*/g,
    inside:{
      punctuation:/^\*\*|\*\*$/
    }
  },
  strikethrough:{
    pattern:/(?<!\~)\~\~([^*\n]+)\~\~/g,
    inside:{
      punctuation:/^\~\~|\~\~$/
    }
  },
  underline:{
    pattern:/(?<!\_)\_\_([^_\n]+)\_\_/g,
    inside:{
      punctuation:/^\_\_|\_\_$/
    }
  },
  italic:{
    pattern:/(?<![*_])[*_]([^*_\n]+)[*_]/,
    inside:{
      punctuation:/^[*_]|[*_]$/
    }
  },
  bolditalic: {
    pattern:/\*\*\*([^*]+)\*\*\*/g,
    inside:{
      punctuation:/^\*\*\*|\*\*\*$/
    }
  },
  h1: {
    pattern:/^# (.*$)|([^\n]+)\n==+/m,
    inside: {
      pattern: /^# |(?=.*)\n==+/
    },
  },
  h2: {
    pattern:/^## (.*$)|([^\n]+)\n--+/m,
    inside: {
      pattern: /^## |(?=.*)\n--+/
    },
  },
  h3: {
    pattern:/^### (.*$)/m,
    inside: {
      pattern: /^### /
    },
  },
  h4: {
    pattern:/^#### (.*$)/m,
    inside: {
      pattern: /^#### /
    },
  },
  h5: {
    pattern:/^##### (.*$)/m,
    inside: {
      pattern: /^##### /
    },
  },
  h6: {
    pattern:/^###### (.*$)/m,
    inside: {
      pattern: /^###### /
    },
  },
  channel:{
    pattern: /#([^\s]+)/,
    inside: {
      pattern: /^#/
    },
  },
  orderedlist: {
    pattern: /^(\d\.(.*)\n(?!=\d\.)|(?!=\d\.)\s*\d\.(.*))+$/,
    inside: {
      pattern: /^\d\.\s/gm
    }
  },
  unorderedlist: {
    pattern: /^([\+\*\-] (.*)\n(?!=[\+\*\-])|(?!=[\+\*\-])\s*[\+\*\-](.*))+$/,
    inside: {
      pattern: /^[\+\*\-]\s/gm
    }
  },
  horizontalRule: {
    pattern: /\n\n---+\n\n|\n\n===+\n\n/
  }
});

export default Prism.languages.markdown;