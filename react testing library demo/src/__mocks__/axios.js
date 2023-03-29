const mockResponse = {
  data: {
    results: [
      {
        name: {
          title: "Miss",
          first: "mahara",
          last: "ayesha",
        },

        login: {
          username: "yellowpeacock117",
        },

        picture: {
          large: "https://randomuser.me/api/portraits/men/75.jpg",
        },
      },
      {
        name: {
          title: "Miss",
          first: "oshal",
          last: "pinto",
        },
        email: "jennie.nichols@example.com",
        login: {
          username: "yellowpeacock117",
        },

        picture: {
          large: "https://randomuser.me/api/portraits/men/75.jpg",
        },
      },
    ],
  },
};
export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};
