var Translations = {
    "SkipBackButtonText": "Skip back",
    "SkipForwardButtonText": "Skip forward",
    "PlayPauseButtonText": "Play/Pause",
    "VolumeButtonText": "Volume",
    "SettingsButtonText": "Settings",
    "ResumeVideoPlayback": "Resume Video Playback",

    "QualityMenuText": "Quality",
    "QualityAutoText": "Auto",
    "LanguageMenuText": "Language",
    "CCMenuText": "Captions",
    "BackFromText": "Back from",
    "OnText": "On",
    "OffText": "Off",

    "SocialIcon-facebook": "Facebook",
    "SocialIcon-twitter": "Twitter",
    "SocialIcon-googleplus": "Google+",
    "SocialIcon-email": "Email",
    "SocialIcon-link": "Website",
    "CollapseText": "Collapse",
    "ExpandText": "Expand",

    "PreparedForText": "Prepared for",

    "CopyrightText": "Copyright 2018 Xerox Chile",
    "PoweredByFooterText": "Powered by",
    "HelpFooterText": "Help",
    "PrivacyPolicyFooterText": "Privacy Policy",

    /**
     * Settings for the CTA buttons.
     *
     * In this object you can define up to 5 CTA buttons, each with a "label" and "icon" property.
     * The key for each object should be unique to each button. And the "icon" property should correspond to
     * a CTA icon CSS class in the form of ".cta__icon--<icon>".
     *
     * In addition, each button can either have a "card" or "url" property to define its function.
     *
     * "card" buttons activate a side card that is defined in the video project. This property should have the value
     * of the target cards id from the Interactions Manager in the EOV Director.
     *
     * "url" buttons will open the specified URL in a new window/tab when clicked
     */
    "CtaButtonSettings": {
        "button1": { 
            "card": "d9f18cf7",
            "label": "Contact",
            "icon": "contact"
        },
        "button2": {
            "label": "WebSite",
            "url": "https://www.xerox.com/index/escl.html",      
            "icon": "website"
        },
        "button3": {
            "card": "d9f18cf7",
            "label": "Email",
            "icon": "email"
        },
        "button4": {
            "card": "d9f18cf7",
            "label": "HTML",
            "icon": "save"
        },
        "button5": {
            "label": "Compartir",
            "url": "https://www.xerox.com/index/escl.html",
            "icon": "share"
        }
    },
    /**
     * Settings for the promo graphic sections. By default only 2 promo areas can be defined.
     * Each promo graphic requires the following:
     *
     * "trackingName" to define how clicks on it will be tracked within the EngageOne Video platform
     * "url" to go to when the promo is clicked
     * "desktopImage" the relative path to the promo image used on desktop breakpoints. This should be portrait.
     * "mobileImage" the relative path to the promo image used on mobile breakpoints. This should be landscape.
     */
    "PromoSettings": {
        "promo1": {
            "trackingName": "promo1",
            "url": "https://www.xerox.com/index/escl.html",
            "label": "Promo (Top)",
            "desktopImage": "./images/promo1.png",
            "mobileImage": "./images/cel1.png"
        },
        "promo2": {
            "trackingName": "promo2",
            "url": "https://www.xerox.com/index/escl.html",
            "label": "Promo (Bottom)",
            "desktopImage": "./images/promo3.png",
            "mobileImage": "./images/cel2.png"
        }
    },

    /**
     * Chapter settings used to build the timeline and StateMap, which maps video states to friendly names.
     *
     * Within each "chapter" one or more states can exist. The state "width" specifies the width of the "chapter",
     * expressed as a percentage. The state "cardId" corresponds to the states id in the EngageOne Video Director.
     * There also exists "label" which specifies the label for the timeline "chapter".
     *
     * All videos have an END state, this should not be defined here as it is an implicit construct.
     */
   "ChapterSettings": [
        {
            "label": "Introduction",
            "states": [
                {
                    "cardId": "START",
                    "width": 40
                }
            ]
        },
        {
            "label": "Option",
            "states": [
                {
                    "cardId": "8a53e08d",
                    "width": 30
                }
            ]
        },
        
        {
            "label": "Thanks",
            "states": [
                {
                    "cardId": "fbed4eb9",
                    "width": 30
                }
            ]
        }
    ]
}
