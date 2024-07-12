const getSampleStories = async () => {
  try {
    const response = await fetch("http://localhost:3000/stories");
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Can't download sample stories");
    }
  } catch (error) {
    return error;
  }
};

export default getSampleStories;
