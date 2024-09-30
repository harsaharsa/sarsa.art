import { LayoutStructure } from "./components/Layout";

export const layoutStructure: LayoutStructure = {
  rows: [
    {
      columns: [
        {
          fraction: 2,
          type: "logo"
        },
        {
          fraction: 1,
          type: "image",
          asset: "muscles.jpg"
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
          type: "empty"
        },
        {
          fraction: 1,
          type: "empty",
          backgroundColor: "#A1A8FF"
        },
        {
          fraction: 1,
          type: "poem",
          backgroundColor: "#F7F6EB",
          poem: "on-the-divine-feminine"
        }
      ]
    },
    {
      columns: [
        {
          fraction: 2,
          type: "empty"
        },
        {
          fraction: 1,
          type: "poem",
          backgroundColor: "#A1A8FF",
          poem: "litany-for-the-body"
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
          fraction: 1,
          type: "empty",
        },
        {
          fraction: 1,
          type: "image",
          asset: "cowboy.jpg"
        },
        {
          fraction: 1,
          type: "empty",
          backgroundColor: "#000"
        },
        {
          fraction: 1,
          type: "poem",
          backgroundColor: "#000",
          textColor: "#fff",
          poem: "on-the-divine-masculine"
        }
      ]
    },
    {
      columns: [
        {
          fraction: 1,
          type: "poem",
          backgroundColor: "#FFD700",
          textColor: "#000",
          poem: "cinderella-time"
        },
        {
          fraction: 3,
          type: "image",
          asset: "sploosh.jpg"
        }
      ]
    },
    {
      columns: [
        {
          fraction: 2,
          type: "empty",
        },
        {
          fraction: 1,
          type: "poem",
          backgroundColor: "#000",
          textColor: "#fff",
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
          type: "image",
          asset: "holy.jpg"
        },
        {
          fraction: 2,
          type: "poem",
          backgroundColor: "#000",
          textColor: "#fff",
          poem: "thats-me-in-the-corner"
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
          fraction: 2,
          type: "poem",
          backgroundColor: "#fff",
          textColor: "#000",
          poem: "a-familiar-scene"
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
          fraction: 1,
          type: "poem",
          backgroundColor: "#E6E6FA",
          textColor: "#000",
          poem: "new-apartment-smell"
        },
        {
          fraction: 3,
          type: "empty",
          backgroundColor: "#E6E6FA"
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
          backgroundColor: "#000",
          textColor: "#fff",
          poem: "on-autonomy"
        },
        {
          fraction: 2,
          type: "empty",
        }
      ]
    },
    {
      columns: [
        {
          fraction: 3,
          type: "empty",
        },
        {
          fraction: 1,
          type: "poem",
          backgroundColor: "#F0F8FF",
          textColor: "#000",
          poem: "my-biggest-fear"
        }
      ]
    },
    {
      columns: [
        {
          fraction: 1,
          type: "poem",
          backgroundColor: "#000",
          textColor: "#fff",
          poem: "thermonuclear-reaction"
        },
        {
          fraction: 3,
          type: "empty",
        },
      ],
    },
    {
      columns: [
        {
          fraction: 2,
          type: "empty",
        },
        {
          fraction: 1,
          type: "poem",
          backgroundColor: "#000",
          textColor: "#fff",
          poem: "dietary-restrictions"
        },
        {
          fraction: 1,
          type: "empty",
          backgroundColor: "#000"
        }
      ]
    }
  ]
};
