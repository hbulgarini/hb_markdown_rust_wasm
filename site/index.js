const wasm = import('./node_modules/hb-markdown-rust-wasm/hb_markdown_rust_wasm.js')

wasm.then(module => {
    const btn = document.getElementById('parse')
    const previewArea = document.getElementById('output')

    btn.addEventListener('click', () => {
        const input = document.getElementById('markdown').value
        previewArea.innerHTML = module.parse(input)
    })
})