import { Banner, BannerColor, Cosmetic, LanguageCode, NewCosmetics, LANGUAGES, CreatorCode, Map, News, AES, Playlist, HandlerReply, ReturnType, Shop } from "./types";
import { asyncHandler } from "sussy-util";
import axios from "axios";

/**
 * Handles an HTTP request using Axios and returns the result or an error.
 * @param {string} url - The URL to make the request to.
 * @param {object} headers - Optional headers to include in the request.
 * @returns {Promise<WrappedData<T> | ApiError>} A Promise that resolves with the result or  with an ApiError.
 */
const handleRequest = async <T>(url: string, headers?: object): ReturnType<T> => {
    const [result, error] = await asyncHandler(axios.get.bind(axios, ...(headers ? [url] : [url, headers]))) as HandlerReply<T>;
    if (error) return { status: error.code, error: error.message };
    return result.data.data;
}

/**
 * Returns the current AES key
 * @param {string} format - The key format, "hex" or "base64" (default is "hex").
 * @returns {Promise<AES | ApiError>} A Promise that resolves with AES or  with an ApiError.
 */
const aesKey = (format: "hex" | "base64" = "hex"): ReturnType<AES> => {
    return handleRequest<AES>(`https://fortnite-api.com/v2/aes?keyFormat=${format}`);
}

/**
 * Returns an array of all banners.
 * @param {LanguageCode} language - The language for banner information (default is English).
 * @returns {Promise<Banner[] | ApiError>} A Promise that resolves with a list of banners or  with an ApiError.
 */
const banners = (language: LanguageCode = LANGUAGES.english): ReturnType<Banner[]> => {
    return handleRequest<Banner[]>(`https://fortnite-api.com/v1/banners?language=${language}`);
}

/**
 * Returns an array of all banner colors.
 * @param {LanguageCode} language - The language for banner color information (default is English).
 * @returns {Promise<BannerColor[] | ApiError>} A Promise that resolves with a list of banner colors or  with an ApiError.
 */
const bannerColors = (language: LanguageCode = LANGUAGES.english): ReturnType<BannerColor[]> => {
    return handleRequest<BannerColor[]>(`https://fortnite-api.com/v1/banners/colors?language=${language}`);
}

/**
 * Returns an array of all battle royale cosmetics.
 * @param {LanguageCode} language - The language for cosmetic information (default is English).
 * @returns {Promise<Cosmetic[] | ApiError>} A Promise that resolves with a list of cosmetics or  with an ApiError.
 */
const cosmetics = (language: LanguageCode = LANGUAGES.english): ReturnType<Cosmetic[]> => {
    return handleRequest<Cosmetic[]>(`https://fortnite-api.com/v2/cosmetics/br?language=${language}`);
}

/**
 * Retrieves information about new Fortnite cosmetics.
 * @param {LanguageCode} language - The language for cosmetic information (default is English).
 * @returns {Promise<NewCosmetics | ApiError>} A Promise that resolves with new cosmetics information or  with an ApiError.
 */
const newCosmetics = (language: LanguageCode = LANGUAGES.english): ReturnType<NewCosmetics> => {
    return handleRequest<NewCosmetics>(`https://fortnite-api.com/v2/cosmetics/br/new?language=${language}`);
}

/**
 * Retrieves information about a specific Fortnite cosmetic by ID.
 * @param {string} id - The ID of the cosmetic to look up.
 * @param {LanguageCode} language - The language for cosmetic information (default is English).
 * @returns {Promise<Cosmetic | ApiError>} A Promise that resolves with cosmetic information or  with an ApiError.
 */
const cosmeticByID = (id: string, language: LanguageCode = LANGUAGES.english): ReturnType<Cosmetic> => {
    return handleRequest<Cosmetic>(`https://fortnite-api.com/v2/cosmetics/br/${id}?language=${language}`);
}

/**
 * Searches for Fortnite cosmetics by a list of IDs.
 * @param {string[]} ids - An array of cosmetic IDs to search for.
 * @param {LanguageCode} language - The language for cosmetic information (default is English).
 * @returns {Promise<Cosmetic[] | ApiError>} A Promise that resolves with an array of cosmetics or  with an ApiError.
 */
const searchCosmeticsByIDs = (ids: string[], language: LanguageCode = LANGUAGES.english): ReturnType<Cosmetic[]> => {
    return handleRequest<Cosmetic[]>(`https://fortnite-api.com/v2/cosmetics/br/search/ids?id=${ids.join(",")}&language=${language}`);
}

/**
 * Retrieves information about a specific creator code.
 * @param {string} code - The creator code to look up.
 * @returns {Promise<CreatorCode | ApiError>} A Promise that resolves with creator code information or  with an ApiError.
 */
const creatorCode = (code: string): ReturnType<CreatorCode> => {
    return handleRequest<CreatorCode>(`https://fortnite-api.com/v2/creatorcode?name=${code}`);
}

