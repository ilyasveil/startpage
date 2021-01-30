let $ = function( id ) { return document.getElementById( id ) }

let linksleft = [
    { url: 'https://github.com', text: 'GH' },
    { url: 'https://boards.4channel.org/g', text: '/g/' },
    { url: 'https://archlinux.org', text: 'Arch' },
    { url: 'https://gentoo.org', text: 'Gentoo' },
    { url: 'https://cloudflare.com', text: 'CF' },
]

let linksright = [
    { url: 'https://youtube.com', text: 'YT' },
    { url: 'https://anilist.co', text: 'AL' },
    { url: 'https://bakabt.me', text: 'BBT' },
    { url: 'https://slashdot.org', text: '/.' },

]

let palette = [
    { hex: '#2E3440' },
    { hex: '#3B4252' },
    { hex: '#434C5E' },
    { hex: '#4C566A' },
    { hex: '#D8DEE9' },
    { hex: '#E5E9F0' },
    { hex: '#ECEFF4' },
]

window.onload = function () {
    SetTitle()
    AddLinks()
    AddPalette()
    $('searchbox').focus()
}

document.body.addEventListener('keyup', function(event) {
    let q = $('searchbox').value

    if (event.key === "Enter" && q.length > 0) {
       window.open(`https://duckduckgo.com?q=${q}`)
   }
})

function SetTitle() {
    let title = new Date().toLocaleTimeString();
    $('title').innerText = `Hi Anon.\n${title}`
    setTimeout(SetTitle, 1000)
}

function AddLinks() {
    let left = $('link-list-left')
    for (let i = 0; i < linksleft.length; i++) {
        let y = document.createElement('li')
        y.className = 'link-list-item'
        let url = linksleft[i].url;
        let text = linksleft[i].text;
        let link = `<a class="link-item" href="${url}">${text}</a>`
        y.innerHTML = link
        left.appendChild(y)
    }

    let right = $('link-list-right')
    for (let i = 0; i < linksright.length; i++) {
        let y = document.createElement('li')
        y.className = 'link-list-item'
        let url = linksright[i].url;
        let text = linksright[i].text;
        let link = `<a class="link-item" href="${url}">${text}</a>`
        y.innerHTML = link
        right.appendChild(y)
    }
}

function AddPalette() {
    let x = $('palette-container')
    for (let i = 0; i < palette.length; i++) {
        let y = document.createElement('div')
        let color = palette[i].hex
        let item = `<div class="palette-item" style="background-color: ${color}; "><span style="color: ${color}; filter: invert(90%);">${color}</span></div>`
        y.innerHTML = item
        x.appendChild(y)
    }
}
