'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader2, CheckCircle, AlertCircle, User, Mail, Phone, MessageSquare, Calendar, Home, Sparkles, X } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'

interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
  serviceType: string
  preferredDate?: string
  propertyName?: string
}

interface ContactFormDialogProps {
  trigger: React.ReactNode
  title?: string
  description?: string
  serviceType: string
  propertyName?: string
}

export default function ContactFormDialog({
  trigger,
  title = "Get in Touch",
  description = "Fill out the form below and we'll get back to you within 24 hours.",
  serviceType,
  propertyName
}: ContactFormDialogProps) {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    serviceType,
    preferredDate: '',
    propertyName: propertyName || ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        serviceType,
        preferredDate: '',
        propertyName: propertyName || ''
      })

      // Close dialog after 3 seconds
      setTimeout(() => {
        setOpen(false)
        setSuccess(false)
      }, 3000)

    } catch (error) {
      setError('Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      serviceType,
      preferredDate: '',
      propertyName: propertyName || ''
    })
    setError('')
    setSuccess(false)
  }

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen)
    if (!isOpen) {
      resetForm()
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg w-[95vw] max-h-[90vh] overflow-hidden p-0 bg-white border-0 shadow-2xl">
        <div className="relative">
          {/* Premium Header with Gradient */}
          <div className="relative bg-gradient-to-br from-accent via-orange-400 to-amber-400 p-8 text-black overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12" />

            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Sparkles size={20} className="text-black" />
                </div>
                <div>
                  <DialogTitle className="text-2xl font-bold text-black leading-tight">
                    {title}
                  </DialogTitle>
                  <div className="text-sm text-black/80 font-medium tracking-wide">
                    PREMIUM EXPERIENCE AWAITS
                  </div>
                </div>
              </div>
              <DialogDescription className="text-black/90 font-medium leading-relaxed">
                {description}
              </DialogDescription>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-8 max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            <AnimatePresence mode="wait">
              {success ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/25">
                    <CheckCircle size={40} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Thank you for your interest in our premium spaces. Our team will reach out to you within 24 hours.
                  </p>
                  <div className="bg-accent/10 border border-accent/20 rounded-xl p-4">
                    <p className="text-sm font-semibold text-accent">
                      ✨ What happens next?
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      We'll send you detailed information and schedule a personalized tour.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {propertyName && (
                    <div className="bg-gradient-to-r from-accent/10 to-orange-50 border border-accent/20 rounded-xl p-4 mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Home size={16} className="text-accent" />
                        <span className="text-sm font-semibold text-accent uppercase tracking-wide">
                          Property Inquiry
                        </span>
                      </div>
                      <p className="font-bold text-gray-900">{propertyName}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name Field */}
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                        <User size={14} className="text-accent" />
                        Full Name *
                      </Label>
                      <div className="relative group">
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all duration-300 bg-white placeholder-gray-400 font-medium group-hover:border-gray-300"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                        <Mail size={14} className="text-accent" />
                        Email Address *
                      </Label>
                      <div className="relative group">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all duration-300 bg-white placeholder-gray-400 font-medium group-hover:border-gray-300"
                          placeholder="Enter your email address"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Phone Field */}
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                        <Phone size={14} className="text-accent" />
                        Phone Number *
                      </Label>
                      <div className="relative group">
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all duration-300 bg-white placeholder-gray-400 font-medium group-hover:border-gray-300"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    {/* Preferred Date */}
                    <div className="space-y-2">
                      <Label htmlFor="preferredDate" className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                        <Calendar size={14} className="text-accent" />
                        Preferred Move-in Date
                      </Label>
                      <div className="relative group">
                        <input
                          id="preferredDate"
                          name="preferredDate"
                          type="date"
                          value={formData.preferredDate}
                          onChange={handleInputChange}
                          className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all duration-300 bg-white font-medium group-hover:border-gray-300"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Service Type (if not property specific) */}
                  {!propertyName && (
                    <div className="space-y-2">
                      <Label htmlFor="serviceType" className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                        <Home size={14} className="text-accent" />
                        Interested In
                      </Label>
                      <div className="relative group">
                        <select
                          id="serviceType"
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all duration-300 bg-white font-medium group-hover:border-gray-300 appearance-none cursor-pointer"
                        >
                          <option value="Co-living">Co-living Spaces</option>
                          <option value="Long-term Rentals">Long-term Rentals</option>
                          <option value="Short-term Rentals">Short-term Rentals</option>
                          <option value="PG near Eon IT Park">PG near Eon IT Park</option>
                          <option value="Single Room PG">Single Room PG</option>
                        </select>
                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Message Field */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                      <MessageSquare size={14} className="text-accent" />
                      Message
                    </Label>
                    <div className="relative group">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all duration-300 bg-white placeholder-gray-400 font-medium group-hover:border-gray-300 resize-none"
                        placeholder="Tell us about your requirements and preferences..."
                      />
                    </div>
                  </div>

                  {/* Error Message */}
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      className="flex items-center gap-3 text-red-700 text-sm bg-red-50 border border-red-200 p-4 rounded-xl"
                    >
                      <AlertCircle size={18} className="text-red-500 flex-shrink-0" />
                      <span className="font-medium">{error}</span>
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-accent to-orange-400 text-black font-bold py-4 rounded-xl hover:shadow-xl hover:shadow-accent/25 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3 transform hover:scale-[1.02] disabled:hover:scale-100 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-400 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                    <div className="relative z-10 flex items-center gap-3">
                      {loading ? (
                        <>
                          <Loader2 size={20} className="animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <motion.div
                            animate={{ x: [0, 4, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                          >
                            →
                          </motion.div>
                        </>
                      )}
                    </div>
                  </button>

                  {/* Privacy Notice */}
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <p className="text-xs text-gray-600 text-center leading-relaxed">
                      🔒 Your information is secure and encrypted. We only use it to provide you with personalized assistance and will never share it with third parties.
                    </p>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
