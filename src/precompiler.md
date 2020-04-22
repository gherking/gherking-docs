<script src="https://unpkg.com/mermaid@8.5.0/dist/mermaid.min.js"></script>
<script>mermaid.initialize({startOnLoad:true});</script> 

# PreCompiler

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

```plantuml
Bob -> Alice : hello
```

## Mermain

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```