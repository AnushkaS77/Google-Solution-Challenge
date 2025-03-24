import React, { useState } from 'react';
import { Palette, DollarSign, FlaskRound as Flask, Music, Code, Paintbrush, Calculator, Microscope, Ambulance as Dance, Terminal, ArrowRight, ChevronLeft } from 'lucide-react';

type Category = {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  features: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
};

const categories: Category[] = [
  {
    id: 'visual-arts',
    title: 'Visual Arts',
    icon: <Palette className="w-8 h-8" />,
    color: 'from-pink-500 to-rose-500',
    features: [
      {
        title: 'AI-Generated Drawing Demos',
        description: 'Experience Stable Diffusion and ControlNet in action',
        icon: <Paintbrush />
      },
      {
        title: 'AI-Generated Art',
        description: 'Create stunning artwork using Text-to-Image AI like SDXL',
        icon: <Palette />
      },
      {
        title: 'AI Style Transfer',
        description: 'Transform art into different styles using Neural Style Transfer',
        icon: <Paintbrush />
      }
    ]
  },
  {
    id: 'financial-literacy',
    title: 'Financial Literacy',
    icon: <DollarSign className="w-8 h-8" />,
    color: 'from-green-500 to-emerald-500',
    features: [
      {
        title: 'AI-Powered Financial Education',
        description: 'Interactive videos for financial learning',
        icon: <DollarSign />
      },
      {
        title: 'AI Budgeting Assistant',
        description: 'Smart tools for personal finance management',
        icon: <Calculator />
      },
      {
        title: 'Financial News Summarization',
        description: 'AI-powered digest of important financial updates',
        icon: <DollarSign />
      }
    ]
  },
  {
    id: 'science',
    title: 'Science',
    icon: <Flask className="w-8 h-8" />,
    color: 'from-blue-500 to-indigo-500',
    features: [
      {
        title: 'Science Animations & Simulations',
        description: 'AI-generated interactive learning experiences',
        icon: <Flask />
      },
      {
        title: 'Virtual AI Experiments',
        description: 'Hands-on learning in Physics, Chemistry, and Biology',
        icon: <Microscope />
      },
      {
        title: 'AI-Generated Infographics',
        description: 'Visual summaries of complex scientific concepts',
        icon: <Flask />
      }
    ]
  },
  {
    id: 'performing-arts',
    title: 'Performing Arts',
    icon: <Music className="w-8 h-8" />,
    color: 'from-purple-500 to-violet-500',
    features: [
      {
        title: 'Dance & Music Tutorials',
        description: 'AI-powered personalized learning experiences',
        icon: <Music />
      },
      {
        title: 'Voice & Singing Correction',
        description: 'Real-time AI feedback for improvement',
        icon: <Music />
      },
      {
        title: 'Gesture & Posture Detection',
        description: 'Advanced AI analysis for perfect form',
        icon: <Dance />
      }
    ]
  },
  {
    id: 'coding',
    title: 'Coding',
    icon: <Code className="w-8 h-8" />,
    color: 'from-orange-500 to-red-500',
    features: [
      {
        title: 'AI Coding Assistant',
        description: 'Smart code completion and suggestions',
        icon: <Code />
      },
      {
        title: 'DSA Explanations',
        description: 'AI-generated tutorials for algorithms',
        icon: <Terminal />
      },
      {
        title: 'Code Debugging Chatbot',
        description: 'Interactive AI help for fixing code issues',
        icon: <Code />
      }
    ]
  }
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-900 to-purple-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">AI-Powered Learning Platform</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Explore innovative learning experiences enhanced by artificial intelligence
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-12">
        {!selectedCategory ? (
          <>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Choose Your Learning Path
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category)}
                  className={`bg-gradient-to-br ${category.color} p-6 rounded-xl text-white hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200`}
                >
                  <div className="flex items-center space-x-4">
                    {category.icon}
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold">{category.title}</h3>
                      <div className="mt-2 flex items-center text-sm">
                        Explore Features <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSelectedCategory(null)}
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                <ChevronLeft className="w-5 h-5" />
                Back to Categories
              </button>
              <h2 className="text-3xl font-bold text-gray-900">
                {selectedCategory.title}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {selectedCategory.features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${selectedCategory.color} text-white flex items-center justify-center mb-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;