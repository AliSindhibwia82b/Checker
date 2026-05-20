export default async function handler(req, res) {

  try {

    const response = await fetch(
      'https://draw.ar-lottery01.com/WinGo/WinGo_30S/GetHistoryIssuePage.json',
      {
        method: 'GET',
        headers: {
          'User-Agent': 'Mozilla/5.0',
          'Accept': 'application/json,text/plain,*/*',
          'Origin': 'https://pakclub10.com',
          'Referer': 'https://pakclub10.com/'
        }
      }
    );

    const text = await response.text();

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).send(text);

  } catch (e) {

    res.status(500).json({
      error: e.toString()
    });

  }
}
