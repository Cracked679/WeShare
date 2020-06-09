let db = {
  users: [
    {
      userId: "",
      email: "user@gmail.com",
      handle: "user",
      createdAt: "2020-05-27T15:26:18.678Z",
      imageUrl: "image/dfadfaasdasd/asdsadac",
      bio: "Hello,my name is user,nice to meet you",
      website: "https://user.com",
      location: "Nashik,India",
    },
  ],
  screams: [
    {
      userHandle: "user",
      body: "Thi is Scream body",
      createdAt: "2020-05-27T15:26:18.678Z",
      likeCount: 5,
      commentCount: 2,
    },
  ],
  comments: [
    {
      userHandle: "user",
      screamId: "sdnjansdnansjn",
      body: "nice one mate",
      createdAt: "2020-05-27T15:26:18.678Z",
    },
  ],
  notifications: [
    {
      recipient: "user",
      sender: "john",
      read: "true | false",
      screamId: "jashjkdbkbjkbajksd",
      type: "like| comment",
      createdAt: "2020-05-27T15:26:18.678Z",
    },
  ],
};

const userDetails = {
  credentials: {
    userId: "aasdkjasdkjasdjkl",
    email: "user@email.com",
    handle: "user",
    createdAt: "2020-05-27T15:26:18.678Z",
    imageurl: "image/asdjasjdnj/asdhasdasd",
    bio: "Hello, my name is user,nice to meet you",
    website: "https://user.com",
    location: " Nashik,India",
  },
  likes: [
    {
      userHandle: "user",
      screamId: "jajksdkhkk",
    },
    {
      userHandle: "user",
      screamId: "asdllajsnldnknasl",
    },
  ],
};