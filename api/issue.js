export default async function handler(req, res) {

  try {

    const response = await fetch(
      'https://pakclub10.com/webapi/kv/issue/WinGo_30S',
      {
        headers: {
          'User-Agent': 'Mozilla/5.0',
          'Accept': 'application/json'
        }
      }
    );

    const data = await response.json();

    res.status(200).json(data);

  } catch (error) {

    res.status(500).json({
      error: error.toString()
    });
  }
}