/**
 * Retrieves information about the Fortnite map.
 * @param {LanguageCode} language - The language for map information (default is English).
 * @returns {Promise<Map | ApiError>} A Promise that resolves with map information or  with an ApiError.
 */
const map = (language: LanguageCode = LANGUAGES.english): ReturnType<Map> => {
    return handleRequest<Map>(`https://fortnite-api.com/v1/map?language=${language}`);
}

/**
 * Retrieves Fortnite news (including Battle Royale, Safe The World and Creative news).
 * ! Creative is as of 29.09.2023 always NULL
 * @param {LanguageCode} language - The language for news information (default is English).
 * @returns {Promise<News | null | ApiError>} A Promise that resolves with news or null if there's no news available, or  with an ApiError.
 */
const news = (language: LanguageCode = LANGUAGES.english): ReturnType<{ br: News | null, stw: News | null, creative: News | null }> => {
    return handleRequest<{ br: News | null, stw: News | null, creative: News | null }>(`https://fortnite-api.com/v2/news?language=${language}`);
}

/**
 * Retrieves Battle Royale news.
 * @param {LanguageCode} language - The language for Battle Royale news information (default is English).
 * @returns {Promise<News | null | ApiError>} A Promise that resolves with Battle Royale news or null if there's no news available, or  with an ApiError.
 */
const batteRoyaleNews = (language: LanguageCode = LANGUAGES.english): ReturnType<News | null> => {
    return handleRequest<News | null>(`https://fortnite-api.com/v2/news/br?language=${language}`);
}

/**
 * Retrieves Save the World news.
 * @param {LanguageCode} language - The language for Save the World news information (default is English).
 * @returns {Promise<News | null | ApiError>} A Promise that resolves with Save the World news or null if there's no news available, or  with an ApiError.
 */
const safeTheWorldNews = async (language: LanguageCode = LANGUAGES.english): ReturnType<News | null> => {
    return handleRequest<News | null>(`https://fortnite-api.com/v2/news/stw?language=${language}`);
}

/**
 * Retrieves Creative news.
 * ! as of 29.09.2023 always return ApiError
 * @param {LanguageCode} language - The language for Creative news information (default is English).
 * @returns {Promise<News | null | ApiError>} A Promise that resolves with Creative news or null if there's no news available, or  with an ApiError.
 */
const creativeNews = (language: LanguageCode = LANGUAGES.english): ReturnType<News | null> => {
    return handleRequest(`https://fortnite-api.com/v2/news/creative?language=${language}`);
}

/**
 * Retrieves Fortnite playlists.
 * @param {LanguageCode} language - The language for playlist information (default is English).
 * @returns {Promise<Playlist[] | ApiError>} A Promise that resolves with a list of playlists or  with an ApiError.
 */
const playlists = (language: LanguageCode = LANGUAGES.english): ReturnType<Playlist[]> => {
    return handleRequest(`https://fortnite-api.com/v1/playlists?language=${language}`);
}

/**
 * Retrieves information about a specific Fortnite playlist by ID.
 * @param {string} id - The ID of the playlist to look up.
 * @param {LanguageCode} language - The language for playlist information (default is English).
 * @returns {Promise<Playlist | ApiError>} A Promise that resolves with playlist information or  with an ApiError.
 */
const playlistByID = (id: string, language: LanguageCode = LANGUAGES.english): ReturnType<Playlist> => {
    return handleRequest(`https://fortnite-api.com/v1/playlists/${id}?language=${language}`);
}

/**
 * Retrieves information about todays in-game shop.
 * @param {LanguageCode} language - The language for shop information (default is English).
 * @returns {Promise<Shop | ApiError>} A Promise that resolves with shop information or  with an ApiError.
 */
const shop = (language: LanguageCode = LANGUAGES.english): ReturnType<Shop> => {
    return handleRequest<Shop>(`https://fortnite-api.com/v2/shop/br?language=${language}`);
}

/**
 * Returns data of the current battle royale shop (combines the special and default categories into one)
 * @param {LanguageCode} language - The language for shop information (default is English).
 * @returns {Promise<Shop | ApiError>} A Promise that resolves with shop information or  with an ApiError.
 */
const combinedShop = (language: LanguageCode = LANGUAGES.english): ReturnType<Shop> => {
    return handleRequest<Shop>(`https://fortnite-api.com/v2/shop/br/combined?language=${language}`);
}

const a = {
    headers: {
        'Authorization': "api-key"
    }
}



export {
    aesKey,

    banners,
    bannerColors,

    cosmetics,
    newCosmetics,
    cosmeticByID,
    searchCosmeticsByIDs,

    creatorCode,

    map,

    news,
    batteRoyaleNews,
    safeTheWorldNews,
    creativeNews,

    playlists,
    playlistByID,

    shop,
    combinedShop,
}