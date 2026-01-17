export async function GET() {
  const contacts = [
    { id: '2867241', callsign: 'YM0KTC', name: 'ARC Merkez', location: 'Bölge 0 - İstanbul', type: 'repeater' },
    { id: '2866808', callsign: 'YM1KTC', name: 'İstanbul Röle', location: 'Bölge 1 - İstanbul', type: 'repeater' },
    { id: '2867887', callsign: 'YM2KTR', name: 'Ankara Röle', location: 'Bölge 2 - Ankara', type: 'repeater' },
    { id: '2867234', callsign: 'YM3KTC', name: 'İzmir Röle', location: 'Bölge 3 - İzmir', type: 'repeater' },
    { id: '2867235', callsign: 'YM4KTC', name: 'Antalya Röle', location: 'Bölge 4 - Antalya', type: 'repeater' },
  ];

  return Response.json(contacts);
}
