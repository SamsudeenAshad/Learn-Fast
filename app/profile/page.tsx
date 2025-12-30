'use client';

import Navbar from '@/components/Navbar';

// Static student data
const studentData = {
  name: 'Alex Johnson',
  studentId: 'STU-2024-001',
  email: 'alex.johnson@learnfast.com',
  phone: '+1 (555) 123-4567',
  program: 'Bachelor of Science in Information Technology',
  enrollmentDate: 'September 2024',
  expectedGraduation: 'May 2028',
  gpa: '3.85',
  credits: '45',
  status: 'Active',
};

const registeredCourses = [
  { name: 'Web Development', code: 'WD101', status: 'In Progress', grade: '-' },
  { name: 'Data Science', code: 'DS201', status: 'In Progress', grade: '-' },
  { name: 'Cyber Security', code: 'CS301', status: 'In Progress', grade: '-' },
];

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Student Profile</h1>
          <p className="text-gray-500 mt-2">
            View and manage your personal information
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              {/* Avatar Section */}
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-3xl font-bold text-white">
                    {studentData.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-900">
                  {studentData.name}
                </h2>
                <p className="text-sm text-gray-500">{studentData.studentId}</p>
                <span className="inline-flex items-center mt-2 px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  {studentData.status}
                </span>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">
                    {studentData.gpa}
                  </p>
                  <p className="text-xs text-gray-500">GPA</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">
                    {studentData.credits}
                  </p>
                  <p className="text-xs text-gray-500">Credits</p>
                </div>
              </div>

              {/* Edit Profile Button */}
              <button
                onClick={() => alert('Edit profile - UI prototype only')}
                className="w-full mt-6 px-4 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
                Edit Profile
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">
                    Full Name
                  </label>
                  <p className="text-gray-900 font-medium">{studentData.name}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">
                    Student ID
                  </label>
                  <p className="text-gray-900 font-medium">
                    {studentData.studentId}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">
                    Email Address
                  </label>
                  <p className="text-gray-900 font-medium">{studentData.email}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">
                    Phone Number
                  </label>
                  <p className="text-gray-900 font-medium">{studentData.phone}</p>
                </div>
              </div>
            </div>

            {/* Academic Information */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                Academic Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">
                    Program
                  </label>
                  <p className="text-gray-900 font-medium">
                    {studentData.program}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">
                    Enrollment Date
                  </label>
                  <p className="text-gray-900 font-medium">
                    {studentData.enrollmentDate}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">
                    Expected Graduation
                  </label>
                  <p className="text-gray-900 font-medium">
                    {studentData.expectedGraduation}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">
                    Status
                  </label>
                  <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                    {studentData.status}
                  </span>
                </div>
              </div>
            </div>

            {/* Current Courses */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                Current Courses
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-sm font-medium text-gray-500 border-b border-gray-100">
                      <th className="pb-3">Course Name</th>
                      <th className="pb-3">Code</th>
                      <th className="pb-3">Status</th>
                      <th className="pb-3">Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {registeredCourses.map((course, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-50 last:border-0"
                      >
                        <td className="py-4 font-medium text-gray-900">
                          {course.name}
                        </td>
                        <td className="py-4 text-gray-600">{course.code}</td>
                        <td className="py-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                            {course.status}
                          </span>
                        </td>
                        <td className="py-4 text-gray-600">{course.grade}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <a
                href="/courses"
                className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
              >
                View all courses
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
