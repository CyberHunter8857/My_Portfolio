import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const HobbiesComponent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const hobbies = [
    { title: 'Gaming', percentage: 90, icon: '🎮', color: '#3B82F6' },
    { title: 'Music', percentage: 85, icon: '🎵', color: '#8B5CF6' },
    { title: 'Movies & Series', percentage: 80, icon: '🎬', color: '#EF4444' },
    { title: 'Web Development', percentage: 85, icon: '💻', color: '#10B981' },
    {
      title: 'Agentic AI & ML',
      percentage: 80,
      icon: '🤖',
      color: '#A855F7',
    },
    {
      title: 'Reading & Learning',
      percentage: 75,
      icon: '📚',
      color: '#F59E0B',
    },
  ];

  const HobbyCard = ({ hobby }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="relative flex scale-95 flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-transform duration-300"
    >
      {/* Icon */}
      <div className="mb-3 text-4xl">{hobby.icon}</div>

      {/* Title */}
      <h3 className="mb-2 text-lg font-semibold text-slate-300">
        {hobby.title}
      </h3>

      {/* Progress bar */}
      <div className="flex w-full max-w-[140px] items-center gap-2">
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-700">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: hobby.color }}
            initial={{ width: 0 }}
            animate={isInView ? { width: `${hobby.percentage}%` } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
        </div>
        <span className="text-xs font-medium text-slate-400">
          {hobby.percentage}%
        </span>
      </div>
    </motion.div>
  );

  return (
    <div className="py-16" ref={ref}>
      <div className="mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-slate-300">
            Hobbies & Interests
          </h2>
          <div className="mx-auto mb-4 h-0.5 w-16 bg-slate-400"></div>
          <p className="mx-auto max-w-2xl text-slate-400">
            Beyond coding, these are the passions that keep me creative and
            motivated
          </p>
        </motion.div>

        {/* Swiper Wrapper with Fade */}
        <div className="relative">
          <Swiper
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            modules={[Autoplay]}
            className="w-full max-w-6xl"
          >
            {hobbies.map((hobby, index) => (
              <SwiperSlide
                key={index}
                className="flex w-[280px] items-center justify-center"
              >
                <HobbyCard hobby={hobby} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HobbiesComponent;
