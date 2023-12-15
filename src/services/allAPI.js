import { commonAPI } from "./commonAPI";
import { SERVER_URl } from "./serverURL";


// Upload new video
export const uploadNewVideoAPI = async(video)=> {
    return await commonAPI("POST",`${SERVER_URl}/allvideos`,video)
}

// Get all videos
export const getAllVideosAPI = async () =>{
    return await commonAPI("GET",`${SERVER_URl}/allvideos`,"")
}

// View single video
export const getVideoAPI = async (id) =>{
    return await commonAPI("GET",`${SERVER_URl}/allvideos/${id}`,"")
}

// Remove video
export const removeVideoAPI = async(id) =>{
    return await commonAPI("DELETE",`${SERVER_URl}/allvideos/${id}`,{})
}

// Insert video history
export const addVideoToHistoryAPI = async(video) =>{
    return await commonAPI("POST",`${SERVER_URl}/history`,video)
}

// Get video from history
export const getHistoryAPI = async() =>{
    return await commonAPI("GET",`${SERVER_URl}/history`,"")
}

// Remove video history
export const removeHistoryAPI = async(id) =>{
    return await commonAPI("DELETE",`${SERVER_URl}/history/${id}`,{})
}

