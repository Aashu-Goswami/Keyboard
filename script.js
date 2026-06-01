window.addEventListener('keypress', function(e){
    this.document.getElementById('banner').innerHTML = `
    <div>
        <table>
            <tr>
                <th>KEY</th>
                <th>KEY CODE</th>
                <th>CODE</th>
            </tr>
            <tr>
                <th>${e.key === ' ' ? "Space" : e.key}</th>
                <th>${e.keyCode}</th>
                <th>${e.code}</th>
            </tr>
        </table>
    </div>
    `
})