const getOpinions = async () => {
  try {
    const respons = await fetch("http://localhost:3002/opinions");
    if (respons.ok) {
      const data = await respons.json();
      return data;
    } else {
      throw new Error("Could't download the data");
    }
  } catch (error) {
    return error;
  }
};

export default getOpinions;
