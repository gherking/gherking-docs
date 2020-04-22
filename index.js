const { readFileSync, writeFileSync, readdirSync } = require("fs");
const { join } = require("path");
const markIt = require("markdown-it")({
    html: true,
    linkify: true,
    typographer: true,
}).use(require("markdown-it-highlightjs"), {
    register: {
        cypher: require("highlightjs-cypher"),
    },
}).use(require("markdown-it-textual-uml"));

const MD = /\.md$/i;

const old_render = markIt.renderer.rules.link_open || function (tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options);
};
markIt.renderer.rules.link_open = (tokens, idx, options, env, self) => {
    for (const attr of tokens[idx].attrs) {
        if (MD.test(attr[1])) {
            attr[1] = attr[1].replace(MD, ".html");
        }
    }
    return old_render(tokens, idx, options, env, self);
};

const files = readdirSync("./src").filter(file => MD.test(file));
for (const file of files) {
    console.log("Converting", file);
    const md = readFileSync(join("src", file), "utf8");
    const html = markIt.render(md);
    writeFileSync(
        join("docs", file.replace(MD, ".html")),
        html,
        "utf8",
    );
    console.log("Converting done.");
}