// HuggingFace API Calling Service

interface Props {
  reviewText: string;
}

async function analyzeSentiment(reviewText: string) {
  // API KEY
  const apiKey = process.env.NEXT_PUBLIC_HUGGINGFACE_API_KEY;
  try {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/cardiffnlp/twitter-roberta-base-sentiment",
      {
        method: "POST",
        body: JSON.stringify({ text: reviewText }),
        headers: {
          Authorization: "Bearer " + apiKey,
        },
      }
    );
    const data = await response.json();
    const highestScoreLabel = getHighestScoreLabel(data);
    const sentiment =
      highestScoreLabel === "LABEL_0"
        ? "Negative"
        : highestScoreLabel === "LABEL_1"
        ? "Neutral"
        : "Positive";
    return sentiment;
  } catch (error) {
    console.error("Error analyzing sentiment:", error);
    throw error;
  }
}

function getHighestScoreLabel(sentiments: any[]) {
  let highestScoreLabel = "";
  let highestScore = -1;

  for (const sentiment of sentiments) {
    if (sentiment.score > highestScore) {
      highestScore = sentiment.score;
      highestScoreLabel = sentiment.label;
    }
  }

  return highestScoreLabel;
}

export { analyzeSentiment };
