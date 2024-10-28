import { type PoetryGridStructure } from "./components/PoetryGrid";

const colors = {
  "white": "#fff", 
  "black": "#000",
  "blue": "#A1A8FF",
  "yellow": "#FFD700",
  "pink": "#F7F6EB",
  "gray": "#808080",
}

export const poetryGridStructure: PoetryGridStructure = {
  rows: [
    {
      columns: [
        {
          fraction: 2,
          type: "empty",
          hideFirst: true,
        },
        {
          fraction: 2,
          type: "image",
          asset: "muscles",
          slug: "home"
        },
      ],
    },
    {
      columns: [
        {
          fraction: 2,
          type: "empty",
          hideFirst: true,
        },
        {
          fraction: 2,
          type: "poem",
          backgroundColor: colors.white,
          textColor: colors.black,
          poem: "a-burning-sensation"
        }
      ]
    },
    {
      columns: [
        {
          fraction: 1,
          type: "empty",
          hideFirst: true,
        },
        {
          fraction: 1,
          type: "image",
          asset: "cowboy"
        },
        {
          fraction: 1,
          type: "empty",
          hideFirst: true,
        },
        {
          fraction: 1,
          type: "poem",
          backgroundColor: colors.blue,
          poem: "litany-for-the-body"
        }
      ]
    },
    {
      columns: [
        {
          fraction: 1,
          type: "empty",
          hideFirst: true,
        },
        {
          fraction: 1,
          type: "poem",
          backgroundColor: colors.yellow,
          textColor: colors.black,
          poem: "twinkle-twinkle"
        },
        {
          fraction: 1,
          type: "empty",
          hideFirst: true,
        }
      ]
    },
    {
      columns: [
        {
          fraction: 2,
          type: "poem",
          backgroundColor: colors.blue,
          textColor: colors.black,
          poem: "sympathy-for-myself"
        },
        {
          fraction: 2,
          type: "empty",
          hideFirst: true,
        }
      ]
    },
    {
      columns: [
        {
          fraction: 2,
          type: "empty",
          hideFirst: true,
        },
        {
          fraction: 1,
          type: "poem",
          backgroundColor: colors.pink,
          textColor: colors.black,
          poem: "how-you-can-meet-your-mother"
        },
        {
          fraction: 1,
          type: "empty"
        }
      ]
    },
    {
      columns: [
        {
          fraction: 2,
          type: "empty",
          hideFirst: true,
        },
        {
          fraction: 1,
          type: "poem",
          backgroundColor: colors.white,
          poem: "on-the-divine-feminine"
        },
        {
          fraction: 1,
          type: "poem",
          backgroundColor: colors.black,
          textColor: "#fff",
          poem: "on-the-divine-masculine"
        }
      ]
    },
    {
      columns: [
        {
          fraction: 1,
          type: "empty",
        },
        {
          fraction: 1,
          type: "poem",
          backgroundColor: colors.yellow,
          textColor: colors.black,
          poem: "reflections"
        },
        {
          fraction: 2,
          type: "empty",
          hideFirst: true,
        }
      ]
    },
    {
      columns: [
        {
          fraction: 1,
          type: "empty",
          hideFirst: true,
        },
        {
          fraction: 2,
          type: "poem",
          backgroundColor: colors.blue,
          textColor: colors.black,
          poem: "desert-queen-unchained"
        },
        {
          fraction: 1,
          type: "empty",
          hideFirst: true,
        }
      ]
    },
    {
      columns: [
        {
          fraction: 1,
          type: "poem",
          backgroundColor: colors.yellow,
          textColor: colors.black,
          poem: "cinderella-time",
        },
        {
          fraction: 3,
          type: "image",
          asset: "sploosh",
        }
      ],
    },
    {
      columns: [
        {
          fraction: 2,
          type: "image",
          asset: "peacock"
        },
        {
          fraction: 1,
          type: "poem",
          backgroundColor: colors.pink,
          textColor: colors.black,
          poem: "cardiopulmonary-resuscitation"
        },
        {
          fraction: 1,
          type: "empty",
        }
      ]
    },
    {
      columns: [
        {
          fraction: 2,
          type: "poem",
          backgroundColor: colors.black,
          textColor: colors.white,
          poem: "sunday-service"
        },
        {
          fraction: 2,
          type: "empty",
          hideFirst: true,
        }
      ]
    },
    {
      columns: [
        {
          fraction: 2,
          type: "image",
          asset: "holy"
        },
        {
          fraction: 2,
          type: "poem",
          backgroundColor: colors.black,
          textColor: colors.white,
          poem: "thats-me-in-the-corner"
        }
      ]
    },
    {
      columns: [
        {
          fraction: 1,
          type: "empty",
          hideFirst: true,
        },
        {
          fraction: 1,
          type: "poem",
          backgroundColor: colors.blue,
          textColor: colors.black,
          poem: "a-familiar-scene"
        },
        {
          fraction: 2,
          type: "empty",
          backgroundColor: colors.yellow
        }
      ]
    },
    {
      columns: [
        {
          fraction: 1,
          type: "empty",
          hideFirst: true,
        },
        {
          fraction: 2,
          type: "poem",
          backgroundColor: colors.pink,
          textColor: colors.black,
          poem: "the-cloakroom"
        },
        {
          fraction: 1,
          type: "empty",
          hideFirst: true,
        }
      ]
    },
    {
      columns: [
        {
          fraction: 2,
          type: "poem",
          backgroundColor: colors.pink,
          textColor: colors.black,
          poem: "new-apartment-smell"
        },
        {
          fraction: 2,
          type: "image",
          asset: "wistful"
        }
      ]
    },
    {
      columns: [
        {
          fraction: 2,
          type: "empty",
          hideFirst: true,
        },
        {
          fraction: 1,
          type: "empty",
          backgroundColor: colors.yellow
        },
        {
          fraction: 1,
          type: "poem",
          backgroundColor: colors.black,
          textColor: colors.white,
          poem: "on-autonomy"
        }
      ]
    },
    {
      columns: [
        {
          fraction: 1,
          type: "empty",
          hideFirst: true,
        },
        {
          fraction: 2,
          type: "image",
          asset: "stare"
        },
        {
          fraction: 1,
          type: "poem",
          backgroundColor: colors.pink,
          textColor: colors.black,
          poem: "my-biggest-fear"
        }
      ]
    },
    {
      columns: [
        {
          fraction: 1,
          type: "empty",
          hideFirst: true,
        },
        {
          fraction: 1,
          type: "poem",
          backgroundColor: colors.yellow,
          textColor: colors.black,
          poem: "thermonuclear-reaction"
        },
        {
          fraction: 2,
          type: "image",
          asset: "sad"
        },
      ],
    },
    {
      columns: [
        {
          fraction: 2,
          type: "empty",
          hideFirst: true,
        },
        {
          fraction: 1,
          type: "poem",
          backgroundColor: colors.black,
          textColor: colors.white,
          poem: "dietary-restrictions"
        },
        {
          fraction: 1,
          type: "empty",
          backgroundColor: colors.black
        }
      ]
    },
    {
      columns: [
        {
          fraction: 2,
          type: "empty",
          hideFirst: true,
        },
        {
          fraction: 2,
          type: "poem",
          backgroundColor: colors.blue,
          textColor: colors.black,
          poem: "i-have-hunted-for-her"
        }
      ]
    },
    {
      columns: [
        {
          fraction: 1,
          type: "poem",
          backgroundColor: colors.yellow,
          textColor: colors.black,
          poem: "the-rave"
        },
        {
          fraction: 3,
          type: "empty",
          hideFirst: true,
        }
      ]
    }
  ]
};
