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
  visibility: hidden;
  font-size: clamp(1rem, 2.5vw, 1.4rem);
}
.line.visible { visibility: visible; }
.line .char { display: inline-block; opacity: 0; white-space: pre; }
.line .char.typed { opacity: 1; }
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
  visibility: hidden;
  transform: scaleX(0);
  transform-origin: left;
}
.rule.visible {
  visibility: visible;
  animation: draw 0.6s ease-out forwards;
}
@keyframes draw {
  to { transform: scaleX(1); }
}
.dim { color: #999; font-style: italic; }
.blue { color: #3a8fd4; }
.salmon { color: #c45a2d; }
.cursor {
  display: inline-block;
  width: 2px;
  height: 1.1em;
  background: #333;
  vertical-align: text-bottom;
  animation: blink 1s step-end infinite;
  margin-left: 2px;
}
@keyframes blink { 50% { opacity: 0; } }
    </style>
  </head>
  <body>
    <div class="container" id="container">
      <div class="line headline" data-pause-after="400">Ayrhart.</div>
      <hr class="rule" id="rule">
      <div class="line" data-pause-after="500">It\u2019s pronounced exactly how it looks.</div>
      <div class="line" data-pause-after="300"><span class="blue">Ayr</span>, like the air you breathe.</div>
      <div class="line" data-pause-after="300"><span class="salmon">Hart</span>, like the heart in your chest.</div>
      <div class="line" data-pause-after="0"><span class="dim">That\u2019s the whole mystery.</span></div>
    </div>

    <script>
      const lines = document.querySelectorAll('.line');
      const rule = document.getElementById('rule');
      let cursorEl = document.createElement('span');
      cursorEl.className = 'cursor';

      function wrapChars(el) {
        const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
        const textNodes = [];
        while (walker.nextNode()) textNodes.push(walker.currentNode);
        textNodes.forEach(node => {
          const frag = document.createDocumentFragment();
          for (const ch of node.textContent) {
            const span = document.createElement('span');
            span.className = 'char';
            span.textContent = ch;
            frag.appendChild(span);
          }
          node.parentNode.replaceChild(frag, node);
        });
      }

      lines.forEach(line => wrapChars(line));

      async function sleep(ms) {
        return new Promise(r => setTimeout(r, ms));
      }

      async function typeLine(line) {
        line.classList.add('visible');
        const chars = line.querySelectorAll('.char');
        line.appendChild(cursorEl);
        const isHeadline = line.classList.contains('headline');
        for (const ch of chars) {
          ch.classList.add('typed');
          const base = isHeadline ? 60 : 35;
          const jitter = isHeadline ? 40 : 45;
          const delay = ch.textContent === ' ' ? 25 : (base + Math.random() * jitter);
          await sleep(delay);
        }
        const pause = parseInt(line.dataset.pauseAfter) || 0;
        if (pause) await sleep(pause);
      }

      async function run() {
        await sleep(600);
        await typeLine(lines[0]);
        await sleep(200);
        rule.classList.add('visible');
        await sleep(800);
        for (let i = 1; i < lines.length; i++) {
          await typeLine(lines[i]);
          await sleep(250);
        }
      }

      run();
    </script>
  </body>
</html>`;

    return new Response(html, {
      headers: {
        "Content-Type": "text/html;charset=UTF-8",
      },
    });
  },
};
