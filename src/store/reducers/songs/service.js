
import data from "./data.json"

export const getSongsAPI = async (payload) => {
  try {
      return await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data)
            }, 2000);
      })
  } catch (error) {
    throw error;
  }
}