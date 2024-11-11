import React, { useState, useEffect } from "react";
import {
  FaStar,
  FaHeart,
  FaGift,
  FaBirthdayCake,
  FaMusic,
} from "react-icons/fa";
import confetti from "canvas-confetti";
import "./App.css";
const sections = [
  {
    title: "Reflections",
    icon: <FaStar className="text-yellow-400" />,
    content: `Dear Aksa,

    I don’t say this enough, but thank you for being you. Tum woh insaan ho jo hamesha meri life mein ek positive light le ke aayi ho. You have no idea how much I appreciate all the things you’ve done, big and small. Whether it was sending me a good morning message to start my day, making time for me when you were busy, or just listening to my worries without judgment – you were always there. Tumhara pyaar, tumhara patience aur tumhari understanding ne mujhe bohot kuch sikhaya hai.

You stood by me even when I couldn’t see a way forward, and that means everything to me. Tumhari presence mere liye itni comforting thi ke mujhe lagta tha, as long as you’re around, I could face anything. I remember each time you forgave me, each time you looked past my flaws, and each time you made me feel like I was worth loving. Yeh sab mere liye sirf actions nahi they, yeh woh signs the jo mujhe hamesha dikhate rahe ke tum kitni pyaari aur caring ho. I am truly, deeply grateful for every effort you’ve made to make me feel loved, supported, and understood.

It’s not easy finding someone who cares so selflessly, and I am lucky to have had you in my life. Thank you for being patient, for giving me space when I needed it, and for always coming back with an open heart.`,
  },
  {
    title: "Appreciation",
    icon: <FaHeart className="text-red-400" />,
    content: `There's so much about you that I admire and appreciate. Your kindness, your determination, your ability to see the best in people even when they can't see it in themselves. I love how passionate you get about the things you care about, how your eyes light up when you talk about your dreams and ambitions.

    I appreciate the way you've always encouraged me to be a better version of myself. You've pushed me to grow, to face my fears, and to believe in myself. Even during our arguments, I know that at the core, you want what's best for me, just as I want what's best for you.

    I'm grateful for the memories we've created together. The inside jokes that only we understand, the silly nicknames we've given each other, the quiet moments of understanding that pass between us without a word being spoken. These are the threads that have woven the tapestry of our relationship, creating something beautiful and unique.

    I want you to know that I see you, Aksa. I see your struggles, your triumphs, your fears, and your hopes. I see the way you fight to overcome your insecurities, how hard you work to achieve your goals, and how deeply you care for those around you. You are so much more than you give yourself credit for, and I wish you could see yourself through my eyes.`,
  },
  {
    title: "Apology",
    icon: <FaGift className="text-purple-400" />,
    content: `I know there have been times when I hurt you, and for those moments, I am deeply sorry. Kabhi kabhi mujhe lagta hai ke maine tumhe wo sab kuch nahi diya jo tum deserve karti thi. I made mistakes, I got lost in my own insecurities, and I didn’t always understand how my actions affected you. Bohot dafa sirf apne emotions aur apni struggles mein kho gaya aur tumhari feelings ko overlook kiya. Mere harsh words aur misunderstandings ne tumhe hurt kiya, aur main dil se iske liye maafi maangta hoon.

There were times when I should’ve been more understanding, when I should’ve shown you how much I appreciate you instead of getting frustrated. Mere liye ye accept karna mushkil hai ke kabhi kabhi main tumhe us tarah support nahi kar saka jaise tum deserve karti thi. I can’t go back and change what’s been said or done, but I want you to know that I truly regret every single time I let you down. Tumne mere liye bohot kuch kiya, aur main sirf wish karta hoon ke kaash main us waqt tumhe us pyaar aur izzat se treat kar pata jo tumhara haq tha.

I’m sorry for every moment when my actions made you question my love for you. I know I made things harder at times, and I wish I could take back those moments. Tumhari khushi mere liye bohot important hai, aur main kabhi nahi chahunga ke meri wajah se tum dukhi ho. I just want you to know how sorry I am, and how much I wish I could undo the hurt I’ve caused.`,
  },
  {
    title: "Hope",
    icon: <FaBirthdayCake className="text-pink-400" />,
    content: `Despite everything we’ve been through, there’s a part of me that still holds onto hope. Shayad yeh hope thoda naadaan hai, lekin mere dil mein ab bhi woh wish hai ke hum phir se woh bonding aur woh closeness wapas la sakein. I know things aren’t easy, and we’ve both changed in many ways, but I believe that the love we’ve shared is still worth fighting for. Tumhari har smile aur tumhara har moment of joy mere dil mein ek chhoti si hope jagata hai, ke shayad hum phir se ek naye tareeke se shuru kar sakte hain.

I want you to know that if there’s still a part of you that wants to make this work, I’m here. Main woh efforts dalne ke liye ready hoon jo hamesha chahiye they, main woh patience aur woh understanding seekh raha hoon jo tum deserve karti ho. I know it won’t be easy, but I also know that love is never easy. Tum sirf meri pyaari ho, aur tumhare bina ye zindagi thodi incomplete lagti hai.

Jo bhi ho Jaisa bhi ho,  I want you to know that I’ll always be cheering for you, from wherever I am. Tum jo bhi achieve karna chahti ho life mein, I'll be by your side I’ll always want the best for you, even if our paths don’t cross the same way again. Tum mere dil mein hamesha woh special jagah mein rahogi, and I’ll always carry the hope that somehow, we’ll find our way back to each other.`,
  },
  {
    title: "Birthday Wishes",
    icon: <FaMusic className="text-blue-400" />,
    content: `So, here's to you, Aksa. Happy Birthday! Today, on your birthday, I want nothing but the best for you. Tumhari khushi, tumhara sukoon aur tumhara aaraam mere liye sabse upar hai. Chahe humara rasta alag bhi ho, I wish you a birthday filled with love, laughter, and the kind of happiness that lights up your soul. I hope this year brings you closer to all your dreams, and that every single wish you’ve made comes true.

On this special day, I want you to take a moment to celebrate yourself – not just for being a year older, but for being the beautiful person you are. Tum jo bhi ho, tum sirf pyaari nahi, you're way more than that. You have brought so much joy into my life, and I know you’ll continue to spread that joy wherever you go. Happy Birthday, meri jaan. Tumhe aaj aur hamesha woh sab kuch mile jo tum chaho, aur tumhe kabhi bhi kisi cheez ki kami mehsoos na ho.

If you ever need me, I’ll be here. Tum mere liye hamesha wo special insan rahogi jise main hamesha appreciate aur pyaar karta rahunga. Thank you for everything, for being my strength, my happiness, and my hope. Tumhari ye zindagi pyaar aur khushiyon se bhari rahe, aur tum hamesha muskuraati raho. Tumhare liye meri dua hai ke tumhe hamesha wo sukoon mile jo tum deserve karti ho. Happy Birthday once again Baksa`,
  },
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
      const duration = 500 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
      }

      const interval = setInterval(function () {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti(
          Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
          })
        );
        confetti(
          Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
          })
        );
      }, 250);

      return () => clearInterval(interval);
    }
  }, [isConfettiActive]);

  const handleGiftClick = () => {
    setShowCard(true);
    setIsConfettiActive(true);
    setTimeout(() => setShowImageCards(true), 3000);
    setTimeout(() => setShowSecondGift(true), 8000);
  };

  const handleSecondGiftClick = () => {
    setShowTextCards(true);
    setIsConfettiActive(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {!showCard ? (
        <button
          className="text-white text-2xl flex flex-col items-center space-y-8 bg-transparent border-4 border-pink-500 rounded p-8 transition-all duration-300 hover:scale-110 hover:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
          onClick={handleGiftClick}
        >
          <FaGift className="text-8xl text-pink-500" />
          <span>
            Welcome To Ahmad's <br /> First Live Application
          </span>
        </button>
      ) : (
        <div
          className={`w-full max-w-6xl bg-gray-900 rounded-lg shadow-2xl overflow-hidden transition-all duration-500 ease-in-out transform ${
            showCard ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-12 animate-gradient-x">
            <h1 className="text-8xl font-bold text-center text-white mt-6 animate-bounce">
              Aqsa The Butt
            </h1>
            <p className="text-6xl text-center text-white animate-pulse">
              Happy Birthday
            </p>
          </div>

          {showImageCards && (
            <div className="p-6 bg-gray-800 grid grid-cols-2 gap-4">
              {imageCards.map((card, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-lg shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105"
                  style={{ animationDelay: `${index * 200}ms` }}
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
                <span>
                  Idhar Click karkay <br /> apni Grettings bhi parhlo lol
                </span>
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
                      style={{
                        animationDelay: `${index * 300}ms`,
                        animationFillMode: "forwards",
                      }}
                    >
                      <h3 className="text-2xl font-semibold flex items-center gap-2 text-white">
                        {section.icon}
                        {section.title}
                      </h3>
                      <p className="text-gray-300 whitespace-pre-wrap">
                        {section.content}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4 animate-float-up">
                  <h3 className="text-2xl font-semibold flex items-center gap-2 text-white">
                    {sections[currentSection].icon}
                    {sections[currentSection].title}
                  </h3>
                  <p className="text-gray-300 whitespace-pre-wrap">
                    {sections[currentSection].content}
                  </p>
                  <div className="flex justify-between mt-4">
                    <button
                      onClick={() =>
                        setCurrentSection((prev) =>
                          prev > 0 ? prev - 1 : prev
                        )
                      }
                      disabled={currentSection === 0}
                      className="bg-purple-500 text-white px-4 py-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                    >
                      Previous
                    </button>
                    <button
                      onClick={() =>
                        setCurrentSection((prev) =>
                          prev < sections.length - 1 ? prev + 1 : prev
                        )
                      }
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

          {showTextCards && (
            <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6 animate-gradient-x">
              <button
                onClick={() => {
                  setShowFullMessage(!showFullMessage);
                  setIsConfettiActive(true);
                }}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-4 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50"
              >
                {/* {showFullMessage ? "Show Sections" : "Read Full Message"} */}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default BirthdayMessage;
