export const initialWeddingData = {
  meta: {
    websiteTitle: "Alex & Samantha's Wedding",
    ogImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    bgMusicUrl: "" // Empty by default so our built-in Web Audio harmonic ambient synthesizer plays smoothly, or user can provide any MP3 URL
  },
  openingScreen: {
    introVideoUrl: "", // Optional video URL, or fallback to our rich animated canvas
    monogramSvg: "A & S",
    buttonText: "Open Invitation",
    soundPromptText: "Music: Enabled"
  },
  home: {
    bgImages: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=85",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1920&q=85"
    ],
    tagline: "TOGETHER WITH THEIR FAMILIES",
    brideName: "Samantha Hayes",
    groomName: "Alexander Wright",
    weddingDate: "Saturday, October 24, 2026",
    locationSummary: "The Grand Rambagh Palace • Jaipur, Rajasthan"
  },
  couple: {
    groom: {
      name: "Alexander Wright",
      title: "The Groom",
      bio: "An architect with a passion for classic structures, astronomy, and adventurous travel. He believes that finding Samantha was the greatest milestone in his life's blueprint.",
      quote: "“In you, I've found the home I didn't know I was searching for.”",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85",
      parents: "Son of Mr. Robert & Mrs. Eleanor Wright"
    },
    bride: {
      name: "Samantha Hayes",
      title: "The Bride",
      bio: "An art curator and botanical enthusiast who loves poetry, classical piano, and coffee dates. Her kindness, warmth, and radiant smile light up every room she steps into.",
      quote: "“You are every dream I ever whispered to the night sky.”",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85",
      parents: "Daughter of Dr. Richard & Mrs. Grace Hayes"
    },
    timeline: [
      {
        id: 1,
        date: "June 14, 2021",
        title: "The Serendipitous Encounter",
        description: "A chance meeting at an art exhibition in Florence where both reached for the same antique sketch. What started as an afternoon conversation turned into hours of shared laughter.",
        image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
        badge: "First Met"
      },
      {
        id: 2,
        date: "October 09, 2022",
        title: "First Coffee & Midnight Drive",
        description: "Under the autumn leaves and starry skies, we spent seven uninterrupted hours talking about our dreams, families, and childhood memories.",
        image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80",
        badge: "First Date"
      },
      {
        id: 3,
        date: "August 20, 2024",
        title: "The Mountain Getaway",
        description: "Hiking through the misty peaks of Switzerland, sheltering from the sudden summer drizzle in a cozy alpine chalet.",
        image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=800&q=80",
        badge: "Memories"
      },
      {
        id: 4,
        date: "December 24, 2025",
        title: "The Sunset Proposal",
        description: "On a private candlelit terrace overlooking the sea, Alex got down on one knee as the sky turned violet and gold. Through tears of joy, Sam said YES!",
        image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80",
        badge: "She Said Yes!"
      }
    ]
  },
  events: [
    {
      id: "mehendi",
      name: "Mehendi & Sangeet Soiree",
      datetime: "Friday, October 23, 2026 • 4:00 PM - 10:00 PM",
      startIso: "2026-10-23T16:00:00+05:30",
      endIso: "2026-10-23T22:00:00+05:30",
      venue: "The Royal Verandah & Lawns, Rambagh Palace",
      address: "Bhawani Singh Rd, Jaipur, Rajasthan 302005",
      dressCode: "Festive Glam / Emerald, Teal & Floral Silk",
      description: "An evening filled with intricate henna art, joyful music, rhythmic choreography, folk singing, and delightful Rajasthani culinary feasts under the fairy lights.",
      googleMapUrl: "https://maps.google.com/?q=Rambagh+Palace+Jaipur",
      iconType: "sparkles"
    },
    {
      id: "wedding",
      name: "The Sacred Vows & Ceremony",
      datetime: "Saturday, October 24, 2026 • 5:00 PM - 7:30 PM",
      startIso: "2026-10-24T17:00:00+05:30",
      endIso: "2026-10-24T19:30:00+05:30",
      venue: "The Grand Amphitheater & Courtyard",
      address: "Bhawani Singh Rd, Jaipur, Rajasthan 302005",
      dressCode: "Royal Traditional / Rose Gold & Champagne",
      description: "Join us in our sacred circle of love and blessings as we exchange vows, step around the sacred hearth, and tie our destinies together forever.",
      googleMapUrl: "https://maps.google.com/?q=Rambagh+Palace+Jaipur",
      iconType: "rings"
    },
    {
      id: "reception",
      name: "Grand Royal Reception Dinner",
      datetime: "Saturday, October 24, 2026 • 8:00 PM Onwards",
      startIso: "2026-10-24T20:00:00+05:30",
      endIso: "2026-10-25T01:00:00+05:30",
      venue: "The Maharani Crystal Ballroom",
      address: "Bhawani Singh Rd, Jaipur, Rajasthan 302005",
      dressCode: "Black Tie / Formal Evening Gowns & Tuxedos",
      description: "A glamorous celebration featuring an exquisite gourmet banquet, heartfelt family toasts, live jazz orchestra, cake cutting, and dancing under the crystal chandeliers.",
      googleMapUrl: "https://maps.google.com/?q=Rambagh+Palace+Jaipur",
      iconType: "champagne"
    }
  ],
  countdown: {
    targetIsoTimestamp: "2026-10-24T17:00:00+05:30",
    bgImage: "https://images.unsplash.com/photo-1519225429180-60a6311059f3?auto=format&fit=crop&w=1920&q=85",
    postCountdownMessage: "The Celebrations Have Begun! Welcome to Our Wedding."
  },
  gallery: [
    {
      id: 1,
      category: "Pre-Wedding",
      title: "Twilight in Florence",
      caption: "Strolling through the historic bridges of Florence during our golden hour shoot.",
      fullRes: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1600&q=85",
      thumbnail: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
      aspectRatio: "portrait"
    },
    {
      id: 2,
      category: "Engagement",
      title: "The Ring & The Sunset",
      caption: "Capturing the glimmer of forever as the Mediterranean sun dipped below the horizon.",
      fullRes: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1600&q=85",
      thumbnail: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=600&q=80",
      aspectRatio: "landscape"
    },
    {
      id: 3,
      category: "Moments",
      title: "Laughter in the Meadows",
      caption: "Unfiltered joy and pure sunshine in the English countryside.",
      fullRes: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1600&q=85",
      thumbnail: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
      aspectRatio: "square"
    },
    {
      id: 4,
      category: "Pre-Wedding",
      title: "A Waltz by the Lake",
      caption: "Practicing our first dance steps alongside the serene waters of Lake Como.",
      fullRes: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85",
      thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
      aspectRatio: "landscape"
    },
    {
      id: 5,
      category: "Moments",
      title: "Whispered Promises",
      caption: "A quiet stolen moment between vows, surrounded by fragrant jasmine and white roses.",
      fullRes: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1600&q=85",
      thumbnail: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80",
      aspectRatio: "portrait"
    },
    {
      id: 6,
      category: "Engagement",
      title: "Under the Starlit Canopy",
      caption: "Celebrating our engagement with warm fairy lights and acoustic melodies.",
      fullRes: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1600&q=85",
      thumbnail: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
      aspectRatio: "landscape"
    }
  ],
  venue: {
    title: "The Grand Rambagh Palace",
    subtitle: "A jewel of Rajput heritage and timeless royal opulence",
    address: "Bhawani Singh Road, Rambagh, Jaipur, Rajasthan 302005, India",
    contactPhone: "+91 141 221 1919 / +91 98765 43210",
    contactEmail: "concierge.rambagh@alexsamwedding.com",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.4682498226066!2d75.80735397635677!3d26.88863647666113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db421867c295b%3A0x62804b407a5f6e80!2sRambagh%20Palace%2C%20Jaipur!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    googleMapsLink: "https://maps.google.com/?q=Rambagh+Palace+Jaipur",
    appleMapsLink: "https://maps.apple.com/?q=Rambagh+Palace+Jaipur",
    travel: {
      airport: "Jaipur International Airport (JAI) — 11 km (approx. 20 mins drive). Chauffeur airport shuttles will be operating round-the-clock for guests.",
      railway: "Jaipur Junction Railway Station (JP) — 5 km (approx. 12 mins drive).",
      parking: "Valet parking available at the main palace entrance gate for all wedding guests."
    },
    accommodations: "Exclusive luxury guest suites and courtyard rooms have been reserved for all guests from Oct 22 to Oct 26. Check-in hospitality desks will welcome you with traditional garlands and welcome refreshments upon arrival."
  },
  thankYou: {
    message: "Your presence, love, prayers, and laughter are the greatest gifts we could ever ask for. Thank you for traveling near and far to make our wedding weekend one of the most unforgettable chapters of our lives.",
    signatureNames: "Alexander & Samantha",
    hashtag: "#AlexFoundHisSam2026"
  }
};
