const postEmail = async (email) => {
  const data = {
    email: email,
  };

  try {
    const response = await fetch("http://localhost:3001/e-mails", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      return "email added";
    } else {
      throw new Error("could't add the email");
    }
  } catch (error) {
    return error;
  }
};

export default postEmail;
