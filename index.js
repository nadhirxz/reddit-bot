require('dotenv').config();

const Snoowrap = require('snoowrap');
const Snoostorm = require('snoostorm');

// Build Snoowrap and Snoostorm clients
const r = new Snoowrap({
    userAgent: " ",
    clientId: " ",
    clientSecret: " ",
    username: " ",
    password: " "
});
const client = new Snoostorm(r);

// Configure options for stream: subreddit & results per query
const streamOpts = {
    subreddit: 'testingground4bots',
    results: 20,
    pollTime: 3000
};

// Create a Snoostorm CommentStream with the specified options
const comments = client.CommentStream(streamOpts);

comments.on('comment', (comment) => {
    console.log(`New comment by ${comment.author.name}`);
    if (comment.body === 'Huh ?') {
        comment.reply('Sorry, that was a strange thing to ask.\n\n^(PS: i\'m a robot)');
    }
});