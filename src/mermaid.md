## Examples
Separate formatters
- +Single-responsibility principle
- Separate files
- +Simple to read behaviour of each formatter
- -Harder to read the overall picture
```mermaid
 classDiagram
      Formatter <|-- FeatureFormatter
      Formatter <|-- ScenarioFormatter
      Formatter <|-- StepFormatter
      class Formatter{
          <<interface>>
          +toString():string
      }
      class FeatureFormatter{
          +toString():string
      }
      class ScenarioFormatter{
          +toString():string
      }
      class StepFormatter{
          +toString():string
      } 
```
Single class for all type of formatters
- +Easier to read the overal picture
- -Harder to read behaviour of each formatter
```mermaid
 classDiagram
      class Formatter{
          +featureFormatter():string
          +scenarioFormatter():string
          +stepFormatter():string
          +format():string
      }
```
toString method handles both recursion and string formatting
```mermaid
graph LR
A[toString] --> B(format own properties)
    B --> C{Has elements?}
    C -->|Yes| A
    C -->|No| E[Return string]
```
toString method only handles string formatting and recursion handling is outsourced to a new method
- more logic introduced
- clean toString methods
```mermaid
graph LR
A["fromatter(recursion handler)"] --> B(proper toString method)
    B --> C{Has elements?}
    C -->|Yes| A
    C -->|No| E[Return string]
```