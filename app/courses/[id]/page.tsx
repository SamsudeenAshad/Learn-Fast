'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';

// Comprehensive course data with detailed content
const courseData: Record<string, {
  name: string;
  code: string;
  duration: string;
  level: string;
  instructor: string;
  rating: number;
  students: number;
  description: string;
  overview: string;
  objectives: string[];
  curriculum: { week: string; title: string; topics: string[] }[];
  prerequisites: string[];
  skills: string[];
  careerPaths: string[];
}> = {
  'web-development': {
    name: 'Web Development',
    code: 'WD101',
    duration: '12 Weeks',
    level: 'Beginner',
    instructor: 'Dr. Sarah Mitchell',
    rating: 4.8,
    students: 2450,
    description: 'Learn modern web development with HTML, CSS, JavaScript, React, and Node.js. Build responsive and interactive websites.',
    overview: `This comprehensive Web Development course is designed to take you from a complete beginner to a confident full-stack developer. You'll learn the fundamental technologies that power the modern web, including HTML5, CSS3, JavaScript (ES6+), React.js, and Node.js.

Throughout this 12-week program, you'll work on real-world projects that simulate actual development scenarios. By the end of the course, you'll have a professional portfolio showcasing your skills and be ready to pursue opportunities in web development.

The course emphasizes hands-on learning with practical exercises, coding challenges, and collaborative projects. You'll also learn industry best practices, version control with Git, responsive design principles, and deployment strategies.`,
    objectives: [
      'Master HTML5 semantic elements and modern markup techniques',
      'Create responsive layouts using CSS3 Flexbox and Grid',
      'Write clean, efficient JavaScript code following ES6+ standards',
      'Build interactive user interfaces with React.js and hooks',
      'Develop RESTful APIs using Node.js and Express',
      'Implement database operations with MongoDB',
      'Deploy web applications to cloud platforms',
      'Apply version control best practices with Git and GitHub',
    ],
    curriculum: [
      {
        week: 'Week 1-2',
        title: 'HTML5 & CSS3 Fundamentals',
        topics: ['Semantic HTML elements', 'CSS selectors and specificity', 'Box model and layouts', 'Flexbox and Grid systems', 'Responsive design principles'],
      },
      {
        week: 'Week 3-4',
        title: 'JavaScript Essentials',
        topics: ['Variables, data types, and operators', 'Functions and scope', 'DOM manipulation', 'Event handling', 'ES6+ features (arrow functions, destructuring, modules)'],
      },
      {
        week: 'Week 5-6',
        title: 'Advanced JavaScript',
        topics: ['Asynchronous JavaScript (Promises, async/await)', 'Fetch API and HTTP requests', 'Error handling', 'Local storage and session storage', 'JavaScript best practices'],
      },
      {
        week: 'Week 7-8',
        title: 'React.js Development',
        topics: ['React components and JSX', 'State and props management', 'React hooks (useState, useEffect, useContext)', 'Routing with React Router', 'Form handling and validation'],
      },
      {
        week: 'Week 9-10',
        title: 'Backend with Node.js',
        topics: ['Node.js fundamentals', 'Express.js framework', 'RESTful API design', 'Middleware and authentication', 'Database integration with MongoDB'],
      },
      {
        week: 'Week 11-12',
        title: 'Full-Stack Project & Deployment',
        topics: ['Full-stack application development', 'Testing and debugging', 'Performance optimization', 'Deployment to Vercel/Netlify', 'Portfolio project completion'],
      },
    ],
    prerequisites: [
      'Basic computer literacy',
      'No prior programming experience required',
      'Access to a computer with internet connection',
      'Enthusiasm to learn and practice regularly',
    ],
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Git', 'REST APIs', 'Responsive Design'],
    careerPaths: ['Frontend Developer', 'Backend Developer', 'Full-Stack Developer', 'Web Designer', 'UI Developer'],
  },
  'software-engineering': {
    name: 'Software Engineering',
    code: 'SE201',
    duration: '16 Weeks',
    level: 'Intermediate',
    instructor: 'Prof. Michael Chen',
    rating: 4.9,
    students: 1890,
    description: 'Master software development lifecycle, design patterns, agile methodologies, and best practices in software engineering.',
    overview: `The Software Engineering course provides a comprehensive understanding of professional software development practices. This intermediate-level program covers the entire software development lifecycle, from requirements gathering to deployment and maintenance.

You'll learn industry-standard methodologies including Agile and Scrum, study essential design patterns, and understand how to architect scalable and maintainable software systems. The course emphasizes teamwork, code quality, and professional development practices.

Through hands-on projects and case studies, you'll gain practical experience in designing, implementing, testing, and deploying software applications. You'll also learn about software project management, quality assurance, and DevOps practices.`,
    objectives: [
      'Understand the complete software development lifecycle (SDLC)',
      'Apply Agile and Scrum methodologies effectively',
      'Design software using UML diagrams and architectural patterns',
      'Implement SOLID principles and design patterns',
      'Write comprehensive unit and integration tests',
      'Practice code review and collaborative development',
      'Manage software projects using modern tools',
      'Apply DevOps practices for continuous integration and deployment',
    ],
    curriculum: [
      {
        week: 'Week 1-2',
        title: 'Software Development Fundamentals',
        topics: ['SDLC models (Waterfall, Iterative, Spiral)', 'Requirements engineering', 'Software specification documents', 'Feasibility analysis', 'Project planning'],
      },
      {
        week: 'Week 3-4',
        title: 'Agile Methodologies',
        topics: ['Agile principles and manifesto', 'Scrum framework', 'Sprint planning and execution', 'User stories and backlog management', 'Kanban and Lean practices'],
      },
      {
        week: 'Week 5-6',
        title: 'Software Design & Architecture',
        topics: ['Object-oriented design principles', 'UML diagrams (Class, Sequence, Use Case)', 'Architectural patterns (MVC, Microservices)', 'API design principles', 'Database design'],
      },
      {
        week: 'Week 7-8',
        title: 'Design Patterns',
        topics: ['Creational patterns (Singleton, Factory, Builder)', 'Structural patterns (Adapter, Decorator, Facade)', 'Behavioral patterns (Observer, Strategy, Command)', 'Pattern selection and implementation', 'Anti-patterns to avoid'],
      },
      {
        week: 'Week 9-10',
        title: 'Software Testing',
        topics: ['Testing strategies and types', 'Unit testing with Jest/JUnit', 'Integration testing', 'Test-Driven Development (TDD)', 'Code coverage and quality metrics'],
      },
      {
        week: 'Week 11-12',
        title: 'Code Quality & Best Practices',
        topics: ['Clean code principles', 'Code review processes', 'Refactoring techniques', 'Documentation standards', 'Technical debt management'],
      },
      {
        week: 'Week 13-14',
        title: 'DevOps & CI/CD',
        topics: ['Version control advanced (Git workflows)', 'Continuous Integration setup', 'Continuous Deployment pipelines', 'Container basics with Docker', 'Infrastructure as Code'],
      },
      {
        week: 'Week 15-16',
        title: 'Capstone Project',
        topics: ['Team project development', 'Real-world application building', 'Presentation and documentation', 'Peer review and feedback', 'Portfolio preparation'],
      },
    ],
    prerequisites: [
      'Proficiency in at least one programming language',
      'Basic understanding of data structures and algorithms',
      'Familiarity with version control (Git)',
      'Problem-solving mindset',
    ],
    skills: ['Agile/Scrum', 'UML', 'Design Patterns', 'TDD', 'CI/CD', 'Docker', 'Git', 'Code Review', 'Project Management', 'System Design'],
    careerPaths: ['Software Engineer', 'Technical Lead', 'Software Architect', 'DevOps Engineer', 'Scrum Master'],
  },
  'data-science': {
    name: 'Data Science',
    code: 'DS301',
    duration: '14 Weeks',
    level: 'Intermediate',
    instructor: 'Dr. Emily Watson',
    rating: 4.7,
    students: 3210,
    description: 'Dive into data analysis, machine learning, Python programming, and statistical methods for data-driven decision making.',
    overview: `This Data Science course offers a deep dive into the world of data analytics and machine learning. You'll learn how to extract insights from data, build predictive models, and communicate findings effectively to stakeholders.

The curriculum covers essential tools and techniques including Python programming, statistical analysis, data visualization, and machine learning algorithms. You'll work with real-world datasets and tackle practical problems that data scientists face daily.

By the end of this program, you'll be equipped to handle end-to-end data science projects, from data collection and cleaning to model deployment and monitoring. The course also covers emerging topics in AI and deep learning.`,
    objectives: [
      'Master Python programming for data analysis',
      'Apply statistical methods and probability theory',
      'Perform data cleaning, transformation, and visualization',
      'Build and evaluate machine learning models',
      'Implement supervised and unsupervised learning algorithms',
      'Work with big data tools and frameworks',
      'Communicate insights through compelling visualizations',
      'Deploy machine learning models to production',
    ],
    curriculum: [
      {
        week: 'Week 1-2',
        title: 'Python for Data Science',
        topics: ['Python fundamentals review', 'NumPy for numerical computing', 'Pandas for data manipulation', 'Jupyter notebooks', 'Python best practices'],
      },
      {
        week: 'Week 3-4',
        title: 'Statistics & Probability',
        topics: ['Descriptive statistics', 'Probability distributions', 'Hypothesis testing', 'Confidence intervals', 'Correlation and regression basics'],
      },
      {
        week: 'Week 5-6',
        title: 'Data Visualization',
        topics: ['Matplotlib fundamentals', 'Advanced visualizations with Seaborn', 'Interactive plots with Plotly', 'Dashboard creation', 'Storytelling with data'],
      },
      {
        week: 'Week 7-8',
        title: 'Machine Learning Fundamentals',
        topics: ['Supervised vs unsupervised learning', 'Linear and logistic regression', 'Decision trees and random forests', 'Model evaluation metrics', 'Cross-validation techniques'],
      },
      {
        week: 'Week 9-10',
        title: 'Advanced Machine Learning',
        topics: ['Support Vector Machines', 'Clustering algorithms (K-means, DBSCAN)', 'Dimensionality reduction (PCA)', 'Ensemble methods', 'Feature engineering'],
      },
      {
        week: 'Week 11-12',
        title: 'Deep Learning Introduction',
        topics: ['Neural network basics', 'TensorFlow and Keras', 'Convolutional Neural Networks', 'Natural Language Processing basics', 'Transfer learning'],
      },
      {
        week: 'Week 13-14',
        title: 'Real-World Projects & Deployment',
        topics: ['End-to-end ML pipeline', 'Model deployment with Flask/FastAPI', 'MLOps basics', 'Portfolio project', 'Industry case studies'],
      },
    ],
    prerequisites: [
      'Basic programming knowledge (Python preferred)',
      'High school level mathematics',
      'Familiarity with basic statistics',
      'Analytical thinking skills',
    ],
    skills: ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow', 'Data Visualization', 'Statistical Analysis', 'Machine Learning', 'SQL', 'Deep Learning'],
    careerPaths: ['Data Scientist', 'Data Analyst', 'Machine Learning Engineer', 'Business Intelligence Analyst', 'AI Researcher'],
  },
  'cyber-security': {
    name: 'Cyber Security',
    code: 'CS401',
    duration: '10 Weeks',
    level: 'Advanced',
    instructor: 'James Rodriguez, CISSP',
    rating: 4.9,
    students: 1560,
    description: 'Understand network security, ethical hacking, cryptography, and protect systems from cyber threats.',
    overview: `The Cyber Security course is an advanced program designed for professionals who want to specialize in protecting digital assets and infrastructure. This intensive course covers both defensive and offensive security techniques.

You'll learn about network security, ethical hacking, penetration testing, cryptography, and incident response. The course is aligned with industry certifications and provides hands-on experience with real security tools and scenarios.

Through virtual labs and simulated environments, you'll practice identifying vulnerabilities, conducting security assessments, and implementing security controls. The program prepares you for roles in security operations, penetration testing, and security consulting.`,
    objectives: [
      'Understand cyber security fundamentals and threat landscape',
      'Perform network security assessments and hardening',
      'Conduct ethical hacking and penetration testing',
      'Implement cryptographic solutions',
      'Respond to security incidents effectively',
      'Apply security frameworks and compliance standards',
      'Use industry-standard security tools',
      'Develop security policies and procedures',
    ],
    curriculum: [
      {
        week: 'Week 1-2',
        title: 'Security Fundamentals',
        topics: ['CIA triad and security principles', 'Threat landscape and attack vectors', 'Security frameworks (NIST, ISO 27001)', 'Risk assessment methodologies', 'Security policies and governance'],
      },
      {
        week: 'Week 3-4',
        title: 'Network Security',
        topics: ['Network protocols and vulnerabilities', 'Firewalls and IDS/IPS', 'VPNs and secure communications', 'Wireless security', 'Network monitoring and analysis'],
      },
      {
        week: 'Week 5-6',
        title: 'Ethical Hacking & Penetration Testing',
        topics: ['Reconnaissance techniques', 'Vulnerability scanning', 'Exploitation methods', 'Post-exploitation', 'Penetration testing methodologies'],
      },
      {
        week: 'Week 7-8',
        title: 'Cryptography & Application Security',
        topics: ['Symmetric and asymmetric encryption', 'Hash functions and digital signatures', 'PKI and certificates', 'Web application security (OWASP Top 10)', 'Secure coding practices'],
      },
      {
        week: 'Week 9-10',
        title: 'Incident Response & Security Operations',
        topics: ['Incident response lifecycle', 'Digital forensics basics', 'Security Operations Center (SOC)', 'Threat hunting', 'Security automation'],
      },
    ],
    prerequisites: [
      'Strong understanding of networking concepts',
      'Experience with Linux and Windows systems',
      'Basic programming/scripting knowledge',
      'Understanding of operating system fundamentals',
    ],
    skills: ['Network Security', 'Ethical Hacking', 'Penetration Testing', 'Cryptography', 'Incident Response', 'SIEM', 'Vulnerability Assessment', 'Security Frameworks', 'Forensics', 'Risk Management'],
    careerPaths: ['Security Analyst', 'Penetration Tester', 'Security Engineer', 'SOC Analyst', 'Security Consultant'],
  },
  'cloud-computing': {
    name: 'Cloud Computing',
    code: 'CC501',
    duration: '8 Weeks',
    level: 'Intermediate',
    instructor: 'David Kim, AWS Solutions Architect',
    rating: 4.8,
    students: 2890,
    description: 'Learn AWS, Azure, and Google Cloud platforms. Deploy and manage scalable cloud infrastructure.',
    overview: `This Cloud Computing course provides comprehensive training on the three major cloud platforms: Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP). You'll learn to design, deploy, and manage cloud infrastructure.

The course covers core cloud services including compute, storage, networking, and databases. You'll also learn about cloud architecture best practices, security, cost optimization, and DevOps integration.

Hands-on labs and projects will give you practical experience deploying real applications to the cloud. The curriculum aligns with cloud certification paths, preparing you for professional certifications.`,
    objectives: [
      'Understand cloud computing concepts and service models',
      'Deploy and manage resources on AWS, Azure, and GCP',
      'Design scalable and highly available architectures',
      'Implement cloud security best practices',
      'Optimize cloud costs and resource utilization',
      'Set up CI/CD pipelines for cloud deployments',
      'Use Infrastructure as Code tools',
      'Prepare for cloud certification exams',
    ],
    curriculum: [
      {
        week: 'Week 1-2',
        title: 'Cloud Fundamentals',
        topics: ['Cloud service models (IaaS, PaaS, SaaS)', 'Cloud deployment models', 'Virtualization concepts', 'Cloud providers comparison', 'Account setup and management'],
      },
      {
        week: 'Week 3-4',
        title: 'AWS Core Services',
        topics: ['EC2 instances and auto-scaling', 'S3 storage and lifecycle policies', 'VPC networking', 'RDS and DynamoDB', 'IAM and security'],
      },
      {
        week: 'Week 5-6',
        title: 'Azure & GCP Essentials',
        topics: ['Azure Virtual Machines and App Services', 'Azure Storage and Cosmos DB', 'GCP Compute Engine', 'GCP Cloud Storage and BigQuery', 'Multi-cloud strategies'],
      },
      {
        week: 'Week 7-8',
        title: 'Cloud Architecture & DevOps',
        topics: ['High availability and disaster recovery', 'Serverless computing (Lambda, Functions)', 'Container services (ECS, AKS, GKE)', 'Infrastructure as Code (Terraform)', 'Cloud monitoring and logging'],
      },
    ],
    prerequisites: [
      'Basic understanding of IT infrastructure',
      'Familiarity with Linux command line',
      'Basic networking knowledge',
      'Some programming experience helpful',
    ],
    skills: ['AWS', 'Azure', 'GCP', 'Terraform', 'Docker', 'Kubernetes', 'Serverless', 'Cloud Security', 'Cost Optimization', 'DevOps'],
    careerPaths: ['Cloud Engineer', 'Cloud Architect', 'DevOps Engineer', 'Site Reliability Engineer', 'Cloud Consultant'],
  },
  'mobile-app-development': {
    name: 'Mobile App Development',
    code: 'MAD601',
    duration: '12 Weeks',
    level: 'Beginner',
    instructor: 'Lisa Park',
    rating: 4.6,
    students: 1780,
    description: 'Build native and cross-platform mobile applications using React Native and Flutter frameworks.',
    overview: `The Mobile App Development course teaches you to build professional mobile applications for both iOS and Android platforms. You'll learn cross-platform development using React Native and Flutter, the two most popular frameworks in the industry.

Starting with mobile development fundamentals, you'll progress through building complete applications with navigation, state management, API integration, and native device features. The course emphasizes practical, hands-on learning with real app projects.

By the end of this program, you'll have published apps to showcase in your portfolio and understand the full mobile development lifecycle from design to deployment on app stores.`,
    objectives: [
      'Understand mobile app development fundamentals',
      'Build cross-platform apps with React Native',
      'Create beautiful UIs with Flutter and Dart',
      'Implement navigation and state management',
      'Integrate REST APIs and handle data',
      'Access native device features (camera, GPS, etc.)',
      'Publish apps to App Store and Google Play',
      'Apply mobile UI/UX best practices',
    ],
    curriculum: [
      {
        week: 'Week 1-2',
        title: 'Mobile Development Fundamentals',
        topics: ['Mobile platforms overview', 'Native vs cross-platform development', 'Development environment setup', 'Mobile UI/UX principles', 'App architecture patterns'],
      },
      {
        week: 'Week 3-4',
        title: 'React Native Basics',
        topics: ['React Native components', 'Styling and layouts', 'Navigation with React Navigation', 'State management basics', 'Debugging and testing'],
      },
      {
        week: 'Week 5-6',
        title: 'Advanced React Native',
        topics: ['Redux/Context for state management', 'API integration with Axios', 'Native modules', 'Push notifications', 'Performance optimization'],
      },
      {
        week: 'Week 7-8',
        title: 'Flutter Fundamentals',
        topics: ['Dart programming language', 'Flutter widgets and layouts', 'Material Design implementation', 'Navigation in Flutter', 'State management with Provider'],
      },
      {
        week: 'Week 9-10',
        title: 'Advanced Flutter',
        topics: ['Bloc pattern for state management', 'REST API integration', 'Local storage and SQLite', 'Animations and transitions', 'Platform-specific code'],
      },
      {
        week: 'Week 11-12',
        title: 'App Deployment & Portfolio',
        topics: ['App Store submission process', 'Google Play publishing', 'App signing and versioning', 'Analytics and crash reporting', 'Portfolio app development'],
      },
    ],
    prerequisites: [
      'Basic programming knowledge',
      'Familiarity with JavaScript (for React Native)',
      'Understanding of OOP concepts',
      'Mac required for iOS development',
    ],
    skills: ['React Native', 'Flutter', 'Dart', 'JavaScript', 'Mobile UI/UX', 'REST APIs', 'State Management', 'App Store Publishing', 'Firebase', 'Git'],
    careerPaths: ['Mobile App Developer', 'React Native Developer', 'Flutter Developer', 'iOS Developer', 'Android Developer'],
  },
};

// Map URL slug to course key
const slugToCourseKey: Record<string, string> = {
  'web-development': 'web-development',
  'software-engineering': 'software-engineering',
  'data-science': 'data-science',
  'cyber-security': 'cyber-security',
  'cloud-computing': 'cloud-computing',
  'mobile-app-development': 'mobile-app-development',
};

export default function CourseDetailPage() {
  const params = useParams();
  const courseId = params.id as string;
  const course = courseData[slugToCourseKey[courseId] || courseId];

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <p className="text-gray-500 mb-8">The course you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/courses">
            <Button>Back to Courses</Button>
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link
          href="/courses"
          className="inline-flex items-center text-sm text-gray-600 hover:text-blue-600 mb-6 transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Courses
        </Link>

        {/* Course Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white mb-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div>
              <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
                {course.level}
              </span>
              <h1 className="text-3xl lg:text-4xl font-bold mb-2">{course.name}</h1>
              <p className="text-blue-100 text-lg mb-4">{course.code}</p>
              <p className="text-blue-50 max-w-2xl">{course.description}</p>
              
              <div className="flex flex-wrap items-center gap-6 mt-6">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>{course.instructor}</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>{course.rating} Rating</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span>{course.students.toLocaleString()} Students</span>
                </div>
              </div>
            </div>
            
            <div className="lg:text-right">
              <Link href="/register">
                <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  Enroll Now
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Course Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Course Overview</h2>
              <div className="prose prose-gray max-w-none">
                {course.overview.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-600 mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Learning Objectives */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">What You&apos;ll Learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.objectives.map((objective, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">{objective}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Curriculum */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Course Curriculum</h2>
              <div className="space-y-4">
                {course.curriculum.map((module, index) => (
                  <div key={index} className="border border-gray-100 rounded-xl overflow-hidden">
                    <div className="bg-gray-50 px-4 py-3 flex items-center justify-between">
                      <div>
                        <span className="text-sm font-medium text-blue-600">{module.week}</span>
                        <h3 className="font-medium text-gray-900">{module.title}</h3>
                      </div>
                      <span className="text-sm text-gray-500">{module.topics.length} topics</span>
                    </div>
                    <div className="p-4">
                      <ul className="space-y-2">
                        {module.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-center text-sm text-gray-600">
                            <svg className="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Prerequisites */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Prerequisites</h3>
              <ul className="space-y-3">
                {course.prerequisites.map((prereq, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {prereq}
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills You'll Gain */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Skills You&apos;ll Gain</h3>
              <div className="flex flex-wrap gap-2">
                {course.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Career Paths */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Career Paths</h3>
              <ul className="space-y-3">
                {course.careerPaths.map((career, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {career}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white">
              <h3 className="font-semibold text-lg mb-2">Ready to Start?</h3>
              <p className="text-blue-100 text-sm mb-4">
                Enroll now and begin your journey to becoming a {course.careerPaths[0]}.
              </p>
              <Link href="/register" className="block">
                <Button variant="secondary" fullWidth className="bg-white text-blue-600 hover:bg-blue-50">
                  Enroll in This Course
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
