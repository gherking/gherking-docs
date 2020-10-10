# Mermaid

!!!include(.menu.md)!!!

## Examples
Gherkin Formatter
```mermaid
graph TD
A1([Start]) 
--> B1[/Read Gherkin Document/]
--> C1[Format Gherkin Document]
--> D1[/Formatted Gherkin Document/]
--> E1([Stop])
```
Format Gherkin document
```mermaid
graph TD
A2([Start]) 
--> B2[/Feature/]
--> C2[Format Feature]
--> D2[/Formatted Feature/]
--> E2([Stop])
```

Format Feature
```mermaid
graph TD
start([Start])
--> tags[Format Feature tags]
--> keywordAndName[Format Feature keyword and name]
--> branch1{Does it have description?}
-->|Yes| description[Format description] --> branch2
branch1 -->|No| branch2{Does it have elements?}
branch2 -->|Yes| D2[Format Next feature element]
branch2 -->|No| stop
D2 --> E2{More elements?}
E2 --> |Yes| D2
E2 --> |No| stop([Stop])
```

Format Feature element
```mermaid
graph TD
A([Start])
-->B[/Element/]
-->C{Type?}
C-->|Background| D3[Format Background] --> Z[/Formatted element/]
C-->|Scenario| E3[Format Scenario] --> Z
C-->|Scenario Outline| F[Format Scenario Outline] --> Z
C-->|Rule| G[Format Rule] -->Z
Z --> Y([Stop])
```

 Format Background
```mermaid
graph TD
start([Start])
--> keywordAndName[Format Background keyword and name]
--> branch1{Does it have description?}
-->|Yes| description[Format description] --> branch2
branch1 -->|No| branch2{Does it have steps?}
branch2 -->|Yes| D2[Format Next step]
branch2 -->|No| stop
D2 --> E2{More steps?}
E2 --> |Yes| D2
E2 --> |No| stop([Stop])
```
Format Scenario
```mermaid
graph TD
start([Start])
--> tags[Format Scenario tags]
--> keywordAndName[Format Scenario keyword and name]
--> branch1{Does it have description?}
-->|Yes| description[Format description] --> branch2
branch1 -->|No| branch2{Does it have steps?}
branch2 -->|Yes| D2[Format Next step]
branch2 -->|No| stop
D2 --> E2{More steps?}
E2 --> |Yes| D2
E2 --> |No| stop([Stop])
```
Format Scenario Outline
```mermaid
graph TD
start([Start])
--> scenario[Format Scenario]
 -->branch1{Does it have examples?}
branch1 -->|Yes| example[Format Next example]
branch1 -->|No| stop
example --> branch2{More examples?}
branch2 --> |Yes| example
branch2 --> |No| stop([Stop])
```
Format Rule
```mermaid
graph TD
start([Start])
--> keywordAndName[Format Rule keyword and name]
--> branch1{Does it have description?}
-->|Yes| description[Format description] --> branch2
branch1 -->|No| branch2{Does it have elements?}
branch2 -->|Yes| D2[Format Next Rule element]
branch2 -->|No| stop
D2 --> E2{More elements?}
E2 --> |Yes| D2
E2 --> |No| stop([Stop])
```

Format Rule element
```mermaid
graph TD
A([Start])
-->B[/Element/]
-->C{Type?}
C-->|Background| D3[Format Background] --> Z[/Formatted element/]
C-->|Scenario| E3[Format Scenario] --> Z
C-->|Scenario Outline| F[Format Scenario Outline] --> Z
Z --> Y([Stop])
```

Format Step
```mermaid
graph TD
start([Start])
--> keywordAndText[Add Step keyword and name]
--> branch1{Does it have docstring?}
-->|Yes| description[Format docstring] --> branch2
branch1 -->|No| branch2{Does it have data table?}
branch2 -->|Yes| D2[Format data table] --> stop([Stop])
branch2 -->|No| stop
```

Format Docstring
```mermaid
graph TD
start([Start])
--> docstring[/Docstring/]
--> addContent[Add delimiters and format docstring content]
--> formattedTable[/Formatted docstring/]
--> stop([Stop])
```

Format Examples
```mermaid
graph TD
start([Start])
--> tags[Format Example tags]
--> keywordAndName[Format Example keyword and name]
--> formatDataTableRows[Format Example table rows]
--> stop([Stop])
```

Format Data Table
```mermaid
graph TD
start([Start])
--> table[/Data table/]
--> formatDataTableRows[Format data table rows]
--> formattedTable[/Formatted data table/]
--> stop([Stop])
```

Format Table Row
```mermaid
graph TD
start([Start])
--> row[/Table row/]
--> formatDataTableCells[Format table row cells]
--> formattedRow[/Formatted table row/]
--> stop([Stop])
```

Format Table Row Cell
```mermaid
graph TD
start([Start])
--> cell[/Table row cell/]
--> formatCell[Format table row cell]
--> formattedRowCell[/Formatted table row cell/]
--> stop([Stop])
```