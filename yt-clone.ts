// youtube clone
const users = [
  {
    id: "1",
    name: "John Doe",
    profilePicture: "url_to_image",
    bio: "I love coding.",
    subscriptions: ["1", "2"],
    playlists: ["1"],
  },
  {
    id: "2",
    name: "Jane Smith",
    profilePicture: "url_to_image",
    bio: "JavaScript enthusiast.",
    subscriptions: ["1"],
    playlists: ["2"],
  },
];
const channels = [
  {
    id: "1",
    name: "CodeQuick",
    description: "Learn coding quickly with CodeQuick.",
    subscribers: ["1", "2"],
  },
  {
    id: "2",
    name: "JSWorld",
    description: "Everything about JavaScript.",
    subscribers: ["1"],
  },
];
const videos = [
  {
    id: "1",
    title: "Learn Python in 10 Minutes",
    description: "A quick guide to Python programming.",
    channelId: "1",
    tags: ["Python", "Programming", "Tutorial"],
    likes: 1200,
    dislikes: 100,
    views: 5000,
    uploadDate: "2022-01-01",
    duration: "10:00",
    category: "Education",
    thumbnail: "url_to_thumbnail",
    relatedVideos: ["2", "3"],
    comments: ["1", "2"],
  },
  {
    id: "2",
    title: "JavaScript Basics",
    description: "Introduction to JavaScript programming.",
    channelId: "2",
    tags: ["JavaScript", "Programming", "Tutorial"],
    likes: 900,
    dislikes: 50,
    views: 3000,
    uploadDate: "2022-01-02",
    duration: "15:00",
    category: "Education",
    thumbnail: "url_to_thumbnail",
    relatedVideos: ["1", "3"],
    comments: ["3"],
  },
  {
    id: "4",
    title: "HTML for Beginners",
    description: "A comprehensive guide to HTML for beginners.",
    channelId: "2",
    tags: ["HTML", "Web Development", "Tutorial"],
    likes: 700,
    dislikes: 30,
    views: 2500,
    uploadDate: "2022-01-03",
    duration: "20:00",
    category: "Education",
    thumbnail: "url_to_thumbnail",
    relatedVideos: ["2", "5"],
    comments: [],
  },
  {
    id: "5",
    title: "CSS in 30 Minutes",
    description: "Learn CSS quickly with this 30-minute tutorial.",
    channelId: "2",
    tags: ["CSS", "Web Development", "Tutorial"],
    likes: 800,
    dislikes: 20,
    views: 3000,
    uploadDate: "2022-01-04",
    duration: "30:00",
    category: "Education",
    thumbnail: "url_to_thumbnail",
    relatedVideos: ["2", "4"],
    comments: [],
  },
  {
    id: "6",
    title: "Mastering React",
    description: "Become a React pro with this advanced tutorial.",
    channelId: "1",
    tags: ["React", "Web Development", "Tutorial"],
    likes: 900,
    dislikes: 10,
    views: 3500,
    uploadDate: "2022-01-05",
    duration: "45:00",
    category: "Education",
    thumbnail: "url_to_thumbnail",
    relatedVideos: ["2", "7"],
    comments: [],
  },
  {
    id: "7",
    title: "Vue.js: A Beginner's Guide",
    description: "Get started with Vue.js with this beginner's guide.",
    channelId: "1",
    tags: ["Vue.js", "Web Development", "Tutorial"],
    likes: 1000,
    dislikes: 5,
    views: 4000,
    uploadDate: "2022-01-06",
    duration: "35:00",
    category: "Education",
    thumbnail: "url_to_thumbnail",
    relatedVideos: ["2", "6"],
    comments: [],
  },
  {
    id: "8",
    title: "Angular in One Hour",
    description: "Learn Angular quickly with this one-hour tutorial.",
    channelId: "1",
    tags: ["Angular", "Web Development", "Tutorial"],
    likes: 1100,
    dislikes: 15,
    views: 4500,
    uploadDate: "2022-01-07",
    duration: "60:00",
    category: "Education",
    thumbnail: "url_to_thumbnail",
    relatedVideos: ["2", "6", "7"],
    comments: [],
  },
];
const comments = [
  {
    id: "1",
    userId: "1",
    videoId: "1",
    comment: "Great tutorial, very helpful!",
    likes: 200,
    replies: ["2"],
  },
  {
    id: "2",
    userId: "2",
    videoId: "1",
    comment: "I love Python, thanks for this!",
    likes: 150,
    replies: [],
  },
  {
    id: "3",
    userId: "3",
    videoId: "2",
    comment: "This is a great starting point for JS beginners.",
    likes: 100,
    replies: [],
  },
];
const playlists = [
  { id: "1", userId: "1", name: "Python Tutorials", videos: ["1"] },
  { id: "2", userId: "2", name: "JavaScript Tutorials", videos: ["2"] },
];

// name of the most viewed video o

// title of all videos that have more than 1000 likes
const videosMoreThan1000Likes = videos.filter((video) => video.likes > 1000);
const titleOfVideosMoreThan1000Likes = videosMoreThan1000Likes.map(
  (video) => video.title
);
console.log(titleOfVideosMoreThan1000Likes);

// title of a video that has 1100 likes
const titleOfThevideoMoreThan1100Likes = videos
  .filter((video) => video.likes === 1100)
  .find((video) => video.title);
console.log(titleOfThevideoMoreThan1100Likes);
