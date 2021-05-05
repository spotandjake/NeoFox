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
    pattern:/(?:\[(.*?)\]\((.*?)\))/,
    inside:{
      Type: {
        pattern:/(?<=\[)([^\[\]]*)/,
      },
      Url: {
        pattern:/((?<=\()|(?<=\(<))([^(<>)]*)/,
      }
    }
  },
  blockquote:{
    pattern:/^> (.*)$/m,
    inside: {
      pattern: /^>/
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
        pattern:/^[^\n]([^\s]*)\n/,
      }
    }
  },
  bold:{
    pattern:/(?<!\*)\*\*([^*]+)\*\*/g,
    inside:{
      punctuation:/^\*\*|\*\*$/
    }
  },
  strikethrough:{
    pattern:/(?<!\~)\~\~([^*]+)\~\~/g,
    inside:{
      punctuation:/^\~\~|\~\~$/
    }
  },
  underline:{
    pattern:/(?<!\_)\_\_([^_]+)\_\_/g,
    inside:{
      punctuation:/^\_\_|\_\_$/
    }
  },
  italic:{
    pattern:/(?<![*_])[*_]([^*_]+)[*_]/,
    inside:{
      punctuation:/^[*_]|[*_]$/
    }
  },
  h1: {
    pattern:/^# (.*$)/m,
    inside: {
      pattern: /^# /
    },
  },
  h2: {
    pattern:/^## (.*$)/m,
    inside: {
      pattern: /^## /
    },
  },
  h3: {
    pattern:/^### (.*$)/m,
    inside: {
      pattern: /^### /
    },
  }
});

export default Prism.languages.markdown;