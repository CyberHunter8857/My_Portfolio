import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Award, ExternalLink, Calendar, Building2 } from 'lucide-react';

const Certificates = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const certificates = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: 'March 2024',
      credentialId: 'AWS-SA-2024-001',
      description: 'Professional certification demonstrating expertise in designing distributed systems on AWS.',
      image: '/certificates/aws.jpg', // Add your certificate images to public folder
      verifyLink: 'https://aws.amazon.com/verification',
      color: 'orange',
      skills: ['Cloud Architecture', 'AWS', 'DevOps'],
    },
    {
      title: 'Meta Front-End Developer',
      issuer: 'Meta',
      date: 'January 2024',
      credentialId: 'META-FE-2024-001',
      description: 'Professional certification in modern front-end development with React and responsive design.',
      image: '/certificates/meta.jpg',
      verifyLink: 'https://coursera.org/verify',
      color: 'blue',
      skills: ['React', 'JavaScript', 'UI/UX'],
    },
    {
      title: 'Google IT Support Professional',
      issuer: 'Google',
      date: 'November 2023',
      credentialId: 'GOOGLE-IT-2023-001',
      description: 'Comprehensive certification covering IT fundamentals, networking, and system administration.',
      image: '/certificates/google.jpg',
      verifyLink: 'https://coursera.org/verify',
      color: 'green',
      skills: ['Linux', 'Networking', 'Troubleshooting'],
    },
    {
      title: 'IoT Development Specialization',
      issuer: 'University of California',
      date: 'September 2023',
      credentialId: 'UC-IOT-2023-001',
      description: 'Advanced certification in IoT systems, embedded programming, and hardware integration.',
      image: '/certificates/iot.jpg',
      verifyLink: 'https://coursera.org/verify',
      color: 'purple',
      skills: ['ESP32', 'Arduino', 'IoT'],
    },
    {
      title: 'MongoDB Developer Certification',
      issuer: 'MongoDB University',
      date: 'July 2023',
      credentialId: 'MONGO-DEV-2023-001',
      description: 'Professional certification in MongoDB database design, optimization, and best practices.',
      image: '/certificates/mongodb.jpg',
      verifyLink: 'https://university.mongodb.com/verify',
      color: 'teal',
      skills: ['MongoDB', 'NoSQL', 'Database Design'],
    },
    {
      title: 'Python for Data Science',
      issuer: 'IBM',
      date: 'May 2023',
      credentialId: 'IBM-PY-2023-001',
      description: 'Certification in Python programming for data analysis, visualization, and machine learning.',
      image: '/certificates/python.jpg',
      verifyLink: 'https://coursera.org/verify',
      color: 'indigo',
      skills: ['Python', 'Data Science', 'Pandas'],
    },
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        border: 'border-blue-500/20',
        bg: 'from-blue-500/5 to-blue-600/10',
        text: 'text-blue-400',
        icon: 'bg-blue-500/10 text-blue-400',
        badge: 'bg-blue-500/20 text-blue-300',
        hover: 'group-hover:border-blue-400/40 group-hover:shadow-blue-500/10',
        glow: 'group-hover:shadow-blue-500/20',
      },
      green: {
        border: 'border-emerald-500/20',
        bg: 'from-emerald-500/5 to-emerald-600/10',
        text: 'text-emerald-400',
        icon: 'bg-emerald-500/10 text-emerald-400',
        badge: 'bg-emerald-500/20 text-emerald-300',
        hover: 'group-hover:border-emerald-400/40 group-hover:shadow-emerald-500/10',
        glow: 'group-hover:shadow-emerald-500/20',
      },
      purple: {
        border: 'border-purple-500/20',
        bg: 'from-purple-500/5 to-purple-600/10',
        text: 'text-purple-400',
        icon: 'bg-purple-500/10 text-purple-400',
        badge: 'bg-purple-500/20 text-purple-300',
        hover: 'group-hover:border-purple-400/40 group-hover:shadow-purple-500/10',
        glow: 'group-hover:shadow-purple-500/20',
      },
      indigo: {
        border: 'border-indigo-500/20',
        bg: 'from-indigo-500/5 to-indigo-600/10',
        text: 'text-indigo-400',
        icon: 'bg-indigo-500/10 text-indigo-400',
        badge: 'bg-indigo-500/20 text-indigo-300',
        hover: 'group-hover:border-indigo-400/40 group-hover:shadow-indigo-500/10',
        glow: 'group-hover:shadow-indigo-500/20',
      },
      orange: {
        border: 'border-orange-500/20',
        bg: 'from-orange-500/5 to-orange-600/10',
        text: 'text-orange-400',
        icon: 'bg-orange-500/10 text-orange-400',
        badge: 'bg-orange-500/20 text-orange-300',
        hover: 'group-hover:border-orange-400/40 group-hover:shadow-orange-500/10',
        glow: 'group-hover:shadow-orange-500/20',
      },
      teal: {
        border: 'border-teal-500/20',
        bg: 'from-teal-500/5 to-teal-600/10',
        text: 'text-teal-400',
        icon: 'bg-teal-500/10 text-teal-400',
        badge: 'bg-teal-500/20 text-teal-300',
        hover: 'group-hover:border-teal-400/40 group-hover:shadow-teal-500/10',
        glow: 'group-hover:shadow-teal-500/20',
      },
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="certificates" className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-300">
            Certifications & Achievements
          </h2>
          <div className="mx-auto mb-6 h-0.5 w-20 bg-slate-400"></div>
          <p className="font-grotesk text-md mx-auto max-w-2xl text-slate-400">
            Professional certifications validating my expertise across cloud computing,
            web development, IoT, and data technologies.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, index) => {
            const colors = getColorClasses(cert.color);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative rounded-2xl border ${colors.border} bg-gradient-to-br ${colors.bg} backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] ${colors.hover} hover:shadow-xl ${colors.glow} overflow-hidden`}
              >
                {/* Certificate Image/Icon Header */}
                <div className="relative h-40 overflow-hidden rounded-t-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6">
                  <div className="flex h-full items-center justify-center">
                    <motion.div
                      animate={{
                        rotate: hoveredCard === index ? 360 : 0,
                        scale: hoveredCard === index ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.6 }}
                      className={`flex h-20 w-20 items-center justify-center rounded-2xl ${colors.icon}`}
                    >
                      <Award className="h-10 w-10" />
                    </motion.div>
                  </div>

                  {/* Decorative Corner Badge */}
                  <div className="absolute top-4 right-4">
                    <div className={`rounded-full ${colors.badge} px-3 py-1 text-xs font-semibold`}>
                      Verified
                    </div>
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className={`mb-2 text-lg font-bold ${colors.text} line-clamp-2`}>
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <div className="mb-3 flex items-center gap-2 text-sm text-slate-400">
                    <Building2 className="h-4 w-4" />
                    <span className="font-medium">{cert.issuer}</span>
                  </div>

                  {/* Date */}
                  <div className="mb-4 flex items-center gap-2 text-sm text-slate-400">
                    <Calendar className="h-4 w-4" />
                    <span>{cert.date}</span>
                  </div>

                  {/* Description */}
                  <p className="mb-4 text-sm text-slate-400 line-clamp-3">
                    {cert.description}
                  </p>

                  {/* Skills Tags */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="rounded-full border border-slate-700 bg-slate-800/50 px-3 py-1 text-xs text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Credential ID */}
                  <div className="mb-4 rounded-lg bg-slate-800/50 p-3">
                    <p className="text-xs text-slate-500">Credential ID</p>
                    <p className="font-code text-xs text-slate-300">
                      {cert.credentialId}
                    </p>
                  </div>

                  {/* Verify Link */}
                  <a
                    href={cert.verifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 rounded-lg border ${colors.border} ${colors.bg} px-4 py-2.5 text-sm font-medium ${colors.text} transition-all duration-300 hover:scale-105 ${colors.hover}`}
                  >
                    <span>Verify Certificate</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>

                {/* Hover Glow Effect */}
                <motion.div
                  animate={{
                    opacity: hoveredCard === index ? 0.1 : 0,
                  }}
                  className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br ${colors.bg}`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          <div className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-6 text-center backdrop-blur-sm">
            <div className="mb-2 text-3xl font-bold text-purple-400">
              {certificates.length}
            </div>
            <div className="text-sm text-slate-400">Total Certificates</div>
          </div>
          <div className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-6 text-center backdrop-blur-sm">
            <div className="mb-2 text-3xl font-bold text-blue-400">5</div>
            <div className="text-sm text-slate-400">Platforms</div>
          </div>
          <div className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-6 text-center backdrop-blur-sm">
            <div className="mb-2 text-3xl font-bold text-emerald-400">100%</div>
            <div className="text-sm text-slate-400">Verified</div>
          </div>
          <div className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-6 text-center backdrop-blur-sm">
            <div className="mb-2 text-3xl font-bold text-orange-400">2024</div>
            <div className="text-sm text-slate-400">Latest Year</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
