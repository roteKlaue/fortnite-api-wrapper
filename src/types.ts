import { MutableObject } from "sussy-util";
import { AxiosError } from "axios";

interface Banner {
    id: string;
    devName: string;
    name: string;
    description: string;
    category: string;
    fullUsageRights: boolean;
    images: {
        smallIcon: string;
        icon: string;
    }
}

interface ApiError {
    status?: number | string;
    error: string;
}

interface BannerColor {
    id: string;
    color: string;
    category: string;
    subCategory: number;
}

interface Cosmetic {
    id: string;
    name: string;
    description: string;
    type: {
        value: string;
        displayValue: string;
        backendValue: string;
    }
    rarity: {
        value: string;
        displayValue: string;
        backendValue: string;
    }
    series: {
        value: string;
        image: string;
        colors: string[];
        backendValue: string;
    }
    set: {
        value: string;
        text: string;
        backendValue: string;
    }
    introduction: {
        chapter: string;
        season: string;
        text: string;
        backendValue: number;
    }
    images: {
        smallIcon: string;
        icon: string;
        featured: string;
        Other: MutableObject<string>;
    }
    variants: {
        channel: string;
        type: string;
        options: {
            tag: string;
            name: string;
            image: string;
        }
    }
    searchTags: string[];
    gameplayTags: string[];
    metaTags: string[];
    showcaseVideo: string;
    dynamicPakId: string;
    displayAssetPath: string;
    definitionPath: string;
    path: string;
    added: Date;
    shopHistory: Date[];
}

interface NewCosmetics {
    build: string;
    previousBuild: string;
    hash: string;
    date: Date;
    lastAddition: Date;
    items: Cosmetic[];
}

const LANGUAGES = {
    english: "en",
    german: "de",
    arabic: "ar",
    japanese: "ja",
    spanish: "es",
    french: "fr",
    italian: "it",
    korean: "ko",
    polish: "pl",
    portuguese: "pt-BR",
    russian: "ru",
    turkish: "tr",
    chineseSimplified: "zh-CN",
    chineseTraditional: "zh-Hant",
} as const;

type LanguageCode = typeof LANGUAGES[keyof typeof LANGUAGES];

interface CreatorCode {
    code: string,
    account: {
        id: string,
        name: string
    },
    status: string,
    verified: boolean
}

interface Map {
    images: {
        blank: string,
        pois: string
    },
    pois: POI[]
}

interface POI {
    id: string,
    name: string,
    location: {
        x: number,
        y: number,
        z: number
    }
}

interface News {
    hash: string;
    date: Date;
    image: string;
    messages: Message[] | null;
    modts: Motd[] | null;
}

interface Motd {
    id: string;
    title: string;
    tabTitle: string;
    body: string;
    image: string;
    titleImage: string;
    sortingPriority: number;
    hidden: boolean;
    videoString: string;
    videoId: string;
}

interface Message {
    title: string;
    body: string;
    image: string;
    adspace: string | null;
}

interface AES {
    build: string,
    mainKey: string,
    dynamicKeys: [
        {
            pakFilename: string,
            pakGuid: string,
            key: string
        }
    ],
    updated: Date;
}

interface Playlist {
    id: string;
    name: string;
    subName: string;
    description: string;
    gameType: string;
    ratingType: string;
    minPlayers: number;
    maxPlayers: number;
    maxTeams: number;
    maxTeamSize: number;
    maxSquads: number;
    maxSquadSize: number;
    isDefault: boolean;
    isTournament: boolean;
    isLimitedTimeMode: boolean;
    isLargeTeamGame: boolean;
    accumulateToProfileStats: boolean;
    images: {
        showcase: string;
        missionIcon: string;
    }
    gameplayTags: string[];
    path: string;
    added: Date;
}

interface Shop {
    hash: string;
    date: Date;
    vbuckIcon: string;
    featured: Category | null;
    daily: Category | null;
    specialFeatured: Category | null;
    specialDaily: Category | null;
    votes: {
        name: string;
        entries: Offer[];
    } | null;
    voteWinners: {
        name: string;
        entries: Offer[];
    } | null;
}

interface Category {
    name: string | null;
    entries: Offer[];
}

