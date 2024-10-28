'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Content } from "@prismicio/client"
import { PrismicRichText, SliceComponentProps } from "@prismicio/react"
import { Phone, Mail, MapPin } from "lucide-react"

export type ContactProps = SliceComponentProps<Content.ContactSlice>

const Contact = ({ slice }: ContactProps): JSX.Element => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  })
  const [charCount, setCharCount] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState(prev => ({ ...prev, [name]: value }))
    if (name === 'message') {
      setCharCount(value.length)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      // Simulating an API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log('Form submitted:', formState)
      // Reset form after successful submission
      setFormState({ firstName: "", lastName: "", email: "", phone: "", message: "" })
      setCharCount(0)
    } catch (error) {
      setSubmitError("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      className="py-16 px-4 md:px-8 bg-gradient-to-br from-green-50 to-blue-50"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="text-6xl font-bold mb-4 text-gray-800">
            <PrismicRichText field={slice.primary.heading} />
          </div>
          <div className="text-lg text-gray-600">
            <PrismicRichText field={slice.primary.description} />
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6 text-primary" />
              <span className="text-lg">{slice.primary.phone_number}</span>
            </div>

            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 text-primary" />
              <span className="text-lg">{slice.primary.email}</span>
            </div>

            <div className="flex items-center space-x-4">
              <MapPin className="h-6 w-6 text-primary" />
              <span className="text-lg">
                {slice.primary.location}
              </span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="text-4xl font-bold mb-4 text-gray-800">
            <PrismicRichText field={slice.primary.sub_heading} />
          </div>
          <div className="text-gray-600 mb-6">
            <PrismicRichText field={slice.primary.message} />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                placeholder="First name"
                name="firstName"
                value={formState.firstName}
                onChange={handleInputChange}
                required
              />
              <Input
                placeholder="Last name"
                name="lastName"
                value={formState.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
            <Input
              placeholder="Your email"
              type="email"
              name="email"
              value={formState.email}
              onChange={handleInputChange}
              required
            />
            <Input
              placeholder="Phone number"
              type="tel"
              name="phone"
              value={formState.phone}
              onChange={handleInputChange}
            />
            <div>
              <Textarea
                placeholder="How can we help?"
                rows={4}
                className="resize-none"
                maxLength={120}
                name="message"
                value={formState.message}
                onChange={handleInputChange}
                required
              />
              <p className="text-right text-gray-400 text-sm mt-1">{charCount}/120</p>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 text-white py-2 rounded-md transition-colors"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>

            {submitError && (
              <p className="text-red-500 text-center">{submitError}</p>
            )}

            <p className="mt-4 text-sm text-gray-500 text-center">
              We value your feedback and are continuously working to improve.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact