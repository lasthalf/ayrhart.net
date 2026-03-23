export default {
  async fetch(request) {
    const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>ayrhart.net</title>
    <style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100dvh;
  background: #f4f1ec;
  font-family: Georgia, 'Times New Roman', serif;
}
.container {
  max-width: min(88vw, 640px);
  padding: 2rem;
}
.line {
  display: block;
  white-space: nowrap;
  line-height: 2;
  color: #3a3a3a;
  font-size: clamp(1rem, 2.5vw, 1.4rem);
}
.headline {
  font-size: clamp(2.5rem, 9vw, 5rem);
  font-weight: normal;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-bottom: 0.2em;
  color: #111;
}
.rule {
  border: none;
  border-top: 2px solid #222;
  margin: 0.3em 0 0.8em;
}
.dim { color: #999; font-style: italic; }
.blue { color: #3a8fd4; }
.salmon { color: #c45a2d; }
@media (prefers-color-scheme: dark) {
  body { background: #1a1a1a; }
  .line { color: #ccc; }
  .headline { color: #eee; }
  .rule { border-top-color: #ddd; }
  .dim { color: #777; }
  .blue { color: #5fb3f5; }
  .salmon { color: #e8764a; }
}
    </style>
  </head>
  <body>
    <div class="container">
      <div class="line headline">Ayrhart.</div>
      <hr class="rule">
      <div class="line">It\u2019s pronounced exactly how it looks.</div>
      <div class="line"><span class="blue">Ayr</span>, like the air you breathe.</div>
      <div class="line"><span class="salmon">Hart</span>, like the heart in your chest.</div>
      <div class="line"><span class="dim">That\u2019s the whole mystery.</span></div>
    </div>
  </body>
</html>`;

    return new Response(html, {
      headers: {
        "Content-Type": "text/html;charset=UTF-8",
      },
    });
  },
};