interface Offer {
    regularPrice: number,
    finalPrice: number,
    bundle: {
        name: string;
        info: string;
        image: string;
    }[] | null,
    banner: {
        value: string;
        intensity: string;
        backendValue: string;
    }[] | null,
    giftable: boolean,
    refundable: boolean,
    sortPriority: number,
    categories: string[],
    sectionId: string,
    section: {
        id: string;
        name: string;
        index: number;
        landingPriority: number;
        sortOffersByOwnership: boolean;
        showIneligibleOffers: boolean;
        showIneligibleOffersIfGiftable: boolean;
        showTimer: boolean;
        enableToastNotification: boolean;
        hidden: boolean;
    } | null,
    devName: string,
    offerId: string,
    displayAssetPath: string | null,
    tileSize: string,
    newDisplayAssetPath: string,
    newDisplayAsset: {
        id: string,
        cosmeticId: string,
        materialInstances: MaterialInstance[]
    },
    items: Item[]
}

interface Item {
    id: string,
    name: string,
    description: string,
    type: {
        value: string,
        displayValue: string,
        backendValue: string
    },
    rarity: {
        value: string,
        displayValue: string,
        backendValue: string
    },
    series: {
        value: string,
        image: string,
        colors: string[],
        backendValue: string
    } | null,
    set: {
        value: string,
        text: string,
        backendValue: string,
    } | null,
    introduction: {
        chapter: string,
        season: string,
        text: string,
        backendValue: string
    },
    images: {
        smallIcon: string,
        icon: string,
        featured: string,
        other: MutableObject<string> | null
    },
    variants: {
        channel: string,
        type: string,
        options: {
            tag: string,
            name: string,
            image: string,
        }[]
    }[] | null,
    searchTags: string[] | null,
    gameplayTags: string[],
    metaTags: string[] | null,
    showcaseVideo: string,
    dynamicPakId: string | null,
    displayAssetPath: string,
    definitionPath: string,
    path: string,
    added: Date,
    shopHistory: Date[]
}

interface MaterialInstance {
    id: string,
    images: MutableObject<string>,
    colors: MutableObject<string>,
    scalings: MutableObject<string>,
    flags: MutableObject<boolean>
}

interface BatteRoyaleStats {
    account: {
        id: string;
        name: string;
    }
    battlePass: {
        level: number;
        progress: number;
    }
    image: string;
    stats: {
        all: Modes | null;
        keyboardMouse: Modes | null;
        gamepad: Modes | null;
        touch: Modes | null;
    }
}

interface Modes {
    overall: Score;
    solo: Score;
    duo: Score;
    trio: null;
    squad: Score;
    ltm: Score;
}

interface Score {
    score: number;
    wins: number;
    kills: number;
    deaths: number;
    matches: number;
    minutesPlayed: number;
    playersOutlived: number;
    scorePerMin: number;
    killsPerMin: number;
    scorePerMatch: number;
    killsPerMatch: number;
    kd: number;
    winRate: number;
    lastModified: Date;
}

const PLATFORMS = {
    AllPlatforms: "all",
    KeyboardAndMouse: "keyboardMouse",
    Gamepad: "gamepad",
    Touch: "touch",
    None: "none",
} as const;

type Platforms = typeof PLATFORMS[keyof typeof PLATFORMS];

const ACCOUNT_TYPES = {
    EpicGames: "epic",
    PlayStationNetwork: "psn",
    XBoxLive: "xbl",
} as const;

type AccountTypes = typeof ACCOUNT_TYPES[keyof typeof ACCOUNT_TYPES];

interface WrappedData<T> {
    data: {
        data: T
    }
}

type HandlerReply<T> = [WrappedData<T> | WrappedData<ApiError>, AxiosError | null];

type ReturnType<T> = Promise<T | ApiError>;

export {
    AES,
    Banner,
    BannerColor,
    Cosmetic,
    NewCosmetics,
    LanguageCode,
    ApiError,
    CreatorCode,
    Map,
    POI,
    News,
    Motd,
    Message,
    Playlist,
    Shop,
    Category,
    Offer,
    Item,
    MaterialInstance,
    BatteRoyaleStats,
    Platforms,
    AccountTypes,
    WrappedData,
    HandlerReply,
    ReturnType,

    LANGUAGES,
    PLATFORMS,
    ACCOUNT_TYPES,
}