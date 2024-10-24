export const attentionListOfConditions = [
  { text: "Verify that the phone number is entered correctly" },
  { text: "Deactivate silent mode" },
  { text: "Have your phone handy" },
  { text: "Answer the phone from an unknown number" },
];

export const positiveFeedbackList = [
  {
    name: "Nath Ryuzaki",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAbD3nm6LSxrJ7JWUuKM4txH6NhvxRG7m6VA&s",
    comment: "Very cool site :) <3",
    likes: 1,
    time: "4m",
    createdAt: "2023-10-22T14:30:00Z",
    emotions: [
      { emotion: "heart", count: 10 },
      { emotion: "like", count: 5 },
      { emotion: "laugh", count: 3 },
    ],
  },
  {
    name: "Gung Wah",
    avatar:
      "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?b=1&s=612x612&w=0&k=20&c=hEPh7-WEAqHTHdQtPrfEN9-yYCiPGKvD32VZ5lcL6SU=",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: new Date(),
    likes: 1,
    time: "3m",
    emotions: [
      { emotion: "like", count: 8 },
      { emotion: "laugh", count: 6 },
    ],
  },
  {
    name: "Jane Doe",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    comment: "I love using this platform!",
    likes: 2,
    time: "2m",
    createdAt: "2023-10-22T15:00:00Z",
    emotions: [
      { emotion: "heart", count: 12 },
      { emotion: "like", count: 7 },
    ],
  },
  {
    name: "John Smith",
    avatar: "https://randomuser.me/api/portraits/men/43.jpg",
    comment: "This is the best service I have ever used!",
    likes: 5,
    time: "1m",
    createdAt: "2023-10-22T15:05:00Z",
    emotions: [
      { emotion: "like", count: 20 },
      { emotion: "laugh", count: 5 },
      { emotion: "heart", count: 2 },
    ],
  },
];

export const emotionIcons = {
  like: { icon: "👍", text: "Like", color: "#1877f2" },
  heart: { icon: "❤️", text: "Love", color: "#f02849" },
  laugh: { icon: "😂", text: "Haha", color: "#f7b125" },
  wow: { icon: "😯", text: "Wow", color: "#f7b125" },
  sad: { icon: "😢", text: "Sad", color: "#f7b125" },
  angry: { icon: "😡", text: "Angry", color: "#f02849" },
};
