'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';

// Static course data for registration
const availableCourses = [
  { id: 1, name: 'Web Development', code: 'WD101', duration: '12 Weeks' },
  { id: 2, name: 'Software Engineering', code: 'SE201', duration: '16 Weeks' },
  { id: 3, name: 'Data Science', code: 'DS301', duration: '14 Weeks' },
  { id: 4, name: 'Cyber Security', code: 'CS401', duration: '10 Weeks' },
  { id: 5, name: 'Cloud Computing', code: 'CC501', duration: '8 Weeks' },
  { id: 6, name: 'Mobile App Development', code: 'MAD601', duration: '12 Weeks' },
];

export default function RegisterPage() {
  const router = useRouter();
  const [selectedCourses, setSelectedCourses] = useState<number[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleCourseToggle = (courseId: number) => {
    setSelectedCourses((prev) =>
      prev.includes(courseId)
        ? prev.filter((id) => id !== courseId)
        : [...prev, courseId]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedCourses.length === 0) {
      alert('Please select at least one course to register');
      return;
    }
    setShowSuccess(true);
    // Navigate to dashboard after 2 seconds
    setTimeout(() => {
      router.push('/dashboard');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Success Message */}
        {showSuccess && (
          <div className="mb-6 bg-green-50 border border-green-200 rounded-xl p-4 flex items-center space-x-3 animate-fade-in">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-green-800">
                Course registered successfully!
              </h3>
              <p className="text-sm text-green-600">
                You have been enrolled in {selectedCourses.length} course(s). Redirecting to dashboard...
              </p>
            </div>
          </div>
        )}

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Course Registration</h1>
          <p className="text-gray-500 mt-2">
            Select the courses you want to enroll in for this semester
          </p>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit}>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Form Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
              <h2 className="text-lg font-semibold text-white">
                Available Courses
              </h2>
              <p className="text-blue-100 text-sm mt-1">
                Check the courses you wish to register for
              </p>
            </div>

            {/* Course Selection */}
            <div className="p-6">
              <div className="space-y-4">
                {availableCourses.map((course) => (
                  <label
                    key={course.id}
                    className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                      selectedCourses.includes(course.id)
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-100 hover:border-gray-200 bg-gray-50'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={selectedCourses.includes(course.id)}
                      onChange={() => handleCourseToggle(course.id)}
                      className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <div className="ml-4 flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium text-gray-900">
                            {course.name}
                          </h3>
                          <p className="text-sm text-gray-500">{course.code}</p>
                        </div>
                        <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200">
                          {course.duration}
                        </span>
                      </div>
                    </div>
                  </label>
                ))}
              </div>

              {/* Selection Summary */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-600">Selected Courses:</span>
                  <span className="font-semibold text-blue-600">
                    {selectedCourses.length} of {availableCourses.length}
                  </span>
                </div>

                {selectedCourses.length > 0 && (
                  <div className="bg-blue-50 rounded-xl p-4 mb-4">
                    <h4 className="text-sm font-medium text-blue-800 mb-2">
                      Your Selection:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCourses.map((id) => {
                        const course = availableCourses.find((c) => c.id === id);
                        return (
                          <span
                            key={id}
                            className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                          >
                            {course?.name}
                            <button
                              type="button"
                              onClick={() => handleCourseToggle(id)}
                              className="ml-2 hover:text-blue-900"
                            >
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    type="submit"
                    size="lg"
                    fullWidth
                    disabled={selectedCourses.length === 0}
                  >
                    <span className="flex items-center justify-center">
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Register Course{selectedCourses.length > 1 ? 's' : ''}
                    </span>
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    onClick={() => setSelectedCourses([])}
                    disabled={selectedCourses.length === 0}
                  >
                    Clear Selection
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </form>

        {/* Additional Info */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">Registration Info</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2"></span>
                Maximum 4 courses per semester
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2"></span>
                Registration deadline: January 15, 2025
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2"></span>
                Course fees apply per credit hour
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">Need Help?</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Contact our student services team for assistance with course
              registration.
            </p>
            <button
              type="button"
              onClick={() => alert('Contact support - UI prototype only')}
              className="text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              Contact Support →
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
