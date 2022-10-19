const imagePreview = document.getElementById("img-preview");
const imageUpLoader = document.getElementById("img-uploader");

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/ddl3snuoe/image/upload';
const CLOUDINARY_UPLOAD_PRESET = 'pzsfr2g4';

imageUpLoader.addEventListener("change", async (e) => {
  const file = e.target.files[0];

  const formData = new FormData();
  formData.append('file',file);
  formData.append('upload_preset',CLOUDINARY_UPLOAD_PRESET);

  const res = await axios.post(CLOUDINARY_URL, formData, {
    headers:{
      'Content-Type': 'multipart/form-data'
    }
  });
 
  console.log(res.data.secure_url)
  imagePreview.src = res.data.secure_url;

});