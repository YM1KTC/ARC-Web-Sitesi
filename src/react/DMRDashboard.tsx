import { useState, useEffect } from 'react';

interface Repeater {
  id: string;
  name: string;
  frequency: string;
  offset: string;
  tone: string;
  colorCode: string;
  status: 'online' | 'offline';
  lastheard: string;
}

export default function DMRDashboard() {
  const [repeaters, setRepeaters] = useState<Repeater[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/repeaters.json')
      .then(r => {
        if (!r.ok) throw new Error('Failed to fetch');
        return r.json();
      })
      .then(data => {
        setRepeaters(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const formatLastSeen = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);

    if (diffMins < 1) return 'Şimdi';
    if (diffMins < 60) return `${diffMins} dakika önce`;
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours} saat önce`;
    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays} gün önce`;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
        <p className="text-red-800">Hata: {error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Yeniden Dene
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {repeaters.map(r => (
        <div
          key={r.id}
          className={`p-4 rounded-lg border-2 transition-all ${
            r.status === 'online'
              ? 'bg-green-50 border-green-200 hover:shadow-md'
              : 'bg-red-50 border-red-200'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-lg">{r.name}</h3>
            <span className={`px-2 py-1 text-xs rounded-full ${
              r.status === 'online' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
            }`}>
              {r.status === 'online' ? 'Çevrimiçi' : 'Çevrimdışı'}
            </span>
          </div>
          <p className="text-sm text-gray-700">
            <span className="font-medium">Frekans:</span> {r.frequency}
          </p>
          <p className="text-sm text-gray-700">
            <span className="font-medium">Offset:</span> {r.offset}
          </p>
          <p className="text-sm text-gray-700">
            <span className="font-medium">CTCSS:</span> {r.tone} Hz
          </p>
          <p className="text-sm text-gray-700">
            <span className="font-medium">Color Code:</span> {r.colorCode}
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Son duyulum: {formatLastSeen(r.lastheard)}
          </p>
        </div>
      ))}
    </div>
  );
}
