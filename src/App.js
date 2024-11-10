
import React, { useState, useEffect } from 'react';
import { FaStar, FaHeart, FaGift, FaBirthdayCake, FaMusic } from 'react-icons/fa';
import confetti from 'canvas-confetti';
import './App.css'
const sections = [
  
  
  {
    title: "Reflections",
    icon: <FaStar className="text-yellow-400" />,
    content: `Dear Aksa,

    As I sit here on your birthday, my thoughts are a whirlwind of emotions and memories. It's been a year filled with ups and downs, laughter and tears, moments of pure joy and times of deep struggle. Through it all, you've remained a constant in my life, even when things between us have been far from perfect.

    I remember the day we first met, how your smile lit up the room and how your laughter seemed to make everything brighter. Those early days were filled with such promise and excitement. We were two people discovering each other, learning about our quirks, our dreams, and our fears. It felt like we had found something truly special in each other.

    As time went on, we faced challenges. Long-distance relationships are never easy, and ours has been no exception. The miles between us sometimes felt like an insurmountable obstacle, but we persevered. We found ways to bridge the gap, to make each other feel loved and appreciated even when we couldn't be physically together.

    I think about all the late-night conversations we've had, the silly jokes we've shared, and the dreams we've discussed. I remember how you've been there for me during my lowest moments, offering comfort and support even when you were dealing with your own struggles. Your strength and resilience have always amazed me.`
  },
  {
    title: "Appreciation",
    icon: <FaHeart className="text-red-400" />,
    content: `There's so much about you that I admire and appreciate. Your kindness, your determination, your ability to see the best in people even when they can't see it in themselves. I love how passionate you get about the things you care about, how your eyes light up when you talk about your dreams and ambitions.

    I appreciate the way you've always encouraged me to be a better version of myself. You've pushed me to grow, to face my fears, and to believe in myself. Even during our arguments, I know that at the core, you want what's best for me, just as I want what's best for you.

    I'm grateful for the memories we've created together. The inside jokes that only we understand, the silly nicknames we've given each other, the quiet moments of understanding that pass between us without a word being spoken. These are the threads that have woven the tapestry of our relationship, creating something beautiful and unique.

    I want you to know that I see you, Aksa. I see your struggles, your triumphs, your fears, and your hopes. I see the way you fight to overcome your insecurities, how hard you work to achieve your goals, and how deeply you care for those around you. You are so much more than you give yourself credit for, and I wish you could see yourself through my eyes.`
  },
  {
    title: "Apology",
    icon: <FaGift className="text-purple-400" />,
    content: `As we celebrate your birthday, I also want to take a moment to apologize. I know I haven't always been the partner you deserved. There have been times when I've let you down, when I've failed to understand your feelings or support you in the way you needed. I'm sorry for the times I've made jokes that hurt you, for the moments when I didn't take your concerns seriously enough, and for the occasions when I let my own insecurities and fears create distance between us.

    I'm sorry for the recent fights we've had, for the harsh words that have been exchanged, and for the pain we've caused each other. It breaks my heart to think of the times I've made you feel unappreciated or disrespected. That was never my intention, but I understand that impact matters more than intent.

    I want you to know that I'm committed to doing better. I'm learning from my mistakes, trying to be more mindful of your feelings, and working on being a better listener and a more supportive partner. I know that actions speak louder than words, and I hope that moving forward, I can show you through my actions how much you mean to me.`
  },
  {
    title: "Hope",
    icon: <FaBirthdayCake className="text-pink-400" />,
    content: `As you step into this new year of your life, I want you to know that despite our recent struggles, I still believe in us. I believe in the love we share, in the bond we've built, and in our ability to overcome the challenges we face. Relationships aren't always easy, but I believe that what we have is worth fighting for.

    I hope this year brings you all the joy, success, and happiness you deserve. I hope you continue to chase your dreams with the same passion and determination that I've always admired in you. I hope you find moments of peace and contentment, even in the midst of life's chaos.

    I hope that we can find a way to heal the hurts we've caused each other, to rebuild the trust that's been shaken, and to rediscover the love and happiness we once shared. I'm willing to put in the work, to listen more, to understand better, and to be the partner you need and deserve.

    On your birthday, I want you to know that you are loved, valued, and appreciated. Not just by me, but by all the lives you touch with your kindness and your spirit. You have a gift for making people feel seen and understood, and that's something truly special.`
  },
  {
    title: "Birthday Wishes",
    icon: <FaMusic className="text-blue-400" />,
    content: `So, here's to you, Aksa. Happy Birthday! May this year be filled with laughter, love, and beautiful moments. May you find the strength to overcome any obstacles that come your way. May you continue to grow, to learn, and to become even more of the amazing person you already are.

    I hope you take some time today to celebrate yourself. To recognize all that you've accomplished and all that you are. You deserve to be celebrated, not just today, but every day.

    As you blow out your candles, know that I'm wishing right along with you. Wishing for your happiness, your success, and for all your dreams to come true. And yes, I'm wishing for us too. For healing, for understanding, and for the chance to build something even stronger than before.

    Whatever the future holds, please know that you've made an indelible mark on my life. You've taught me so much about love, about resilience, and about the power of human connection. For that, I will always be grateful.

    Happy Birthday, Aksa. Here's to you, to another year of life, and to all the possibilities that lie ahead. May your day be as beautiful and special as you are.

    With all my love and best wishes,
    [Your Name]`
  }
];

