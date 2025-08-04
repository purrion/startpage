/*
    Data Structure:
    categories: [
        {
            category: "category_name",
            color: "color_name",
            items: {
                "title_1": "url_1",
                "title_2": "url_2"
            }
        }
    ]

    Available Colors:
          base, mantle, crust,
          text, subtext0, subtext1,
          surface0, surface1, surface2,
          overlay0,
          blue, green, red, yellow,
          lavender, mauve, teal, pink, peach
*/

const categories = [
  {
    category: "Work",
    color: "blue",
    items: {
      GitHub: "https://github.com",
      Email: "https://mail.google.com",
      Docs: "https://docs.google.com",
    },
  },
  {
    category: "Entertainment",
    color: "peach",
    items: {
      YouTube: "https://youtube.com",
      Twitch: "https://twitch.tv",
      Spotify: "https://spotify.com",
    },
  },
  {
    category: "Learning",
    color: "green",
    items: {
      "Khan Academy": "https://khanacademy.org",
      Coursera: "https://coursera.org",
      "MDN Web Docs": "https://developer.mozilla.org",
    },
  },
  {
    category: "Social",
    color: "pink",
    items: {
      Reddit: "https://reddit.com",
      Twitter: "https://twitter.com",
      Discord: "https://discord.com",
    },
  },
  {
    category: "Utilities",
    color: "teal",
    items: {
      "Google Drive": "https://drive.google.com",
      Notion: "https://notion.so",
      Calendar: "https://calendar.google.com",
    },
  },
];
