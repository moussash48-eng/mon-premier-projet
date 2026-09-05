// قاعدة البيانات الكاملة لمتجر DigiSou9 - V2
const products = [
  // 🤖 قسم الذكاء الاصطناعي (AI)
  { id: 1, name: "ChatGPT Plus", category: "AI", icon: "🤖", price: "متوفر" },
  { id: 2, name: "Google AI Pro (Gemini)", category: "AI", icon: "🤖", price: "60 DH" },
  { id: 3, name: "Claude Pro", category: "AI", icon: "🤖", price: "متوفر" },
  { id: 4, name: "Perplexity Pro", category: "AI", icon: "🤖", price: "متوفر" },
  { id: 5, name: "Grok / SuperGrok", category: "AI", icon: "🤖", price: "متوفر" },
  { id: 6, name: "Canva Pro", category: "AI", icon: "🤖", price: "25 DH" },
  { id: 7, name: "CapCut Pro", category: "AI", icon: "🤖", price: "متوفر" },
  { id: 8, name: "ElevenLabs", category: "AI", icon: "🤖", price: "متوفر" },

  // 🎓 قسم الدراسة واللغات
  { id: 9, name: "Duolingo Super", category: "Study", icon: "🎓", price: "49 DH" },
  { id: 10, name: "Coursera Plus", category: "Study", icon: "🎓", price: "متوفر" },
  { id: 11, name: "Grammarly Premium", category: "Study", icon: "🎓", price: "متوفر" },
  { id: 12, name: "QuillBot Premium", category: "Study", icon: "🎓", price: "متوفر" },
  { id: 13, name: "Busuu Premium", category: "Study", icon: "🎓", price: "متوفر" },
  { id: 14, name: "Memrise", category: "Study", icon: "🎓", price: "متوفر" },
  { id: 15, name: "LinkedIn Premium", category: "Study", icon: "🎓", price: "متوفر" },

  // 🎬 قسم الترفيه (Entertainment)
  { id: 16, name: "Netflix", category: "Entertainment", icon: "🎬", price: "متوفر" },
  { id: 17, name: "Spotify Premium", category: "Entertainment", icon: "🎬", price: "متوفر" },
  { id: 18, name: "YouTube Premium", category: "Entertainment", icon: "🎬", price: "متوفر" },
  { id: 19, name: "Prime Video", category: "Entertainment", icon: "🎬", price: "متوفر" },
  { id: 20, name: "Shahid VIP", category: "Entertainment", icon: "🎬", price: "متوفر" },
  { id: 21, name: "Apple TV+", category: "Entertainment", icon: "🎬", price: "متوفر" },
  { id: 22, name: "Disney+", category: "Entertainment", icon: "🎬", price: "متوفر" },

  // 💻 قسم البرامج والإنتاجية (Software)
  { id: 23, name: "Microsoft 365", category: "Software", icon: "💻", price: "متوفر" },
  { id: 24, name: "NordVPN", category: "Software", icon: "💻", price: "متوفر" },
  { id: 25, name: "Google One", category: "Software", icon: "💻", price: "متوفر" },
  { id: 26, name: "Notion", category: "Software", icon: "💻", price: "متوفر" },
  { id: 27, name: "Adobe Creative Cloud", category: "Software", icon: "💻", price: "متوفر" },

  // 🎨 قسم الأعمال وصناع المحتوى (Business / Creator)
  { id: 28, name: "Freepik Premium", category: "Creator", icon: "🎨", price: "متوفر" },
  { id: 29, name: "Envato Elements", category: "Creator", icon: "🎨", price: "متوفر" },
  { id: 30, name: "Midjourney", category: "Creator", icon: "🎨", price: "متوفر" }
];

module.exports = products;
