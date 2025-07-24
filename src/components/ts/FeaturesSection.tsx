import React from "react";
import { Rocket, Lightbulb, Lock, Settings, Headset, TrendingUp } from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Blazing Fast Performance",
    description: "Experience unparalleled speed in every interaction with zero latency that disrupts your productivity.",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Intuitive Design",
    description: "Clean, user-friendly interface designed for seamless onboarding and effortless navigation.",
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Enterprise-Grade Security",
    description: "Your data protected with cutting-edge encryption and industry-standard security protocols.",
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Flexible Customization",
    description: "Tailor settings and appearance to your unique workflow requirements.",
  },
  {
    icon: <Headset className="w-6 h-6" />,
    title: "Priority Support",
    description: "Our expert team provides 24/7 assistance to ensure uninterrupted operations.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Advanced Analytics",
    description: "Gain valuable insights through powerful yet easy-to-understand data visualization tools.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Vapora</span>?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">Premium features designed to transform your workflow and creativity.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative p-8 h-full">
                <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-600 dark:text-blue-400 mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
