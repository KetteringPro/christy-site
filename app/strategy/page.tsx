'use client'

import { useState, useEffect } from 'react'
import StrategyContent from './strategy-content'

export default function StrategyPage() {
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [error, setError] = useState('')

  // Check if already authenticated in this session
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const auth = sessionStorage.getItem('kpe-strategy-auth')
      if (auth === 'true') {
        setIsAuthenticated(true)
      }
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Password check (you'll set this in .env.local)
    const correctPassword = process.env.NEXT_PUBLIC_STRATEGY_PASSWORD || 'temporary-password'
    
    if (password === correctPassword) {
      setIsAuthenticated(true)
      sessionStorage.setItem('kpe-strategy-auth', 'true')
      setError('')
    } else {
      setError('Incorrect password')
      setPassword('')
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">
              ketteringPro Enterprise
            </h1>
            <h2 className="text-xl text-gray-400">
              Strategic Plan 2025-2035
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Access Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter password"
                autoFocus
              />
              {error && (
                <p className="mt-2 text-sm text-red-400">{error}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
            >
              Access Strategic Plan
            </button>
          </form>

          <p className="mt-6 text-sm text-gray-500 text-center">
            This document is confidential and intended for authorized investors only.
          </p>
        </div>
      </div>
    )
  }

  return <StrategyContent />
}
