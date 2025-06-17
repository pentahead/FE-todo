export default function Header({ user, onLogout }) {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-indigo-600 font-bold text-xl">TodoApp</h1>
            </div>
          </div>
          
          {user && (
            <div className="flex items-center space-x-4">
              <div className="text-gray-700 font-medium">
                {user.name}
              </div>
              <button
                onClick={onLogout}
                className="text-gray-500 hover:text-indigo-600 font-medium text-sm transition-colors"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
} 