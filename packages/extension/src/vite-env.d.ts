/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_WEB_EXT_CHROMIUM_BINARY_PATH: string
    readonly VITE_WEB_EXT_CHROMIUM_PROFILE_PATH: string
    readonly VITE_WEB_EXT_START_URL: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}