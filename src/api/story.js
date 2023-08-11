const HN_BASE_URL = "http://hn.algolia.com/api/v1/search?query=";

const fetchStories = (query) =>
  fetch(HN_BASE_URL + query)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Unexpected response status ${response.status} or content type`);
      }
      return response.json();
    })
    .catch((error) => {
      throw error.message || "Something went wrong";
    });

export { fetchStories };
