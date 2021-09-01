# [Ast-ParentChild](https://www.npmjs.com/package/@ffalpha)


Ast-Parent-Child is a CLI tool to generate the [AST](https://www.digitalocean.com/community/tutorials/js-traversing-ast) of a given JavaScript file, and then it will output a json file which has a parent-child relationship format for the AST rather than outputting a ordinary AST JSON format.

Ast-ParentChild uses [AcornJS](https://github.com/acornjs/acorn) under the hood to generate the AST.

## Usage

```bash
$ npm i ast-parentchild
$ ast-parentchild  /path/to/javascript/file.js  /output/path/of/file.json
```

## Example 

The following is the input JavaScript file `sample.js`.

```javascript
const example = "example";

```

The following is the output JSON file `output.json`.

```json
{
  "id": 7,
  "data": [
    [
      "type",
      "Program"
    ],
    [
      "start",
      0
    ],
    [
      "end",
      25
    ],
    [
      "sourceType",
      "script"
    ]
  ],
  "children": [
    {
      "id": 6,
      "data": null,
      "children": [
        {
          "id": 5,
          "data": [
            [
              "type",
              "VariableDeclaration"
            ],
            [
              "start",
              0
            ],
            [
              "end",
              25
            ],
            [
              "kind",
              "const"
            ]
          ],
          "children": [
            {
              "id": 4,
              "data": null,
              "children": [
                {
                  "id": 3,
                  "data": [
                    [
                      "type",
                      "VariableDeclarator"
                    ],
                    [
                      "start",
                      6
                    ],
                    [
                      "end",
                      25
                    ]
                  ],
                  "children": [
                    {
                      "id": 1,
                      "data": [
                        [
                          "type",
                          "Identifier"
                        ],
                        [
                          "start",
                          6
                        ],
                        [
                          "end",
                          13
                        ],
                        [
                          "name",
                          "example"
                        ]
                      ],
                      "children": [],
                      "decorators": [
                        {
                          "linkName": "id"
                        }
                      ]
                    },
                    {
                      "id": 2,
                      "data": [
                        [
                          "type",
                          "Literal"
                        ],
                        [
                          "start",
                          16
                        ],
                        [
                          "end",
                          25
                        ],
                        [
                          "value",
                          "example"
                        ],
                        [
                          "raw",
                          "\"example\""
                        ]
                      ],
                      "children": [],
                      "decorators": [
                        {
                          "linkName": "init"
                        }
                      ]
                    }
                  ],
                  "decorators": [
                    {
                      "linkName": "declarations[0]"
                    }
                  ]
                }
              ],
              "layout": {},
              "decorators": []
            }
          ],
          "decorators": [
            {
              "linkName": "body[0]"
            }
          ]
        }
      ],
      "layout": {},
      "decorators": []
    }
  ],
  "decorators": []
}
```



