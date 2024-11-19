export default function Suggestions() {
  const suggestions = [
    {
      id: 1,
      username: 'photography_pro',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      relation: 'Followed by user1 + 3 more'
    },
    {
      id: 2,
      username: 'traveler_guide',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop',
      relation: 'Followed by user2 + 2 more'
    },
    {
      id: 3,
      username: 'food_lover',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop',
      relation: 'New to Instagram'
    }
  ];

  return (
    <div className="mt-4">
      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-500 font-semibold">Suggestions For You</span>
        <button className="text-xs font-semibold">See All</button>
      </div>

      {suggestions.map((suggestion) => (
        <div key={suggestion.id} className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <img
              src={suggestion.avatar}
              alt={suggestion.username}
              className="w-8 h-8 rounded-full mr-3"
            />
            <div>
              <div className="text-sm font-semibold">{suggestion.username}</div>
              <div className="text-xs text-gray-500">{suggestion.relation}</div>
            </div>
          </div>
          <button className="text-xs font-semibold text-blue-500">Follow</button>
        </div>
      ))}
    </div>
  );
}