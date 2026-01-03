import { createContext } from "react"
import { dict } from "./dictionary"

interface ILanguageContext {
    language: string,
    setLanguage: React.Dispatch<React.SetStateAction<string>>
}

export const DEFAULT_LANGUAGE = 'gr'

export const LanguageContext = createContext<ILanguageContext>({language: DEFAULT_LANGUAGE, setLanguage: () => {}})

export const translate = (textIdString: string, activeLanguage: string) => {
    const textId = textIdString.split('.')
    const translationObject = dict[textId[0]][textId[1]]
    return translationObject[activeLanguage]
}