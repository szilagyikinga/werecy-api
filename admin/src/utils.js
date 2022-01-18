// https://marmelab.com/react-admin/DataProviders.html#extending-a-data-provider-example-of-file-upload
const convertFileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;

    reader.readAsDataURL(file.rawFile);
  });

export const getImageValue = async (field) => {
  if (!(field?.rawFile instanceof File)) return field;
  console.log(field);
  const base64 = await convertFileToBase64(field);

  return {
    base64,
    name: field.rawFile.path,
    type: field.rawFile.type,
  };
};

export const imageToUrl = (image) => `https://res.cloudinary.com/werecy/image/upload/${image}`;
