function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'ar,en', //ضع هنا اللغات المطلوبة للترجمة , put here language that u need to translate
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: true
    }, 'google_translate_element');
}