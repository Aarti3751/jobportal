import React, { useState, useEffect } from 'react';

const JobForm = ({ onSubmit, jobToEdit }) => {
  const [job, setJob] = useState({
    title: '',
    description: '',
    companyName: '',
    location: '',
    salaryRange: { min: '', max: '' },
    type: 'Full-time',
  });

  useEffect(() => {
    if (jobToEdit) setJob(jobToEdit);
  }, [jobToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'min' || name === 'max') {
      setJob({ ...job, salaryRange: { ...job.salaryRange, [name]: value } });
    } else {
      setJob({ ...job, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(job);
    }
    setJob({
      title: '',
      description: '',
      companyName: '',
      location: '',
      salaryRange: { min: '', max: '' },
      type: 'Full-time',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 py-12 px-4 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl animate-bounce"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-400/20 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-0 w-16 h-16 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
      
      <div className="max-w-2xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8 transform transition-all duration-1000 ease-out">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 bg-gradient-to-r from-yellow-200 to-pink-200 bg-clip-text text-transparent animate-pulse">
            {jobToEdit ? "✨ Update Job Posting" : "🚀 Create New Job"}
          </h1>
          <p className="text-blue-100 text-lg opacity-90">
            Fill in the details to post your amazing job opportunity
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 transform transition-all duration-700 hover:shadow-3xl hover:scale-[1.02]">
          <div onSubmit={handleSubmit} className="space-y-6">
            {/* Job Title */}
            <div className="group">
              <label className="block text-white font-semibold mb-2 text-sm uppercase tracking-wide group-hover:text-yellow-200 transition-colors duration-300">
                📝 Job Title
              </label>
              <input 
                name="title" 
                value={job.title} 
                onChange={handleChange} 
                placeholder="e.g. Senior Frontend Developer" 
                required 
                className="w-full px-4 py-3 bg-white/90 border-2 border-transparent rounded-xl focus:outline-none focus:border-yellow-400 focus:bg-white focus:shadow-lg transition-all duration-300 text-gray-800 placeholder-gray-500 hover:bg-white hover:shadow-md transform hover:scale-[1.02] focus:scale-[1.02]"
              />
            </div>

            {/* Description */}
            <div className="group">
              <label className="block text-white font-semibold mb-2 text-sm uppercase tracking-wide group-hover:text-yellow-200 transition-colors duration-300">
                📄 Job Description
              </label>
              <textarea 
                name="description" 
                value={job.description} 
                onChange={handleChange} 
                placeholder="Describe the role, responsibilities, and requirements..."
                required 
                rows="4"
                className="w-full px-4 py-3 bg-white/90 border-2 border-transparent rounded-xl focus:outline-none focus:border-yellow-400 focus:bg-white focus:shadow-lg transition-all duration-300 text-gray-800 placeholder-gray-500 hover:bg-white hover:shadow-md transform hover:scale-[1.02] focus:scale-[1.02] resize-none"
              />
            </div>

            {/* Company and Location Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group">
                <label className="block text-white font-semibold mb-2 text-sm uppercase tracking-wide group-hover:text-yellow-200 transition-colors duration-300">
                  🏢 Company Name
                </label>
                <input 
                  name="companyName" 
                  value={job.companyName} 
                  onChange={handleChange} 
                  placeholder="e.g. TechCorp Inc." 
                  required 
                  className="w-full px-4 py-3 bg-white/90 border-2 border-transparent rounded-xl focus:outline-none focus:border-yellow-400 focus:bg-white focus:shadow-lg transition-all duration-300 text-gray-800 placeholder-gray-500 hover:bg-white hover:shadow-md transform hover:scale-[1.02] focus:scale-[1.02]"
                />
              </div>

              <div className="group">
                <label className="block text-white font-semibold mb-2 text-sm uppercase tracking-wide group-hover:text-yellow-200 transition-colors duration-300">
                  📍 Location
                </label>
                <input 
                  name="location" 
                  value={job.location} 
                  onChange={handleChange} 
                  placeholder="e.g. San Francisco, CA" 
                  required 
                  className="w-full px-4 py-3 bg-white/90 border-2 border-transparent rounded-xl focus:outline-none focus:border-yellow-400 focus:bg-white focus:shadow-lg transition-all duration-300 text-gray-800 placeholder-gray-500 hover:bg-white hover:shadow-md transform hover:scale-[1.02] focus:scale-[1.02]"
                />
              </div>
            </div>

            {/* Salary Range */}
            <div className="group">
              <label className="block text-white font-semibold mb-2 text-sm uppercase tracking-wide group-hover:text-yellow-200 transition-colors duration-300">
                💰 Salary Range
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <span className="absolute left-4 top-3 text-gray-600 font-bold">$</span>
                  <input 
                    name="min" 
                    type="number"
                    value={job.salaryRange.min} 
                    onChange={handleChange} 
                    placeholder="50000" 
                    required 
                    className="w-full pl-8 pr-4 py-3 bg-white/90 border-2 border-transparent rounded-xl focus:outline-none focus:border-yellow-400 focus:bg-white focus:shadow-lg transition-all duration-300 text-gray-800 placeholder-gray-500 hover:bg-white hover:shadow-md transform hover:scale-[1.02] focus:scale-[1.02]"
                  />
                  <label className="text-xs text-blue-100 mt-1 block">Minimum</label>
                </div>
                <div className="relative">
                  <span className="absolute left-4 top-3 text-gray-600 font-bold">$</span>
                  <input 
                    name="max" 
                    type="number"
                    value={job.salaryRange.max} 
                    onChange={handleChange} 
                    placeholder="100000" 
                    required 
                    className="w-full pl-8 pr-4 py-3 bg-white/90 border-2 border-transparent rounded-xl focus:outline-none focus:border-yellow-400 focus:bg-white focus:shadow-lg transition-all duration-300 text-gray-800 placeholder-gray-500 hover:bg-white hover:shadow-md transform hover:scale-[1.02] focus:scale-[1.02]"
                  />
                  <label className="text-xs text-blue-100 mt-1 block">Maximum</label>
                </div>
              </div>
            </div>

            {/* Job Type */}
            <div className="group">
              <label className="block text-white font-semibold mb-2 text-sm uppercase tracking-wide group-hover:text-yellow-200 transition-colors duration-300">
                ⏰ Employment Type
              </label>
              <select 
                name="type" 
                value={job.type} 
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/90 border-2 border-transparent rounded-xl focus:outline-none focus:border-yellow-400 focus:bg-white focus:shadow-lg transition-all duration-300 text-gray-800 hover:bg-white hover:shadow-md transform hover:scale-[1.02] focus:scale-[1.02] cursor-pointer"
              >
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button 
                type="button"
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:from-yellow-300 hover:via-orange-400 hover:to-red-400 focus:outline-none focus:ring-4 focus:ring-yellow-300/50 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <span className="relative flex items-center justify-center text-lg font-extrabold">
                  {jobToEdit ? "✨ Update Job Posting" : "🚀 Create Job Posting"}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-blue-200/80 text-sm">
            Create amazing job opportunities with our beautiful form ✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobForm;