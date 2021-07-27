// NOTE в алфавитном порядке

export const articles = (el) => {
  if (el.$i18n.locale === 'de') {
    return {
      title: 'Artikel',
      description: 'Notizen und Bewertungen zu Webdesign und -entwicklung',
    }
  } else if (el.$i18n.locale === 'en') {
    return {
      title: 'Articles',
      description: 'Web design and development notes and reviews',
    }
  }
}

export const cases = (el) => {
  if (el.$i18n.locale === 'de') {
    return {
      crumbs: 'Fälle',
      title: 'Designer & Entwickler',
      description: 'Portfolio von Full-Stack-Entwickler, UI/UX-Designer',
    }
  } else if (el.$i18n.locale === 'en') {
    return {
      crumbs: 'Cases',
      title: 'Designer & Develop',
      description: 'Portfolio of full stack developer, UI/UX Designer',
    }
  }
}

export const certificates = (el) => {
  if (el.$i18n.locale === 'de') {
    return {
      title: 'Bescheinigungen',
      description: 'Kurse und Tests',
    }
  } else if (el.$i18n.locale === 'en') {
    return {
      title: 'Certificates',
      description: 'Courses and tests',
    }
  }
}

export const coding = (el) => {
  if (el.$i18n.locale === 'de') {
    return {
      title: 'Reiner Code',
      description: 'Beispiele für Arbeit und Codequalität',
    }
  } else if (el.$i18n.locale === 'en') {
    return {
      title: 'Pure code',
      description: 'Examples of work and code quality',
    }
  }
}

export const contact = (el) => {
  if (el.$i18n.locale === 'de') {
    return {
      title: 'Kontakt',
      description: 'Immer in Kontakt, zu einer für Sie passenden Zeit!',
    }
  } else if (el.$i18n.locale === 'en') {
    return {
      title: 'Contact',
      description: 'Always in touch, at a convenient time for you!',
    }
  }
}

export const desApps = (el) => {
  if (el.$i18n.locale === 'de') {
    return {
      crumbs: 'Die Fälle. Designs. Apps',
      title: 'UI/UX App Design',
      description: 'App Designer Portfolio - Beispiele für Arbeiten',
    }
  } else if (el.$i18n.locale === 'en') {
    return {
      crumbs: 'Cases. Design. Apps',
      title: 'UX/UI App Design',
      description: 'App Designer portfolio - examples of work',
    }
  }
}

export const desSite = (el) => {
  if (el.$i18n.locale === 'de') {
    return {
      crumbs: 'Die Fälle. Designs. Websites',
      title: 'Prototyping und Entwurf',
      description: 'Web-Designer-Portfolio - Beispiele von Arbeiten',
    }
  } else if (el.$i18n.locale === 'en') {
    return {
      crumbs: 'Cases. Design. Websites',
      title: 'Prototyping and design',
      description: 'Web designer portfolio - examples of work',
    }
  }
}

export const devBanners = (el) => {
  if (el.$i18n.locale === 'de') {
    return {
      crumbs: 'Die Fälle. Entwicklung. Banner',
      title: 'HTML5 Banners',
      description:
        'Entwicklung von HTML5-Bannern für YAN, Google KMS, Adfox und andere - Beispiele für Arbeiten',
    }
  } else if (el.$i18n.locale === 'en') {
    return {
      crumbs: 'Cases. Development. Banners',
      title: 'HTML5 Banners',
      description:
        'Development of HTML5 banners for YAN, Google KMS, Adfox and others - examples of work',
    }
  }
}

export const devSite = (el) => {
  if (el.$i18n.locale === 'de') {
    return {
      crumbs: 'Die Fälle. Entwicklung. Webseiten',
      title: 'Entwicklung einer Website',
      description: 'Webentwickler-Portfolio - Beispiele für Arbeiten',
    }
  } else if (el.$i18n.locale === 'en') {
    return {
      crumbs: 'Cases. Development. Websites',
      title: 'Website development',
      description: 'Web developer portfolio - examples of work',
    }
  }
}

export const drawings = (el) => {
  if (el.$i18n.locale === 'de') {
    return {
      title: 'Zeichnungen',
      description: 'Grafik, Malerei, Skizzen - Beispiele für Arbeiten',
    }
  } else if (el.$i18n.locale === 'en') {
    return {
      title: 'Drawings',
      description: 'Graphics, painting, sketches - examples of work',
    }
  }
}

export const illustrations = (el) => {
  if (el.$i18n.locale === 'de') {
    return {
      crumbs: 'Die Fälle. Design. Illustrationen',
      title: 'Illustrationen für Websites',
      description:
        'Illustrationen für Apps und Websites - Beispiele für Arbeiten',
    }
  } else if (el.$i18n.locale === 'en') {
    return {
      crumbs: 'Cases. Design. Illustrations',
      title: 'Illustrations for websites',
      description: 'Illustrations for apps and websites - examples of work',
    }
  }
}
export const logos = (el) => {
  if (el.$i18n.locale === 'de') {
    return {
      crumbs: 'Die Fälle. Design. Logos',
      title: 'Logo-Entwurf',
      description: 'Entwurf und Entwicklung von Logos - Beispiele für Arbeiten',
    }
  } else if (el.$i18n.locale === 'en') {
    return {
      crumbs: 'Cases. Design. Logos',
      title: 'Logo design',
      description: 'Design and development of logos - examples of work',
    }
  }
}

export const photoshop = (el) => {
  if (el.$i18n.locale === 'de') {
    return {
      title: 'Photoshop',
      description: 'Bildbearbeitung in Photoshop BEFORE und AFTER',
    }
  } else if (el.$i18n.locale === 'en') {
    return {
      title: 'Photoshop',
      description: 'Image processing in Photoshop BEFORE and AFTER',
    }
  }
}

export const projects = (el) => {
  if (el.$i18n.locale === 'de') {
    return {
      title: 'Projekte und Ideen',
      description:
        'Liste der Projekte, an denen ich einmal gearbeitet habe und an denen ich jetzt arbeite',
    }
  } else if (el.$i18n.locale === 'en') {
    return {
      title: 'Projects and ideas',
      description:
        'List of projects that I once worked on and are working on now',
    }
  }
}

export const timeline = (el) => {
  if (el.$i18n.locale === 'de') {
    return {
      title: 'Zeitleiste',
      description: 'Liste der beruflichen Erfolge und wichtigen Ereignisse',
    }
  } else if (el.$i18n.locale === 'en') {
    return {
      title: 'Timeline',
      description:
        'Schedule of professional achievements and significant events',
    }
  }
}
