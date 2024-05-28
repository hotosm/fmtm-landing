export const defaultPlanId = "free"

export const pricingPlans = [
  {
    id: "free",
    name: "Self-hosted",
    description: "Manage your own instance of FMTM with limited support.",
    price: "$0",
    priceIntervalName: "per month",
    features: [
      "Public projects",
      "Community input on Github",
      "Easy deployment options",
    ],
  },
  {
    id: "professional",
    name: "Professional",
    description:
      "A plan to run private mapping campaigns for your organization.",
    price: "$199",
    priceIntervalName: "per month",
    features: [
      "Managed software supporting hundreds of users",
      "Private and confidential mapping projects",
      "Ongoing software updates and support",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description:
      "A plan to run private mapping campaigns at large scale, with priority support.",
    price: "$499",
    priceIntervalName: "per month",
    features: [
      "Everything in Pro",
      "Support thousands of users",
      "Direct communication channel to devs",
    ],
  },
]
