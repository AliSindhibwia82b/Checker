export default async function handler(req, res) {

const response = await fetch(
'https://draw.ar-lottery01.com/WinGo/WinGo_30S/GetHistoryIssuePage.json'
);

const data = await response.json();

res.setHeader(
'Access-Control-Allow-Origin',
'*'
);

res.status(200).json(data);

}