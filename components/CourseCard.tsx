interface CourseCardProps {
  name: string;
  code: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  description?: string;
  icon?: React.ReactNode;
}

const CourseCard = ({
  name,
  code,
  duration,
  level,
  description,
  icon,
}: CourseCardProps) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-700';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-700';
      case 'Advanced':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-200 group">
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
          {icon || (
            <svg
              className="w-6 h-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          )}
        </div>
        <span
          className={`text-xs font-medium px-3 py-1 rounded-full ${getLevelColor(
            level
          )}`}
        >
          {level}
        </span>
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-200">
        {name}
      </h3>
      <p className="text-sm text-blue-600 font-medium mb-2">{code}</p>

      {description && (
        <p className="text-sm text-gray-500 mb-4 line-clamp-2">{description}</p>
      )}

      <div className="flex items-center text-sm text-gray-500 mt-4 pt-4 border-t border-gray-50">
        <svg
          className="w-4 h-4 mr-2 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>{duration}</span>
      </div>
    </div>
  );
};

export default CourseCard;
