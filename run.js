const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/fengari-web@0.1.4/dist/fengari-web.js';
script.onload = () => {
    fetch('https://gist.githubusercontent.com/gm92342/e955ad835c317932434a9a561cad1f5e/raw/0cd072f3791e68fc6963e83653bba75cb04d3fcc/script.js')
        .then(response => response.text())
        .then(luaCode => {
            fengari.load(luaCode)();
        });
};
document.head.appendChild(script);
