'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendar, FaMapMarkerAlt, FaClock, FaQuran } from 'react-icons/fa';
import Footer from '../../../components/Footer';
import { Amiri } from 'next/font/google';

interface Event {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  eventbriteUrl: string;
  image: string;
  isPast?: boolean;
  hadith?: string;
  hadithSource?: string;
}

const amiri = Amiri({ 
  weight: ['400', '700'],
  subsets: ['arabic'] 
});

const secondHadith = {
  arabic: "مَنْ سَنَّ فِي الْإِسْلَامِ سُنَّةً حَسَنَةً",
  english: "Whoever starts a good tradition in Islam",
  translation: "Whoever starts a good tradition in Islam will have its reward and the reward of those who act upon it after them, without any decrease in their rewards. And whoever starts an evil tradition in Islam will bear its sin and the sin of those who act upon it after them, without any decrease in their sins.",
  source: "Sahih Muslim 1017",
  narrator: "Narrated by Jarir ibn Abdullah (رضي الله عنه)"
};

export default function Events() {
  const upcomingEvent = {
    title: "United For Orphans Tour with Sheikh Assim Al Hakeem",
    date: "TBD",
    time: "TBD",
    location: "TBD",
    description: "Join us for an inspiring evening with the renowned Sheikh Assim Al Hakeem as he speaks about the virtues of supporting orphans in Islam. This special event will highlight our initiatives to help orphans worldwide and provide opportunities for our community to make a lasting impact in their lives.",
    image: "/assim.jpeg",
    registrationLink: "#"
  };

  const pastEvents: Event[] = [
    {
      title: "Afghanistan Fundraiser Dinner",
      date: "February 23, 2024",
      time: "6:30 PM EST",
      location: "Paradise Banquet Hall, Vaughan",
      description: "Alhamdulillah, with your generous support, we raised $15,000 in a single night to provide food for Afghan students for a full year. The Prophet ﷺ said, 'The best charity is giving water to drink, and indeed it is like freeing a slave.' In the same spirit, providing food to those in need carries immense rewards.",
      eventbriteUrl: "/global-impacts/afghanistan",
      image: "/fundraiser.jpeg",
      isPast: true,
      hadith: "Whoever feeds a fasting person will have a reward like that of the fasting person, without any reduction in his reward.",
      hadithSource: "Sunan al-Tirmidhi"
    }
  ];

  const upcomingEvents: Event[] = [
    {
      title: "Ramadan Food Box Distribution",
      date: "March 10, 2024",
      time: "11:00 AM EST",
      location: "Thorncliffe Neighborhood Office",
      description: "Join us in embodying the spirit of Ramadan through service. The Prophet ﷺ was the most generous of people, and he was most generous during Ramadan.",
      eventbriteUrl: "https://eventbrite.com/ramadan-distribution",
      image: "/ramadan-box.jpg",
      hadith: "He who helps his fellow-Muslim in his time of need, Allah will be there in his time of need.",
      hadithSource: "Sahih Muslim"
    },
    {
      title: "Youth Leadership Workshop",
      date: "April 5, 2024",
      time: "2:00 PM EST",
      location: "Islamic Institute of Toronto",
      description: "A workshop designed for young Muslims aged 15-25 to develop leadership skills, network with peers, and learn about community service opportunities.",
      eventbriteUrl: "https://eventbrite.com/youth-workshop",
      image: "/youth-workshop.jpg"
    },
    {
      title: "Community Health Fair",
      date: "April 20, 2024",
      time: "10:00 AM EST",
      location: "Aga Khan Museum",
      description: "Free health screenings, consultations with healthcare professionals, and informative sessions on maintaining good health. Open to all community members.",
      eventbriteUrl: "https://eventbrite.com/health-fair",
      image: "/health-fair.jpg"
    },
    {
      title: "Education Support Program Launch",
      date: "May 1, 2024",
      time: "5:00 PM EST",
      location: "Toronto Public Library - Thorncliffe Branch",
      description: "Learn about our new initiative to support students with educational resources, tutoring, and mentorship opportunities. Parents and students welcome.",
      eventbriteUrl: "https://eventbrite.com/education-launch",
      image: "/education-program.jpg"
    },
    {
      title: "Eid Festival Planning Meeting",
      date: "May 15, 2024",
      time: "7:00 PM EST",
      location: "Community Center - Meeting Room A",
      description: "Join the planning committee for our upcoming Eid Festival. We need volunteers for various roles including event coordination, food management, and activities planning.",
      eventbriteUrl: "https://eventbrite.com/eid-planning",
      image: "/eid-planning.jpg"
    }
  ];

  const featuredHadith = {
    arabic: "إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ",
    english: "Actions are judged by intentions",
    translation: "Indeed, actions are judged by their intentions, and for everyone is what they intended. So whoever emigrates for the sake of Allah and His Messenger, then their emigration is for Allah and His Messenger. And whoever emigrates for worldly gain or to marry a woman, then their emigration is for what they emigrated for.",
    source: "Sahih al-Bukhari 1",
    narrator: "Narrated by Umar ibn Al-Khattab (رضي الله عنه)"
  };

  const HadithSection = () => (
    <section className="py-16 bg-[#2c3e50] text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[#2c3e50]/10" />
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className={`mb-6 ${amiri.className}`}>
            <h3 className="text-4xl mb-4 leading-relaxed">
              {featuredHadith.arabic}
            </h3>
          </div>
          <p className="text-2xl font-semibold mb-4">
            "{featuredHadith.english}"
          </p>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            {featuredHadith.translation}
          </p>
          <div className="text-sm text-gray-400">
            <p className="mb-1">{featuredHadith.source}</p>
            <p>{featuredHadith.narrator}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );

  const SecondHadithSection = () => (
    <section className="py-16 bg-[#2c3e50] text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[#2c3e50]/10" />
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className={`mb-6 ${amiri.className}`}>
            <h3 className="text-4xl mb-4 leading-relaxed">
              {secondHadith.arabic}
            </h3>
          </div>
          <p className="text-2xl font-semibold mb-4">
            "{secondHadith.english}"
          </p>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            {secondHadith.translation}
          </p>
          <div className="text-sm text-gray-400">
            <p className="mb-1">{secondHadith.source}</p>
            <p>{secondHadith.narrator}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );

  const renderEvent = (event: Event) => (
    <motion.div
      className="bg-white rounded-2xl shadow-lg overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-xl font-bold mb-2">
            {event.title}
          </h3>
          <div className="flex items-center text-sm">
            <FaCalendar className="w-4 h-4 mr-2" />
            <span>{event.date}</span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <FaClock className="w-5 h-5 mr-3" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <FaMapMarkerAlt className="w-5 h-5 mr-3" />
            <span>{event.location}</span>
          </div>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {event.description}
        </p>
        {event.hadith && (
          <motion.div 
            className="mb-6 p-4 bg-gray-50 rounded-lg border-l-4 border-[#2c3e50]"
            whileHover={{ x: 4 }}
          >
            <div className="flex items-start space-x-2">
              <FaQuran className="w-5 h-5 text-[#2c3e50] mt-1 flex-shrink-0" />
              <div>
                <p className="text-gray-700 italic">"{event.hadith}"</p>
                <p className="text-sm text-gray-500 mt-1">— {event.hadithSource}</p>
              </div>
            </div>
          </motion.div>
        )}
        <motion.a
          href={event.eventbriteUrl}
          target={event.isPast ? '_self' : '_blank'}
          rel={event.isPast ? '' : 'noopener noreferrer'}
          className="inline-block w-full bg-[#2c3e50] text-white text-center px-6 py-3 rounded-full font-semibold hover:bg-[#3a4f63] transition-all duration-300 shadow-md hover:shadow-lg"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {event.isPast ? 'Learn More' : 'Register Now'}
        </motion.a>
      </div>
    </motion.div>
  );

  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden mb-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          className="absolute inset-0 bg-[#2c3e50] pattern-grid-lg"
        />
        
        <div className="container mx-auto px-4 relative">
          <motion.div 
            className="text-center max-w-4xl mx-auto py-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#2c3e50]">
              Upcoming Events
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              Join us in making a difference in our community
            </p>
          </motion.div>
        </div>
      </section>

      {/* First Hadith Section */}
      <HadithSection />

      {/* Featured Event */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className="md:flex flex-col lg:flex-row">
              <div className="lg:w-1/2 relative h-[400px] lg:h-auto group">
                <Image
                  src={upcomingEvent.image}
                  alt={upcomingEvent.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="lg:w-1/2 p-8 lg:p-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="space-y-6"
                >
                  <motion.h2 
                    className="text-3xl lg:text-4xl font-bold text-[#2c3e50] mb-4"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {upcomingEvent.title}
                  </motion.h2>
                  
                  <div className="space-y-4 mb-6">
                    <motion.div 
                      className="flex items-center text-gray-600 hover:text-[#3498db] transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <FaCalendar className="w-6 h-6 mr-3 text-[#3498db]" />
                      <span className="text-lg">{upcomingEvent.date}</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center text-gray-600 hover:text-[#3498db] transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <FaClock className="w-6 h-6 mr-3 text-[#3498db]" />
                      <span className="text-lg">{upcomingEvent.time}</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center text-gray-600 hover:text-[#3498db] transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <FaMapMarkerAlt className="w-6 h-6 mr-3 text-[#3498db]" />
                      <span className="text-lg">{upcomingEvent.location}</span>
                    </motion.div>
                  </div>

                  <motion.p 
                    className="text-gray-600 mb-8 leading-relaxed text-lg"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {upcomingEvent.description}
                  </motion.p>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block w-full sm:w-auto"
                  >
                    <button
                      className="w-full sm:w-auto bg-[#3498db] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-[#2980b9] disabled:opacity-75"
                      disabled
                    >
                      <span className="flex items-center justify-center">
                        <span>Coming Soon!</span>
                        <motion.span
                          className="ml-2"
                          animate={{ 
                            opacity: [1, 0.5, 1],
                            scale: [1, 1.1, 1] 
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity 
                          }}
                        >
                          ✨
                        </motion.span>
                      </span>
                    </button>
                  </motion.div>

                  <p className="text-sm text-gray-500 mt-4 text-center">
                    Registration details will be announced soon. Stay tuned!
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Second Hadith Section */}
      <SecondHadithSection />

      {/* Past Events Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-[#2c3e50]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Past Events
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pastEvents.map((event, index) => (
              <div key={index}>
                {renderEvent(event)}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Host Event CTA */}
      <section className="py-16 bg-[#2c3e50]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">
              Want to host an event?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Partner with us to create meaningful community events
            </p>
            <motion.a
              href="/about/contact"
              className="inline-block bg-white text-[#2c3e50] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 