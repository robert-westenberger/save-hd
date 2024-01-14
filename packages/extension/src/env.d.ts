/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_CHROMIUM_BINARY_PATH: string
    readonly VITE_CHROMIUM_PROFILE_PATH: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}