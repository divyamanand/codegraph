{
  "folders": {
    "src": {
      "files": {
        "App.jsx": {
          "imports": [
            "@/components/ui/card",
            "@/components/features/Navbar",
            "react-router-dom",
            "./data/useData"
          ]
        },
        "main.jsx": {
          "imports": [
            "react",
            "react-dom/client",
            "./App.jsx",
            "react-router-dom",
            "./Pages/InputCard.jsx",
            "./Pages/ManageHostels.jsx",
            "./Pages/Rooms.jsx",
            "./Pages/Teams.jsx"
          ]
        }
      },
      "folders": {
        "Pages": {
          "files": {
            "InputCard.jsx": {
              "imports": [
                "react",
                "../components/ui/card",
                "@/components/ui/button",
                "@/components/ui/input",
                "lucide-react",
                "papaparse",
                "@/data/useData",
                "@/data/fromatData",
                "@/data/allotmentAlgo"
              ]
            },
            "ManageHostels.jsx": {
              "imports": [
                "react",
                "@/components/tables/HostelsTable",
                "@/data/useData"
              ]
            },
            "Rooms.jsx": {
              "imports": [
                "react",
                "@/components/tables/RoomsTable",
                "@/components/ui/button",
                "lucide-react",
                "@/components/features/SearchItem",
                "@/components/ui/toggle-group",
                "@/components/ui/resizable",
                "@/components/features/GridView",
                "@/components/ui/scroll-area",
                "@/data/useData",
                "@/data/rooomsData",
                "@/components/features/PopCard",
                "@/components/charts/Boys",
                "@/components/charts/Girls"
              ]
            },
            "Teams.jsx": {
              "imports": [
                "@/components/tables/TeamsTable",
                "react"
              ]
            }
          }
        },
        "components": {
          "folders": {
            "charts": {
              "files": {
                "Boys.jsx": {
                  "imports": [
                    "react",
                    "recharts",
                    "@/data/useData",
                    "@/data/dashboardData"
                  ]
                },
                "Girls.jsx": {
                  "imports": [
                    "react",
                    "recharts",
                    "@/data/useData",
                    "@/data/dashboardData"
                  ]
                },
                "Hostels.jsx": {
                  "imports": [
                    "recharts",
                    "@/data/useData",
                    "@/data/dashboardData"
                  ]
                },
                "Visitors.jsx": {
                  "imports": [
                    "react",
                    "recharts",
                    "@/data/useData",
                    "@/data/dashboardData"
                  ]
                }
              }
            },
            "features": {
              "files": {
                "GridView.jsx": {
                  "imports": [
                    "react",
                    "../ui/button",
                    "lucide-react",
                    "@/components/ui/progress",
                    "@/components/ui/badge",
                    "./PopCard",
                    "@radix-ui/react-scroll-area",
                    "../ui/input"
                  ]
                },
                "HoverCard.jsx": {
                  "imports": [
                    "react",
                    "@radix-ui/react-hover-card"
                  ]
                },
                "Navbar.jsx": {
                  "imports": [
                    "react",
                    "@/components/ui/navigation-menu",
                    "lucide-react",
                    "react-router-dom",
                    "@/data/useData",
                    "./PopCard",
                    "./Notification"
                  ]
                },
                "Notification.jsx": {
                  "imports": [
                    "lucide-react",
                    "@/lib/utils",
                    "@/components/ui/button",
                    "@/components/ui/card",
                    "@/data/useData"
                  ]
                },
                "PopCard.jsx": {
                  "imports": [
                    "react",
                    "@radix-ui/react-popover"
                  ]
                },
                "SearchItem.jsx": {
                  "imports": [
                    "react",
                    "lucide-react"
                  ]
                }
              }
            },
            "tables": {
              "files": {
                "HostelsTable.jsx": {
                  "imports": [
                    "react",
                    "@/components/ui/toggle-group",
                    "@/components/ui/table",
                    "react-router-dom",
                    "../features/SearchItem",
                    "lucide-react",
                    "../ui/button",
                    "@/data/useData",
                    "@/data/rooomsData",
                    "../features/PopCard",
                    "../charts/Hostels"
                  ]
                },
                "RoomsTable.jsx": {
                  "imports": [
                    "react",
                    "lucide-react",
                    "@/components/ui/table",
                    "@/components/ui/button",
                    "../features/PopCard",
                    "../ui/input",
                    "../ui/progress",
                    "../ui/badge",
                    "../ui/scroll-area"
                  ]
                },
                "TeamsPopup.jsx": {
                  "imports": [
                    "react",
                    "../ui/table",
                    "../ui/scroll-area"
                  ]
                },
                "TeamsTable.jsx": {
                  "imports": [
                    "react",
                    "lucide-react",
                    "../features/SearchItem",
                    "@/components/ui/button",
                    "../features/PopCard",
                    "../ui/input",
                    "@/data/useData",
                    "@/data/teamsData",
                    "papaparse",
                    "./UnallocatedTable",
                    "../charts/Visitors"
                  ]
                },
                "UnallocatedTable.jsx": {
                  "imports": [
                    "@/data/dashboardData",
                    "@/data/useData",
                    "react",
                    "@radix-ui/react-scroll-area"
                  ]
                }
              }
            },
            "ui": {
              "files": {
                "badge.jsx": {
                  "imports": [
                    "react",
                    "class-variance-authority",
                    "@/lib/utils"
                  ]
                },
                "button.jsx": {
                  "imports": [
                    "react",
                    "@radix-ui/react-slot",
                    "class-variance-authority",
                    "@/lib/utils"
                  ]
                },
                "card.jsx": {
                  "imports": [
                    "react",
                    "@/lib/utils"
                  ]
                },
                "chart.jsx": {
                  "imports": [
                    "react",
                    "recharts",
                    "@/lib/utils"
                  ]
                },
                "hover-card.jsx": {
                  "imports": [
                    "react",
                    "@radix-ui/react-hover-card",
                    "@/lib/utils"
                  ]
                },
                "input.jsx": {
                  "imports": [
                    "react",
                    "@/lib/utils"
                  ]
                },
                "navigation-menu.jsx": {
                  "imports": [
                    "react",
                    "@radix-ui/react-navigation-menu",
                    "class-variance-authority",
                    "lucide-react",
                    "@/lib/utils"
                  ]
                },
                "pagination.jsx": {
                  "imports": [
                    "react",
                    "lucide-react",
                    "@/lib/utils",
                    "@/components/ui/button"
                  ]
                },
                "popover.jsx": {
                  "imports": [
                    "react",
                    "@radix-ui/react-popover",
                    "@/lib/utils"
                  ]
                },
                "progress.jsx": {
                  "imports": [
                    "react",
                    "@radix-ui/react-progress",
                    "@/lib/utils"
                  ]
                },
                "resizable.jsx": {
                  "imports": [
                    "lucide-react",
                    "react-resizable-panels",
                    "@/lib/utils"
                  ]
                },
                "scroll-area.jsx": {
                  "imports": [
                    "react",
                    "@radix-ui/react-scroll-area",
                    "@/lib/utils"
                  ]
                },
                "select.jsx": {
                  "imports": [
                    "react",
                    "@radix-ui/react-select",
                    "lucide-react",
                    "@/lib/utils"
                  ]
                },
                "separator.jsx": {
                  "imports": [
                    "react",
                    "@radix-ui/react-separator",
                    "@/lib/utils"
                  ]
                },
                "table.jsx": {
                  "imports": [
                    "react",
                    "@/lib/utils"
                  ]
                },
                "toggle-group.jsx": {
                  "imports": [
                    "react",
                    "@radix-ui/react-toggle-group",
                    "@/lib/utils",
                    "@/components/ui/toggle"
                  ]
                },
                "toggle.jsx": {
                  "imports": [
                    "react",
                    "@radix-ui/react-toggle",
                    "class-variance-authority",
                    "@/lib/utils"
                  ]
                }
              }
            }
          }
        },
        "data": {
          "files": {
            "dashboardData.js": {
              "imports": [
                "./allotmentAlgo",
                "./rooomsData"
              ]
            },
            "rooomsData.js": {
              "imports": [
                "./hostelsData"
              ]
            },
            "useData.jsx": {
              "imports": [
                "react"
              ]
            }
          }
        },
        "lib": {
          "files": {
            "utils.js": {
              "imports": [
                "clsx",
                "tailwind-merge"
              ]
            }
          }
        }
      }
    }
  },
  "files": {
    "tailwind.config.js": {
      "imports": [
        "tailwindcss-animate"
      ]
    },
    "vite.config.js": {
      "imports": [
        "path",
        "vite",
        "@vitejs/plugin-react"
      ]
    }
  }
}
