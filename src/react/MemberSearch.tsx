import { useState } from 'react';

interface Member {
  id: string;
  callsign: string;
  name: string;
  location?: string;
}

export default function MemberSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Member[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setSearched(true);

    try {
      // For demo, we'll use the DMR contacts API
      // In production, you'd have a dedicated members API
      const res = await fetch(`/api/dmr-contacts.json`);
      const data = await res.json();

      // Filter by query (callsign or name)
      const filtered = data.filter((member: Member) =>
        member.callsign.toLowerCase().includes(query.toLowerCase()) ||
        member.name.toLowerCase().includes(query.toLowerCase())
      );

      setResults(filtered);
    } catch (err) {
      console.error('Search failed:', err);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <div className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Çağrı işareti veya isim ara..."
          className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <button
          onClick={handleSearch}
          disabled={loading || !query.trim()}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? 'Aranıyor...' : 'Ara'}
        </button>
      </div>

      {searched && results.length === 0 && !loading && (
        <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-yellow-800">Sonuç bulunamadı. Lütfen farklı bir arama deneyin.</p>
        </div>
      )}

      {results.length > 0 && (
        <ul className="mt-4 space-y-2">
          {results.map(member => (
            <li
              key={member.id}
              className="p-3 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-lg text-blue-600">{member.callsign}</h4>
                  <p className="text-gray-700">{member.name}</p>
                  {member.location && (
                    <p className="text-sm text-gray-500">{member.location}</p>
                  )}
                </div>
                <span className="text-2xl">📻</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
