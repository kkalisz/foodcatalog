import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { app } from "../firebase/client"
const storage = getStorage(app)

export const uploadRestaurantImage = (file: File,
    firmId: string) => {

}