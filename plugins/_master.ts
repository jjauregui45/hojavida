
import translation_es from "./translation_es";
import translation_en from "./translation_en";

export default defineNuxtPlugin(({app, store}) => {

    const translationArchive_es:any = translation_es();
    const translationArchive_en:any = translation_en();
    // let userLang = (localStorage.getItem('cv-lang') != undefined)? localStorage.getItem('cv-lang'): 'es' ; //SSR
    let userLang = 'es' ;

    const t = (key:any) => {
        let returnLang = '';
        if(userLang == 'es'){ returnLang  = translationArchive_es[key];}
        if(userLang == 'en'){ returnLang  = translationArchive_en[key];}
        if(returnLang == undefined){
            return "ERROR:["+ userLang +"]["+ key +"]";
        }
        return returnLang;
    }

    const changeLang = (setLang:any) => {
        userLang = setLang;
        console.log(userLang);
    }

    const showMessage = ({ content = "", color = "" }) => {
      store.commit("snackbar/showMessage", { content, color });
    }


    return {
        provide: {
            t,
            showMessage,
        }
    }
})
