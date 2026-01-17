export async function GET() {
  const repeaters = [
    {
      id: 'YM1KTC',
      name: 'İstanbul Röle',
      frequency: '439.4125+',
      offset: '+7.6',
      tone: '88.5',
      colorCode: '1',
      status: 'online',
      lastheard: new Date().toISOString(),
    },
    {
      id: 'YM2KTR',
      name: 'Ankara Röle',
      frequency: '439.4750-',
      offset: '-5.0',
      tone: '88.5',
      colorCode: '1',
      status: 'online',
      lastheard: new Date(Date.now() - 3600000).toISOString(),
    },
    {
      id: 'YM3KTC',
      name: 'İzmir Röle',
      frequency: '439.5500+',
      offset: '+7.6',
      tone: '88.5',
      colorCode: '1',
      status: 'offline',
      lastheard: new Date(Date.now() - 86400000).toISOString(),
    },
  ];

  return Response.json(repeaters);
}
