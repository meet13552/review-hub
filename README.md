
# Review Hub

## Objective

A movie review web application using Next.js that allows users to input a movie review, generate a sentiment analysis of the review, and store that for others to agree/disagree with.

## Requirements

Create a web app using React and node.js that has the following components. Note, these are
suggestions, as long as the web app can perform the actions described, you are free to
construct a UI that you believe is best:
● A button labeled “Add Review” that will open a textbox where users can input text.
Example text is provided at the bottom of this document.
● A button labeled "Analyze" that will process the sentiment analysis.
● A component that displays the result (e.g., "Positive", "Negative", or "Neutral").
● Integration with AI/ML tool, such as HuggingFace. Note, each tool outputs a different value, and you
may need to set thresholds for “Positive”, “Negative”, or “Neutral” outputs. Call the API
when the “Analyze” button is clicked and display the result on the frontend. You do NOT
need to train your own model.
● Each analyzed review, along with the date and time of the review, should be added to a
table
● The user should be able to upvote/downvote the review, and all reviews in the table are
sorted by number of votes. For the purpose of this assessment, assume that you can
upvote/downvote as many times as you like.
● You are not required to store information in a database, and can store it in app state.

## Demo

https://review-hub-gilt.vercel.app


## Run Locally

Prerequisite: Node v18.17.1

Clone the project

```bash
  https://github.com/meet13552/review-hub.git
```

Go to the project directory

```bash
  cd review-hub
```

Install dependencies

```bash
  npm i
```

Start the server

```bash
  npm run dev
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env.local file

`HUGGINGFACE_API_KEY`

## Tech Stack

Next.js, React.js


## Author

- [@meet13552](https://www.github.com/meet13552)

