# EditorJs Data Parser

## Easily convert json data from editorjs to html elements.

[![npm](https://img.shields.io/npm/v/editorjs-data-parser)](https://www.npmjs.com/package/editorjs-data-parser)
[![npm](https://img.shields.io/npm/l/editorjs-data-parser)](https://www.npmjs.com/package/editorjs-data-parser)
[![npm](https://img.shields.io/npm/dm/editorjs-data-parser)]()
[![github](https://img.shields.io/github/stars/salimzade/editorjs-data-parser?style=social)](https://github.com/salimzade/editorjs-data-parser)

This fork was made to work with my static blog engine and Bootstrap 5.

# Installaton
 `npm i editorjs-data-parser`

# Suppoted tools

- :white_check_mark: checklist
- :white_check_mark: embed
- :white_check_mark: head
- :white_check_mark: link
- :white_check_mark: list
- :white_check_mark: marker
- :white_check_mark: image
- :white_check_mark: paragraph
- :white_check_mark: quote
- :white_check_mark: raw
- :white_check_mark: table
- :white_check_mark: code
- :white_check_mark: warning
- :white_check_mark: delimeter

# Usage example


```javascript
import EditorJS from "@editorjs/editorjs";
import CheckList from "@editorjs/checklist";
import Code from "@editorjs/code";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Embed from "@editorjs/embed";
import Delimiter from "@editorjs/delimiter";
import Marker from "@editorjs/marker";
import Image from "@editorjs/image";
import Raw from "@editorjs/raw";
import Table from "@editorjs/table";
import Warning from "@editorjs/warning";
import { editorJsParser } from "editorjs-data-parser";

const editor = new EditorJS({
  tools: {
    header: {
      class: Header,
      inlineToolbar: true
    },
    list: {
      class: List,
      inlineToolbar: true
    },
    checklist: CheckList,
    delimiter: Delimiter,
    marker: Marker,
    embed: {
      class: Embed,
      inlineToolbar: false,
      config: {
        services: {
          youtube: true,
          coub: true
        }
      }
    },
    image: {
      class: Image,
      config: {
        endpoints: {
          byFile: "http://localhost:8008/uploadFile", // Your backend file uploader endpoint
          byUrl: "http://localhost:8008/fetchUrl" // Your endpoint that provides uploading by Url
        }
      }
    },
    checkList: CheckList,
    code: Code,
    raw: Raw,
    table: Table,
    warning: Warning,
  }
});

let btnConvert = document.getElementById("btnConvert");
btnConvert.addEventListener("click", () => {
  editor.save().then((outputData) => {
    let result = eonasdan.parser(outputData.blocks);
    console.log(result);
  });
});
```
<br/>

# Install supported tools

`npm i --save @editorjs/checklist`

`npm i --save @editorjs/code`

`npm i --save @editorjs/header`

`npm i --save @editorjs/list`

`npm i --save @editorjs/embed`

`npm i --save @editorjs/delimiter`

`npm i --save @editorjs/marker`

`npm i --save @editorjs/marker`

`npm i --save @editorjs/image`

`npm i --save @editorjs/raw`

`npm i --save @editorjs/table`

`npm i --save @editorjs/warning`
