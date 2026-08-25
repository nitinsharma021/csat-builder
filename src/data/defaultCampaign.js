export const defaultCampaign = {
  initial: {
    title: "How was your experience?",
    subtitle: "We'd love to hear what you think.",
    buttonText: "Give Feedback",
  },

  feedback: {
    question: "How satisfied are you with your experience?",
    ratingType: "stars",
    options: [
      "Very satisfied",
      "Satisfied",
      "Neutral",
      "Dissatisfied",
      "Very dissatisfied",
    ],
    allowComments: true,
    commentPlaceholder: "Tell us more about your experience...",
    submitText: "Submit Feedback",
  },

  thankYou: {
    title: "Thank you!",
    subtitle: "Your feedback helps us improve.",
    buttonText: "Back to Start",
    media: null,
  },

  styling: {
    background: "#F4F7FA",
    titleColor: "#172033",
    subtitleColor: "#667085",
    buttonColor: "#0F766E",
    buttonTextColor: "#FFFFFF",

    selectedColor: "#F59E0B",
    unselectedColor: "#D1D5DB",

    titleFontSize: 22,
    titleFontWeight: 700,

    subtitleFontSize: 14,
    subtitleFontWeight: 400,

    popupRadius: 18,

    buttonWidth: 90,
    buttonHeight: 46,
    buttonRadius: 10,
  },
};