const imageCards = [
  { src: "1.png", alt: "Memory 1" },
  { src: "5.jpg", alt: "Memory 2" },
  { src: "7.jpg", alt: "Memory 4" },
  { src: "3.png", alt: "Memory 3" },
];

function BirthdayMessage() {
  const [showCard, setShowCard] = useState(false);
  const [showFullMessage, setShowFullMessage] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [isConfettiActive, setIsConfettiActive] = useState(false);
  const [showImageCards, setShowImageCards] = useState(false);
  const [showSecondGift, setShowSecondGift] = useState(false);
  const [showTextCards, setShowTextCards] = useState(false);

  useEffect(() => {
    if (isConfettiActive) {
      const duration = 15 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
      }

      const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, { 
          particleCount, 
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } 
        }));
        confetti(Object.assign({}, defaults, { 
          particleCount, 
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } 
        }));
      }, 250);

      return () => clearInterval(interval);
    }
  }, [isConfettiActive]);

  const handleGiftClick = () => {
    setShowCard(true);
    setIsConfettiActive(true);
    setTimeout(() => setShowImageCards(true), 1000);
    setTimeout(() => setShowSecondGift(true), 3000);
  };

  const handleSecondGiftClick = () => {
    setShowTextCards(true);
    setIsConfettiActive(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {!showCard ? (
        <button 
          className="text-white text-2xl flex flex-col items-center space-y-4 bg-transparent border-4 border-pink-500 rounded p-8 transition-all duration-300 hover:scale-110 hover:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
          onClick={handleGiftClick}
        >
          <FaGift className="text-8xl text-pink-500" />
          <span>Welcome To Ahmad's <br /> First Live Application</span>
        </button>
      ) : (
        <div className={`w-full max-w-4xl bg-gray-900 rounded-lg shadow-2xl overflow-hidden transition-all duration-500 ease-in-out transform ${showCard ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
          <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-6 animate-gradient-x">
            <h1 className="text-8xl font-bold text-center text-white mb-2 animate-bounce">Aqsa The Butt</h1>
            <p className="text-6xl text-center text-white animate-pulse">Happiest Birthday</p>
          </div>
          
          {showImageCards && (
            <div className="p-6 bg-gray-800 grid grid-cols-2 gap-4">
              {imageCards.map((card, index) => (
                <div 
                  key={index}
                  className="overflow-hidden rounded-lg shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105"
                  style={{animationDelay: `${index * 200}ms`}}
                >
                  <img 
                    src={card.src} 
                    alt={card.alt} 
                    className="w-full h-full object-cover animate-fade-in"
                  />
                </div>
              ))}
            </div>
          )}
          
          {showSecondGift && !showTextCards && (
            <div className="p-6 bg-gray-800 flex justify-center">
              <button 
                className="text-white text-xl flex flex-col items-center space-y-4 bg-transparent border-4 border-pink-500 rounded p-6 transition-all duration-300 hover:scale-110 hover:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
                onClick={handleSecondGiftClick}
              >
                <FaGift className="text-5xl text-pink-500" />
                <span>Idhar Click karkay <br /> apni Grettings bhi parhlo lol</span>
              </button>
            </div>
          )}

          {showTextCards && (
            <div className="p-6 bg-gray-800">
              {showFullMessage ? (
                <div className="space-y-8">
                  {sections.map((section, index) => (
                    <div 
                      key={index} 
                      className="space-y-2 transition-all duration-500 ease-in-out transform hover:scale-105 opacity-0 animate-float-up"
                      style={{animationDelay: `${index * 300}ms`, animationFillMode: 'forwards'}}
                    >
                      <h3 className="text-2xl font-semibold flex items-center gap-2 text-white">
                        {section.icon}
                        {section.title}
                      </h3>
                      <p className="text-gray-300 whitespace-pre-wrap">{section.content}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4 animate-float-up">
                  <h3 className="text-2xl font-semibold flex items-center gap-2 text-white">
                    {sections[currentSection].icon}
                    {sections[currentSection].title}
                  </h3>
                  <p className="text-gray-300 whitespace-pre-wrap">{sections[currentSection].content}</p>
                  <div className="flex justify-between mt-4">
                    <button
                      onClick={() => setCurrentSection((prev) => (prev > 0 ? prev - 1 : prev))}
                      disabled={currentSection === 0}
                      className="bg-purple-500 text-white px-4 py-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                    >
                      Previous
                    </button>
                    <button
                      onClick={() => setCurrentSection((prev) => (prev < sections.length - 1 ? prev + 1 : prev))}
                      disabled={currentSection === sections.length - 1}
                      className="bg-pink-500 text-white px-4 py-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          
        </div>
      )}
    </div>
  );
}

export default BirthdayMessage;
