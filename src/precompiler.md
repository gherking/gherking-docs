# PreCompiler

!!!include(.menu.md)!!!

## Ditaa

```ditaa
+--------+   +-------+    +-------+
|        +---+ ditaa +--> |       |
|  Text  |   +-------+    |diagram|
|Document|   |!magic!|    |       |
|     {d}|   |       |    |       |
+---+----+   +-------+    +-------+
    :                         ^
    |       Lots of work      |
    +-------------------------+
```

## GraphViz

```dot
digraph example1 {
    1 -> 2 -> { 4, 5 };
    1 -> 3 -> { 6, 7 };
}
```

## PlantUML
```
!!!include(plantuml.md)!!!
```
## Mermain

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```