function encodeAndDecodeMessages() {
    const encodeSend = document.getElementById('main').children[0].children[2]
    const decodeAndReadContainer = document.getElementById('main').children[1].children[1]
    encodeSend.addEventListener('click', encodeAndSend);

    const decodeRead = document.getElementById('main').children[1].children[2]
    decodeRead.addEventListener('click', decodeAndRead);

    function encodeAndSend(ev) {
        const message = ev.target.parentNode.children[1].value;
        const result = [];
        for (let l of message) {
            result.push(String.fromCharCode( l.charCodeAt(0) + 1 ) )
        }
        decodeAndReadContainer.value = result.join('');
        ev.target.parentNode.children[1].value = ''
    }

    function decodeAndRead(ev) {
        const codedMsg = decodeAndReadContainer.value;
        const res = []
        for (let l of codedMsg) {
            res.push(String.fromCharCode( l.charCodeAt(0) - 1 ) )
        }
        decodeAndReadContainer.value = res.join('');
    }

}   