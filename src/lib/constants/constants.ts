export const revalidateNum = 86400

export const apiUrl = process.env.NEXT_PUBLIC_RIOT_API_URL || 'https://ddragon.leagueoflegends.com'
export const rotateApiUrl = process.env.NEXT_PUBLIC_RIOT_ROTATE_API_URL || 'https://kr.api.riotgames.com/lol/platform/v3/champion-rotations'
export const splashImgUrl = `${apiUrl}/cdn/img/champion/splash`
export const LoadingImgUrl = `${apiUrl}/cdn/img/champion/loading`

export const dataUrl = (version: string) => `${apiUrl}/cdn/${version}/data/ko_KR`
export const itemImgUrl = (version: string, itemImg: string) => `${apiUrl}/cdn/${version}/img/item/${itemImg}`
export const spellImgUrl = (version: string, spellImg: string) => `${apiUrl}/cdn/${version}/img/spell/${spellImg}`
export const passiveImgUrl = (version: string, passiveImg: string) => `${apiUrl}/cdn/${version}/img/passive/${passiveImg}`
