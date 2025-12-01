import React, { useState } from 'react';
import { Eye, EyeOff, Shield, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

export default function PasswordChecker() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const checkPassword = (pwd) => {
    const criteria = {
      length: pwd.length >= 8,
      uppercase: /[A-Z]/.test(pwd),
      lowercase: /[a-z]/.test(pwd),
      numbers: /[0-9]/.test(pwd),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(pwd),
      noSpaces: !/\s/.test(pwd)
    };

    const score = Object.values(criteria).filter(Boolean).length;

    let strength = 'Very Weak';
    let color = 'bg-red-500';
    let textColor = 'text-red-600';

    if (score >= 5) {
      strength = 'Strong';
      color = 'bg-green-500';
      textColor = 'text-green-600';
    } else if (score >= 4) {
      strength = 'Moderate';
      color = 'bg-yellow-500';
      textColor = 'text-yellow-600';
    } else if (score >= 2) {
      strength = 'Weak';
      color = 'bg-orange-500';
      textColor = 'text-orange-600';
    }

    const percentage = (score / 6) * 100;

    return { criteria, strength, color, textColor, percentage, score };
  };

  const handlePasswordChange = (e) => {
    const pwd = e.target.value;
    setPassword(pwd);
    if (pwd) {
      setFeedback(checkPassword(pwd));
    } else {
      setFeedback(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-10 h-10 text-indigo-600" />
            <h1 className="text-3xl font-bold text-gray-800">Password Strength Checker</h1>
          </div>

          <p className="text-gray-600 mb-8">
            Create a strong password by meeting all security criteria below
          </p>

          {/* Password Input */}
          <div className="relative mb-6">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
              className="w-full px-4 py-3 pr-12 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none text-lg"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>

          {/* FEEDBACK SECTION */}
          {feedback && (
            <div>
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-gray-700">Password Strength</span>
                  <span className={`text-sm font-bold ${feedback.textColor}`}>
                    {feedback.strength} ({feedback.score}/6)
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full ${feedback.color} transition-all duration-500 rounded-full`}
                    style={{ width: `${feedback.percentage}%` }}
                  />
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <h3 className="font-semibold text-gray-700 mb-3">Security Requirements:</h3>

                <CriteriaItem met={feedback.criteria.length} text="At least 8 characters long" />
                <CriteriaItem met={feedback.criteria.uppercase} text="Contains uppercase letters (A-Z)" />
                <CriteriaItem met={feedback.criteria.lowercase} text="Contains lowercase letters (a-z)" />
                <CriteriaItem met={feedback.criteria.numbers} text="Contains numbers (0-9)" />
                <CriteriaItem met={feedback.criteria.special} text="Contains special characters (!@#$%^&*)" />
                <CriteriaItem met={feedback.criteria.noSpaces} text="No spaces allowed" />
              </div>

              {feedback.score >= 5 ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-green-800 mb-1">Excellent Password!</h4>
                    <p className="text-sm text-green-700">
                      Your password meets all security requirements and is strong.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-amber-800 mb-1">Improve Your Password</h4>
                    <p className="text-sm text-amber-700">
                      Add missing criteria to make your password more secure.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* When no password entered */}
          {!password && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-blue-800 mb-1">Password Security Tips</h4>
                <ul className="text-sm text-blue-700 space-y-1 list-disc list-inside">
                  <li>Use a mix of uppercase and lowercase letters</li>
                  <li>Include numbers and special characters</li>
                  <li>Avoid common words and personal information</li>
                  <li>Make it at least 12 characters for better security</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        <div className="mt-6 text-center text-sm text-gray-600">
          <p>✨ Built with React | Password data is never stored or transmitted</p>
        </div>
      </div>
    </div>
  );
}

// CRITERIA ITEM COMPONENT
function CriteriaItem({ met, text }) {
  return (
    <div className="flex items-center gap-3">
      {met ? (
        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
      ) : (
        <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
      )}
      <span className={`text-sm ${met ? 'text-gray-700' : 'text-gray-500'}`}>{text}</span>
    </div>
  );
}
