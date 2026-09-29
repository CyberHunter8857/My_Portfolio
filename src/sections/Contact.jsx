import React, { useState, useEffect } from 'react';
import {
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Twitter,
  Send,
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.async = true;
    script.onload = () => {
      window.emailjs.init('YOUR_PUBLIC_KEY');
    };
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Mayur Tamanke',
      };

      const response = await window.emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      if (response.status === 200) {
        setStatus({
          type: 'success',
          message: "Message sent successfully! I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.',
      });
      console.error('EmailJS Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-b py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="pb-2 text-center text-4xl font-bold text-slate-300">
          Get In Touch
        </h1>
        <div className="mx-auto mb-8 h-0.5 w-20 bg-slate-400"></div>
        <p className="mx-auto max-w-2xl pb-8 text-center text-base leading-relaxed text-slate-400">
          Have a project in mind or want to collaborate? Feel free to reach out!
          I'm always excited to work on challenging projects and bring
          innovative ideas to life.
        </p>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Side - Profile Card */}
          <div className="flex">
            <div className="flex w-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-900/30 shadow-xl backdrop-blur-md">
              {/* Card Header with Background */}
              <div className="relative h-32 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
                <div className="absolute inset-0 bg-black/20"></div>
              </div>

              {/* Profile Section */}
              <div className="relative flex flex-grow flex-col px-8 pb-8">
                {/* Avatar */}
                <div className="absolute -top-16 left-8">
                  <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-slate-900 bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-xl">
                    <img
                      src="assets/profile/profilepic.jpg  "
                      alt="profile"
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex h-full flex-col justify-between pt-20">
                  <div>
                    <h3 className="mb-1 text-2xl font-bold text-slate-200">
                      Mayur Tamanke
                    </h3>
                    <p className="text-sm text-slate-400">
                      Full Stack Developer
                    </p>
                  </div>

                  <p className="my-6 text-sm leading-relaxed text-slate-400">
                    Passionate about creating innovative solutions and bringing
                    ideas to life through code. Always excited to work on
                    challenging projects!
                  </p>

                  {/* Contact Info */}
                  <div className="mb-6 space-y-3">
                    <div className="flex items-center gap-3 text-sm text-slate-300">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10">
                        <Mail className="h-4 w-4 text-blue-400" />
                      </div>
                      <span>mayurtamanke9423@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-300">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10">
                        <Phone className="h-4 w-4 text-emerald-400" />
                      </div>
                      <span>+91 8857023144</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-300">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/10">
                        <MapPin className="h-4 w-4 text-red-400" />
                      </div>
                      <span>Pune, India</span>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="border-t border-slate-700/50 pt-6">
                    <p className="mb-3 text-sm font-semibold text-slate-400">
                      Connect with me
                    </p>
                    <div className="flex gap-3">
                      <a
                        href="https://github.com/CyberHunter8857"
                        className="flex h-10 flex-1 items-center justify-center rounded-lg bg-slate-800/50 text-slate-300 transition-all hover:scale-105 hover:bg-blue-500 hover:text-white"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                      <a
                        href="https://in.linkedin.com/in/mayur-tamanke"
                        className="flex h-10 flex-1 items-center justify-center rounded-lg bg-slate-800/50 text-slate-300 transition-all hover:scale-105 hover:bg-blue-400 hover:text-white"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a
                        href="https://x.com/mayurtamanke"
                        className="flex h-10 flex-1 items-center justify-center rounded-lg bg-slate-800/50 text-slate-300 transition-all hover:scale-105 hover:bg-blue-300 hover:text-white"
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="flex">
            <div className="flex w-full flex-col justify-between rounded-2xl border border-slate-700/50 bg-slate-900/30 p-8 shadow-xl backdrop-blur-md">
              <h3 className="mb-6 text-2xl font-bold text-slate-300">
                Send a Message
              </h3>

              <div className="flex-grow space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-slate-700/50 bg-slate-800/50 px-4 py-3 text-slate-200 placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-slate-700/50 bg-slate-800/50 px-4 py-3 text-slate-200 placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-slate-700/50 bg-slate-800/50 px-4 py-3 text-slate-200 placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full resize-none rounded-lg border border-slate-700/50 bg-slate-800/50 px-4 py-3 text-slate-200 placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                {status.message && (
                  <div
                    className={`rounded-lg p-4 ${
                      status.type === 'success'
                        ? 'border border-emerald-500/30 bg-emerald-500/10 text-emerald-400'
                        : 'border border-red-500/30 bg-red-500/10 text-red-400'
                    }`}
                  >
                    {status.message}
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 font-semibold text-white transition-all hover:from-blue-600 hover:to-purple-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
