export class ImageHelper {
  createImageFromBlob(image: Blob, imageToShow: any) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      imageToShow = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }
}
