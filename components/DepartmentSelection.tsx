import React from 'react';
import { Zap, Check, ArrowRight } from 'lucide-react';

interface DepartmentSelectionProps {
  onSelect: (deptId: string) => void;
}

const DepartmentSelection: React.FC<DepartmentSelectionProps> = ({ onSelect }) => {
  const departments = [
    {
      id: 'DIT',
      title: 'Digital Infrastructure',
      features: [
        'Network Security',
        'Hardware Support',
        'Application Support'
      ]
    },
    {
      id: 'CREATIVE',
      title: 'Design & Branding',
      features: [
        'Brand Identity',
        'UI/UX Design',
        'Motion Graphics'
      ]
    },
    {
      id: 'HCO',
      title: 'Human Capital',
      features: [
        'Talent Acquisition',
        'Employee Relations',
        'Payroll Systems'
      ]
    },
    {
      id: 'LEGAL',
      title: 'Compliance & Law',
      features: [
        'Contract Review',
        'Risk Assessment',
        'Regulatory Filing'
      ]
    },
    {
      id: 'CRM',
      title: 'Customer Relations',
      features: [
        'Socmed Buzz',
        'Campaign Blast',
        'Event Visit'
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 w-full font-sans flex items-center justify-center p-6 lg:p-12">
      
      <div className="w-full max-w-7xl flex flex-col">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-indigo-600 rounded-full mb-6 shadow-lg shadow-indigo-200">
             <Zap className="w-7 h-7 text-white fill-current" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Select a Department</h1>
          <p className="text-gray-500 text-lg">Choose a department to submit your ticket.</p>
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 w-full justify-items-center">
          {departments.map((dept, index) => (
            <div
              key={index}
              onClick={() => onSelect(dept.id)}
              className="group relative flex flex-col p-6 lg:p-8 rounded-2xl border border-gray-100 bg-white hover:bg-[#1a1f2e] hover:border-[#1a1f2e] transition-all duration-300 cursor-pointer shadow-sm hover:shadow-2xl hover:-translate-y-2 w-full max-w-sm"
            >
              {/* Card Header */}
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-white transition-colors uppercase">
                    {dept.id}
                  </h3>
                  <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors mt-1">
                    {dept.title}
                  </p>
                </div>
                <Zap className="w-5 h-5 text-gray-300 group-hover:text-gray-600 transition-colors flex-shrink-0" />
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-gray-100 my-4 group-hover:bg-gray-700 transition-colors" />

              {/* Features List */}
              <ul className="space-y-3 mb-8 flex-1">
                {dept.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                       <Check className="w-3 h-3 text-green-600 group-hover:text-green-400" strokeWidth={3} />
                    </div>
                    <span className="text-sm font-medium text-gray-600 group-hover:text-gray-300 transition-colors">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                className="w-full py-3 px-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 bg-indigo-50 text-indigo-600 group-hover:bg-blue-600 group-hover:text-white mt-auto"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DepartmentSelection;