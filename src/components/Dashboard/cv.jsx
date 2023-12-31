const Cv = () => {
  const handleFileUpload = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", event.target.files[0]);

    try {
      const response = await fetch(
        "https://portfolio-back-end-ija7.onrender.com/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        window.alert("CV Uploaded successfully");
      } else {
        window.alert("Failed to upload CV");
      }
    } catch (error) {
      console.error("Error uploading CV:", error);
    }
  };

  return (
    <div id="cv">
      <h2>Upload your CV</h2>
      <form
        method="POST"
        action="http://localhost:5000/upload"
        encType="multipart/form-data"
      >
        <input
          className="email-name-search"
          type="file"
          accept="application/pdf"
          onChange={handleFileUpload}
          name="file"
        />
        <button className="email-name-button" type="submit">
          Upload
        </button>
      </form>
    </div>
  );
};

export default Cv;
