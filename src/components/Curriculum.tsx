import React from 'react';
import { CheckCircle, PlayCircle, FileText, Clock } from 'lucide-react';

const Curriculum = () => {
  const modules = [
    {
      week: 1,
      title: 'Foundation & Assessment',
      description: 'Build your foundation with proper form, goal setting, and initial assessments.',
      lessons: [
        'Complete Body Assessment',
        'Goal Setting & Planning',
        'Movement Fundamentals',
        'Nutrition Basics'
      ],
      duration: '4 hours'
    },
    {
      week: 2,
      title: 'Strength & Conditioning',
      description: 'Begin your transformation with proven strength training protocols.',
      lessons: [
        'Compound Movement Mastery',
        'Progressive Overload Principles',
        'Recovery & Sleep Optimization',
        'Supplement Strategies'
      ],
      duration: '5 hours'
    },
    {
      week: 3,
      title: 'Muscle Building Phase',
      description: 'Advanced hypertrophy techniques for maximum muscle growth.',
      lessons: [
        'Advanced Training Techniques',
        'Periodization Strategies',
        'Body Composition Analysis',
        'Meal Planning & Prep'
      ],
      duration: '6 hours'
    },
    {
      week: 4,
      title: 'Fat Loss Optimization',
      description: 'Scientific approaches to losing fat while preserving muscle.',
      lessons: [
        'Metabolic Training Methods',
        'Cardio Optimization',
        'Hormonal Balance',
        'Cutting Strategies'
      ],
      duration: '5 hours'
    },
    {
      week: 5,
      title: 'Mindset & Mental Training',
      description: 'Develop the mental toughness of elite performers.',
      lessons: [
        'Discipline & Consistency',
        'Stress Management',
        'Confidence Building',
        'Goal Achievement Psychology'
      ],
      duration: '4 hours'
    },
    {
      week: 6,
      title: 'Advanced Protocols',
      description: 'Elite-level training and nutrition strategies.',
      lessons: [
        'Periodization Mastery',
        'Advanced Supplementation',
        'Performance Optimization',
        'Competition Prep'
      ],
      duration: '6 hours'
    }
  ];

  return (
    <section id="curriculum" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
            Your <span className="text-gold">12-Week</span> Transformation Journey
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A structured, progressive curriculum that takes you from beginner to elite level
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {modules.map((module, index) => (
            <div
              key={index}
              className="group p-8 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gold/20 hover:border-gold/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-gold to-yellow-400 rounded-full p-3">
                    <span className="text-black font-bold text-lg">W{module.week}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{module.title}</h3>
                    <div className="flex items-center space-x-2 text-gold text-sm">
                      <Clock className="h-4 w-4" />
                      <span>{module.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {module.description}
              </p>

              <div className="space-y-3">
                {module.lessons.map((lesson, lessonIndex) => (
                  <div
                    key={lessonIndex}
                    className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-colors"
                  >
                    <CheckCircle className="h-5 w-5 text-gold flex-shrink-0" />
                    <span className="text-gray-300">{lesson}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-6 p-6 bg-gradient-to-r from-gold/10 to-yellow-400/10 rounded-xl border border-gold/20">
            <div className="flex items-center space-x-2">
              <PlayCircle className="h-6 w-6 text-gold" />
              <span className="text-white font-medium">50+ Video Lessons</span>
            </div>
            <div className="flex items-center space-x-2">
              <FileText className="h-6 w-6 text-gold" />
              <span className="text-white font-medium">Downloadable Resources</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-6 w-6 text-gold" />
              <span className="text-white font-medium">30+ Hours Content</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;