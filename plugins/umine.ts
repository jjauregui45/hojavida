
import translation from "./translation_es";

export default function umine(){
 
    const translationArchive:any = translation();
    let userLang = 'es';

    const t = (key:any) => {
        return translationArchive[key][`${userLang}`];
    }
  
}