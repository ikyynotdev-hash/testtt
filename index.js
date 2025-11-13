export default function handler(req, res) {
  res.status(200).send(`
    <center>
      <h2>🚀 Ikyy API</h2>
      <p>Server aktif!<br>Coba endpoint <a href="/api/play?query=dj">/api/play</a></p>
    </center>
  `)
}
