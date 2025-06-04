"use client"

import React, { useState } from "react"; // Ensured useState is imported
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

// Assuming these are from shadcn/ui or a similar library
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  // FormMessage, // Commented out as we'll render messages manually for compatibility
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Linkedin, Github, Rss, Send, MapPin, Mail, Phone } from "lucide-react" // Added more icons

// Define a more specific schema for your form if needed
const formSchema = z.object({
  yourname: z.string().min(4, {message: "Name must be at least 4 characters."}).max(50, {message: "Name must be at most 50 characters."}),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(500, { message: "Message must be at most 500 characters." }),
})

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      yourname: "", 
      email: "",
      message: "",
    },
  })

  // Custom modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form submitted:", values);
    // Instead of alert, use custom modal
    setModalMessage("Thank you for your message! This feature is currently under maintenance, but your submission has been logged.");
    setIsModalOpen(true);
    form.reset(); // Optionally reset the form
  }

  // Input field common classes for dark theme
  const inputBaseClasses = "bg-gray-800 border-gray-600 text-gray-200 placeholder-gray-500 focus:border-yellow-500 focus:ring-0 focus:ring-yellow-500/50 rounded-md shadow-sm";
  const labelClasses = "text-gray-300 font-medium mb-1 block";
  const descriptionClasses = "text-xs text-gray-500 mt-1";
  const errorMessageClasses = "text-sm text-red-400 mt-1";

  // Social icon button classes
  const socialButtonClasses = "p-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-yellow-500 rounded-full text-gray-400 hover:text-yellow-400 transition-all duration-300 ease-in-out shadow-md";

  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-gray-800 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">Touch</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind, a question, or just want to connect? I&apos;d love to hear from you. Fill out the form below or reach out via my social channels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Contact Information & Socials Column */}
          <div className="bg-gray-900 p-6 md:p-8 rounded-xl shadow-2xl space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Contact Information</h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-yellow-500 flex-shrink-0" />
                  <span>South Tangerang, Banten, Indonesia</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-yellow-500 flex-shrink-0" />
                  <a href="mailto:minter.prasetyo@example.com" className="hover:text-yellow-400 transition-colors">minter.prasetyo@example.com</a> {/* Replace with actual email */}
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-yellow-500 flex-shrink-0" />
                  <a href="tel:+6281234567890" className="hover:text-yellow-400 transition-colors">+62 123 4567 890</a> {/* Replace with actual phone */}
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Connect With Me</h3>
              <div className="flex flex-wrap gap-4">
                <a href="https://www.linkedin.com/in/minterrgg/" target="_blank" rel="noopener noreferrer" aria-label="Visit my LinkedIn profile" className={socialButtonClasses}>
                    <Linkedin size={22}/>
                </a>
                <a href="https://github.com/minter19" target="_blank" rel="noopener noreferrer" aria-label="Visit my GitHub profile" className={socialButtonClasses}>
                    <Github size={22}/>
                </a>
                <a href="https://learn.microsoft.com/en-gb/users/minterprasetyorajagukguk-8894/" target="_blank" rel="noopener noreferrer" aria-label="Visit my Microsoft Learn Profile" className={socialButtonClasses}>
                    <Rss size={22}/> {/* Rss might not be the best for MS Learn, consider a generic link icon or text */}
                </a>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="aspect-video md:h-64 mt-6">
              <iframe 
                className="w-full h-full border-2 border-gray-700 rounded-lg shadow-lg" 
                title="Google Maps Location Placeholder" 
                src="https://maps.google.com/maps?q=Jakarta&t=&z=13&ie=UTF8&iwloc=&output=embed" // More specific embed URL
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>

          {/* Form Column */}
          <div className="bg-gray-900 p-6 md:p-8 rounded-xl shadow-2xl">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="yourname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={labelClasses}>Your Name</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., John Doe" {...field} className={inputBaseClasses} />
                      </FormControl>
                      {/* Manually rendering error message */}
                      {form.formState.errors.yourname?.message && (
                        <p className={errorMessageClasses}>{form.formState.errors.yourname.message}</p>
                      )}
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={labelClasses}>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="you@example.com" {...field} className={inputBaseClasses} />
                      </FormControl>
                       {/* Manually rendering error message */}
                      {form.formState.errors.email?.message && (
                        <p className={errorMessageClasses}>{form.formState.errors.email.message}</p>
                      )}
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={labelClasses}>Your Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Let me know how I can help or what you're thinking about..." {...field} className={`${inputBaseClasses} min-h-[120px]`} rows={5}/>
                      </FormControl>
                      <FormDescription className={descriptionClasses}>
                        Please provide as much detail as possible.
                      </FormDescription>
                       {/* Manually rendering error message */}
                      {form.formState.errors.message?.message && (
                        <p className={errorMessageClasses}>{form.formState.errors.message.message}</p>
                      )}
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  className="w-full py-3 px-6 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-gray-900 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out text-lg flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Message
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>

      {/* Custom Modal for Submission Feedback */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 p-6 md:p-8 rounded-xl shadow-2xl max-w-md w-full text-center border border-yellow-500">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Message Status</h3>
            <p className="text-gray-300 mb-6">{modalMessage}</p>
            <Button 
              onClick={() => setIsModalOpen(false)}
              className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold rounded-lg transition-colors"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </section>
  )
}
