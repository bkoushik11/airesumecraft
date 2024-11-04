import React, { useState } from 'react';
import { FileText, Upload } from 'lucide-react';

export default function CVGenerator() {
  const [resume, setResume] = useState<File | null>(null);
  const [additionalInfo, setAdditionalInfo] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Implement CV generation logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500">
          CV Generator
        </h1>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Upload Existing Resume (Optional)
              </label>
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setResume(e.target.files?.[0] || null)}
                  className="hidden"
                  id="resume-upload"
                />
                <label
                  htmlFor="resume-upload"
                  className="cursor-pointer flex flex-col items-center space-y-2"
                >
                  <Upload className="h-8 w-8 text-gray-400" />
                  <span className="text-sm text-gray-500">Click to upload or drag and drop</span>
                </label>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Additional Information (Optional)
              </label>
              <textarea
                value={additionalInfo}
                onChange={(e) => setAdditionalInfo(e.target.value)}
                className="w-full h-32 rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                placeholder="Add any additional information you'd like to include in your CV..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 text-white rounded-lg hover:from-blue-600 hover:via-purple-600 hover:to-teal-600 transition-all duration-300"
            >
              Generate CV
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}