"use client";
import React, { useState, useEffect } from 'react';

// Icon components as SVGs
const Brain = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const Users = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
);

const MessageCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const Bot = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
  </svg>
);

const FileText = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const HelpCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const Star = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

const ArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const Play = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H15M13 16h2a1 1 0 001-1V9a1 1 0 00-1-1h-2M8 21l4-7 4 7M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
  </svg>
);

const CheckCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const Lightbulb = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const Target = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c3.87 0 7 3.13 7 7s-3.13 7-7 7-7-3.13-7-7 3.13-7 7-7z" />
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const Clock = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const Shield = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

export default function StudyFlowHomePage() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Study Assistant",
      description: "Get personalized study recommendations and instant answers to complex questions",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "Connect with peers, form study groups, and share knowledge seamlessly",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: MessageCircle,
      title: "Live Discussion Forums",
      description: "Engage in real-time discussions with AI moderation and smart topic suggestions",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Bot,
      title: "24/7 AI Tutoring",
      description: "Access specialized AI tutors for every subject, available round the clock",
      color: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { number: "50K+", label: "Active Students" },
    { number: "1M+", label: "Study Materials" },
    { number: "99.9%", label: "AI Accuracy" },
    { number: "24/7", label: "Support" }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Computer Science Student",
      content: "StudyFlow AI helped me ace my algorithms course. The AI tutor explained complex concepts in ways I could actually understand!",
      rating: 5
    },
    {
      name: "Marcus Johnson",
      role: "Medical Student",
      content: "The collaborative features are game-changing. I can study with peers globally and get instant help from AI when needed.",
      rating: 5
    },
    {
      name: "Priya Patel",
      role: "Engineering Student",
      content: "Best study platform I've used. The AI suggestions for study materials saved me countless hours of research.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-50">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-slate-900/80 backdrop-blur-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold">StudyFlow AI</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="hover:text-purple-400 transition-colors">Features</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Community</a>
              <a href="#" className="hover:text-purple-400 transition-colors">About</a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="/auth/login" className="px-4 py-2 text-sm font-medium hover:text-purple-400 transition-colors">
                Log In
              </a>
              <a href="/auth/signup" className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all transform hover:scale-105">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6">
              Study Smarter,
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Not Harder
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              The ultimate AI-powered study platform where knowledge meets collaboration. 
              Connect with peers, access intelligent tutoring, and accelerate your learning journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/auth/signup" className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all transform hover:scale-105 flex items-center space-x-2">
                <span>Start Learning Free</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-slate-400 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Powerful Features for
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Every Learner</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover tools designed to transform how you study, collaborate, and succeed
            </p>
          </div>

          {/* Interactive Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                  activeFeature === index ? 'bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-500' : 'bg-slate-800/50'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all">
              <FileText className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Smart Note Sharing</h3>
              <p className="text-slate-400">Upload, organize, and share notes with AI-powered categorization and search</p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all">
              <HelpCircle className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Q&A Community</h3>
              <p className="text-slate-400">Ask questions, get answers from peers and AI tutors with detailed explanations</p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all">
              <Lightbulb className="w-8 h-8 text-yellow-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Study Recommendations</h3>
              <p className="text-slate-400">AI analyzes your progress and suggests personalized study materials and schedules</p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all">
              <Target className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Progress Tracking</h3>
              <p className="text-slate-400">Monitor your learning journey with detailed analytics and achievement milestones</p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all">
              <Clock className="w-8 h-8 text-orange-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Study Sessions</h3>
              <p className="text-slate-400">Join live study sessions, create study groups, and participate in collaborative learning</p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all">
              <Shield className="w-8 h-8 text-red-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Academic Integrity</h3>
              <p className="text-slate-400">AI-powered plagiarism detection and citation assistance to maintain academic standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Showcase Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Meet Your AI Study
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Companion</span>
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Our advanced AI doesn't just answer questions—it understands your learning style, 
                adapts to your pace, and provides personalized guidance every step of the way.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span>Instant doubt resolution across 100+ subjects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span>Personalized study plans and schedules</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span>Real-time collaboration with smart suggestions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span>Advanced progress analytics and insights</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4" />
                  </div>
                  <span className="font-semibold">AI Tutor</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
                <div className="space-y-3">
                  <div className="bg-purple-500/20 p-3 rounded-lg">
                    <p className="text-sm">"Can you explain quantum mechanics in simple terms?"</p>
                  </div>
                  <div className="bg-slate-700/50 p-3 rounded-lg">
                    <p className="text-sm">I'd be happy to explain quantum mechanics! Think of it as the physics of the very small...</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse animation-delay-200"></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse animation-delay-400"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Loved by Students
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Worldwide</span>
            </h2>
            <p className="text-xl text-slate-300">See what students are saying about StudyFlow AI</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 mb-4">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-slate-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of students already using StudyFlow AI to achieve their academic goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/auth/signup" className="px-8 py-4 bg-white text-purple-600 rounded-full text-lg font-semibold hover:shadow-2xl transition-all transform hover:scale-105">
              Sign Up Free
            </a>
            <a href="/auth/login" className="px-8 py-4 border-2 border-white rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all">
              Sign In
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5" />
                </div>
                <span className="text-lg font-bold">StudyFlow AI</span>
              </div>
              <p className="text-slate-400">Empowering students with AI-driven learning experiences</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <div className="space-y-2 text-slate-400">
                <div>Features</div>
                <div>AI Tutoring</div>
                <div>Study Groups</div>
                <div>Analytics</div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <div className="space-y-2 text-slate-400">
                <div>Forums</div>
                <div>Study Sessions</div>
                <div>Help Center</div>
                <div>Blog</div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <div className="space-y-2 text-slate-400">
                <div>About</div>
                <div>Careers</div>
                <div>Contact</div>
                <div>Privacy</div>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 StudyFlow AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}