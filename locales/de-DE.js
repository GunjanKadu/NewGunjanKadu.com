import { appMeta as config } from '../config/app'

export default {
  all: 'Alle',
  app: {
    cookie: {
      message:
        'Die Website verwendet Analysetools, um Benutzeraktionen zu analysieren, um die Qualität der Website zu verbessern.',
    },
    'general-information': 'Allgemeine Informationen',
    'last-revised': 'Zuletzt überarbeitet',
    license: 'Lizenz',
    loading: 'Laden',
    meta: {
      title: `${config.app.de.title}`,
      description: `${config.app.de.description}`,
    },
    privacy: 'Datenschutz',
    terms: 'Bedingungen für die Nutzung',
    updates: 'Updates',
    category: 'Kategorie | Kategorie | Nicht Kategorie',
    date: {
      default: 'Datum',
    },
    errors: {
      'page-not-found': {
        title: 'Seite nicht gefunden',
        poll: {
          question: 'Was denken Sie, warum Sie hier gelandet sind?',
          answers: [
            {
              col: 'orange',
              label: 'Wahrscheinlich ist die gesuchte Seite verschoben worden',
            },
            {
              col: 'warning',
              label: 'Wahrscheinlich wurde die gesuchte Seite umbenannt',
            },
            {
              col: 'error',
              label:
                'Wahrscheinlich wurde die gesuchte Seite auf die brutalste Art und Weise gelöscht',
            },
            {
              col: 'success',
              label: 'Wahrscheinlich hat die gesuchte Seite nie existiert',
            },
          ],
          result: [
            'Möglicherweise, aber nicht erforderlich...',
            'Es ist sehr wahrscheinlich, dass Sie richtig sind! Klicken Sie auf die Schaltfläche unten, um zur Startseite zu gelangen, oder verwenden Sie die Navigation auf der linken Seite der Website, um die gewünschte Seite zu finden. Viel Glück!',
          ],
          notify: {
            success: {
              group: 'answers',
              type: 'success',
              title: 'Ja',
              text: 'Dies ist der Wahrheit sehr ähnlich.',
            },
            error: {
              group: 'answers',
              type: 'error',
              title: 'Nein nein nein',
              text: 'Nicht... Das ist zu grausam.',
            },
            warning: {
              group: 'answers',
              type: 'warning',
              title: 'Vielleicht',
              text: 'Aber es ist nicht so ...',
            },
          },
        },
      },
      'other-errors': {
        title: 'Es ist etwas schief gelaufen..',
        subtitle: 'Es scheint ein Systemfehler vorzuliegen.',
        messages: [
          'Höchstwahrscheinlich handelt es sich um einen technischen Fehler, der nicht mit Ihren Aktionen zusammenhängt. Gehen Sie zur Startseite und beginnen Sie von vorn.',
          'Wenn es für Sie kein Problem ist, melden Sie diesen Fehler bitte über das Formular.',
        ],
      },
    },
    lang: {
      name: 'Sprache',
      de: 'Deutsch',
      en: 'English',
    },
    themes: {
      name: 'Thema',
      light: 'Hell',
      dark: 'Dunkel',
      system: 'System',
    },
  },
  author: {
    title: 'Autor | Autor',
    name: 'gunjankadu',
    position: ['Full Stack Entwickler', 'UX/UI Designer'],
    job: {
      status: `${config.author.job.status}`,
      title: 'Einen Job anbieten',
    },
    region: 'Heidelberg, Deutschland',
  },
  btn: {
    go: {
      to: 'Weiter zu',
      back: 'Zurückgehen',
      home: 'Home',
    },
    download: 'Herunterladen',
    view: 'Ansicht | Ansichten',
    'report-problem': 'Problem melden',
  },
  category: 'Kategorie | Kategorie | Nicht Kategorie',
  date: {
    default: 'Datum',
  },
  editor: 'Editor',
  events: {
    before: 'Vor',
    after: 'Nach',
    updates: 'Updates',
    show: 'Anzeigen | anzeigen',
    hide: 'Ausblenden | Ausblenden',
    prev: 'Zurück | Prev | Previous',
    next: 'Vorwärts | Weiter | Nach',
  },
  host: {
    name: `${config.host.name}`,
    url: `${config.host.url}`,
  },
  more: {
    base: 'Mehr',
    details: 'Mehr Details',
    events: 'Mehr Events',
  },
  news: {
    about: 'Erwähnungen in Nachrichten und Medien',
  },
  no: 'Nein',
  poll: {
    title: 'UX-Umfrage',
    message:
      'Nehmen Sie an der Umfrage teil und helfen Sie mit, die Website für Sie zu verbessern.',
    btn: 'Umfrage durchführen',
  },
  position: {
    right: 'Rechts | rechts',
    left: 'Links | links',
  },
  projects: {
    recent: 'Neueste Projekte',
    'not-found': 'Keine abgeschlossenen Projekte.',
  },
  pages: {
    articles: {
      title: 'Artikel',
    },
    cases: {
      title: 'Fälle',
      message:
        'Unten sind die Kategorien der Arbeiten im Bereich Design und Entwicklung. | Wählen Sie eine Karte aus, um in den Bereich mit den Arbeiten zu gelangen.',
      slug: {
        analytics: 'Web-Analytik',
        client: {
          about: 'Kunde',
          issues: 'Ausgaben',
          task: {
            title: 'Aufgabe | Aufgaben',
          },
          'not-found': 'Der Client fehlt oder wurde absichtlich nicht genannt.',
        },
        colors: 'Farben',
        deadline: 'Deadline',
        done: 'Während der Arbeit',
        grid: 'Grid',
        'header-tabs': ['Werkzeuge', 'Rolle'],
        headings: {
          sections: [
            'Kunde, Probleme und Aufgaben',
            'Ergebnis und Suche nach einer Lösung',
          ],
        },
        responsive: {
          title: 'Responsive',
          friendliness: 'Benutzerfreundlichkeit',
          optimization:
            'Website-Optimierungsarbeiten wurden nicht durchgeführt.',
          'not-responsive': {
            title: 'Nicht Responsive',
            message:
              'Die Betrachtung ist ab einer Bildschirmauflösung von {size}px möglich.',
          },
        },
        result: {
          title: 'Ergebnis',
        },
        sizes: 'Größen',
        storyboard: 'Storyboard',
        testimonials: 'Testimonials',
        typography: {
          title: 'Typografie',
          view: ['Für Überschriften', 'Für Fließtext'],
        },
      },
    },
    certificates: {
      message:
        'Während meiner Arbeit habe ich mehrere Tests und Online-Kurse in Webdesign, Entwicklung, Management und einigen anderen Bereichen absolviert. Unten können Sie einige meiner Zertifikate sehen',
    },
    coding: {
      message: [
        'Es ist nicht immer möglich, guten Code sofort zu schreiben, daher muss er in Programmen und Editoren getrennt von der Website getestet werden. Ich experimentiere oft mit Code, und auf der Suche nach Inspiration oder um mich selbst zu verbessern, kommen manchmal coole Dinge heraus, von denen ich einige mit anderen Entwicklern auf der',
        ' und gerne mit Ihnen teilen werde.',
      ],
    },
    contact: {
      message:
        'Sie können mich über die oben genannten sozialen Netzwerke kontaktieren oder andere Kontakte nutzen.',
      help: 'Klicken Sie zum Kopieren auf die Rufnummer oder Adresse.',
    },
    'des-apps': {
      message:
        'Ich habe erst Ende 2019 darüber nachgedacht, ein Design für Anwendungen zu entwickeln, da ich keine Zeit dafür hatte und dachte, dass ich das nicht kann, da ich diesen Bereich nicht studiert hatte. Inspiriert von der Arbeit anderer Designer, dem Studium von Leitfäden und UI-Kits*, beschloss ich, mich selbst zu versuchen und entwickelte die Oberfläche der Anwendung {link} in Figma. Eine C-Note, aber ich habe es geschafft. Diese Arbeit wurde zu einem Ausgangspunkt für mich.',
    },
    'des-site': {
      message:
        'Ich weiß, dass jeder Kunde, bevor er eine Wahl trifft, die Fähigkeiten eines Designers und seine echten Fälle sehen möchte, also "Live"-Arbeit und nicht nur eine Tabelle mit unscharfen Screenshots. Das macht Sinn, deshalb habe ich auf dieser Seite einige meiner Arbeiten vorgestellt, die ich zu verschiedenen Zeiten und mit verschiedenen Tools gemacht habe. | Indem Sie sich meine Arbeit ansehen, können Sie mein berufliches Wachstum und die Fähigkeiten, die ich besitze, sehen. Finden Sie heraus, ob sie Ihren Anforderungen entsprechen, bevor Sie sich entscheiden, einen Auftrag zu erteilen.',
      experience:
        'Design- und Prototyping-Erfahrung in Jahren | Berufserfahrung in',
    },
    'dev-banners': {
      advantage: {
        prepend:
          'Im Oktober 2017 habe ich beschlossen, mich an der Entwicklung von HTML5-Bannern zu versuchen, da Banner mit HTML5-Technologie viele Vorteile haben:',
        list: [
          'die Fähigkeit, beliebige Elemente von Webseiten zu verwenden: Text, Bilder, Videos und andere',
          'die Fähigkeit, dynamische Skripte (Storyboard und Animatic) zu verwenden',
          'HTML5-Bannerdateien können recht klein sein',
          'mit CSS-Media-Queries können Sie die Bannerelemente an jede Bildschirmgröße anpassen',
          'die Möglichkeit, das Banner nach seiner Platzierung zu bearbeiten',
        ],
        append:
          ' Ein Banner ist in erster Linie eine Imagewerbung für Ihr Unternehmen im Internet. Das Design Ihres Banners wirkt sich direkt auf die Bindung der Nutzer an Ihr Unternehmen, Ihr Produkt oder Ihre Dienstleistung aus. Mit anderen Worten, die Qualität des Banners wirkt sich direkt auf die Anzahl der Besucher und die Konversion Ihrer Seite aus.',
      },
    },
    'dev-site': {
      cms: 'Ich habe 2010 angefangen, Webentwicklung zu lernen. Dies war meine erste Kenntnis der Webentwicklung, die schließlich zu einem Hobby wurde. Im Laufe der Jahre habe ich gelernt, mit HTML, CSS, JS zu arbeiten und habe mit verschiedenen Content-Management-Systemen (CMS) gearbeitet. Aber mit der vollwertigen Website-Entwicklung habe ich erst 2018 begonnen, als ich lernte, wie man Websites auf WordPress erstellt und einen Job als Webentwickler bekam.',
      message:
        'Indem Sie sich meine Arbeiten ansehen, können Sie meine berufliche Entwicklung und die Fähigkeiten, die ich besitze, erkennen. Finden Sie heraus, ob sie Ihren Anforderungen entsprechen, bevor Sie sich entscheiden, einen Auftrag zu erteilen.',
    },
    drawings: {
      message:
        'Als Kind besuchte ich die Kunstschule, studierte Zeichnen, Malerei, Grafik, Kunstgeschichte, Bildhauerei und vieles mehr. Leider kann ich nicht alle meine Werke teilen, da viele von ihnen verloren sind. Aber im August 2019 habe ich einige alte Skizzen gefunden, die Sie unten sehen können.',
    },
    illustrations: {
      message:
        'Ich mache nicht oft Illustrationen, aber ich versuche, von Zeit zu Zeit zu üben, um meine Fähigkeiten nicht zu verlieren. Auf dieser Seite gibt es mehrere Illustrationen, die ich gemacht habe, zusätzlich zu den niedlichen Fischen, die Sie auf den Seiten der Website sehen können.',
    },
    index: {
      title: 'Home',
      sections: {
        about: {
          message:
            'Hallo, Ich bin {Autor} und ich bin 25 Jahre jung. Ich bin ein ➼ Full Stack Developer mit einem großen Interesse an ➼ End to End Software Development. Zurzeit mache ich meinen Master in Informatik an der Universität Heidelberg mit den Schwerpunkten ➼ Full Stack Web- und ➼ Mobile App-Entwicklung, ➼ Java-Entwickler mit Schwerpunkt ➼ REST Services & ➼ Micro-Services mit ➼ Spring Framework & ➼ MySQL nur mit dem Ziel, als Kenner hervorzutreten, um meine Fähigkeiten in der Disziplin der Informatik weiter zu verbessern. ➡ Seit {years} Jahren beschäftige ich mich mit der Erstellung von Design, Layout und Programmierung / Aufbau von Softwares und Websites. Ich mag es, etwas Neues zu schaffen, nach interessanten Lösungen zu suchen, das Unmögliche mit einfachem Code zu tun und meine Ideen und Kundenideen zum Leben zu erwecken.',
          activity: {
            prepend:
              'Ich entwickle mich ständig weiter und verbessere meine Fähigkeiten in drei einfachen Schritten',
            list: [
              {
                message: 'Analysieren der Arbeit von erfahrenen Entwicklern',
              },
              {
                message:
                  'Studieren von UI / UX Design und Web- und Softwareentwicklungstrends',
              },
              {
                message: 'Arbeiten mit neuen Programmen und Sprachen',
              },
            ],
            append:
              'Sie helfen mir, in den sich schnell entwickelnden Bereichen im Fluss zu bleiben und immer auf dem neuesten Stand der Entwicklungen und Trends zu sein.',
          },
        },
        counters: {
          message:
            'Zusätzlich zu Design und Entwicklung studiere ich Marketing, weil ich bei meiner Arbeit darauf geachtet habe, dass diese drei Aspekte untrennbar miteinander verbunden sind. Ich habe genug Wissen und Erfahrung, die notwendig sind, um ein praktisches, qualitativ hochwertiges und funktionales Produkt zu entwickeln, und das Verständnis der Nutzerbedürfnisse und Marketingprinzipien ermöglicht es mir, mich voll und ganz für die Förderung und Unterstützung der entwickelten Projekte einzusetzen.',
        },
        certificates: {
          title: 'Certificates',
          message:
            'Um meine Stärken zu testen, nehme ich regelmäßig an Tests und Online-Kursen in den Bereichen Webentwicklung, Design und Promotion teil. Als Ergebnis des Bestehens erhalte ich elektronische Zertifikate, die Sie unten und auf der Seite mit den Zertifikaten finden können.',
        },
        progress: {
          title:
            'Events <span class="d-none d-sm-inline-block">und Leistungen</span>',
          message:
            ' Während meiner Arbeit habe ich etwa {projects} erfolgreich abgeschlossen und Designs, Websites, Softwares, Microservices und mehr erstellt, außerdem {works}+ kleine Aufträge unterschiedlicher Komplexität: Elemente zeichnen und Code refaktorisieren, Logos entwickeln, komplexe Features hinzufügen und vieles mehr.',
        },
        skillset: {
          title: 'Skillset',
        },
        works: {
          message:
            'Im März 2019 habe ich auch begonnen, Layouts in {to} zu entwerfen, während ich jetzt Prototypen, Designs und komplette Websites und Anwendungen entwickle, was mich zu einem Full-Stack-Entwickler macht. Sehen Sie sich einige meiner Arbeiten im Portfolio an.',
        },
      },
    },
    logos: {
      message:
        'Es gibt nicht viele Beispiele in meinem Portfolio, mit denen ich mich rühmen könnte, aber die im Folgenden vorgestellten Arbeiten sind für mich, obwohl sie klein sind, dennoch Leistungen.',
      format: 'Format',
    },
    photoshop: {
      message:
        'Im Jahr 2010 habe ich zum ersten Mal mit Photoshop Bekanntschaft gemacht. Dann gründete er eine Community {link} und begann, Designs für VKontakte-Gruppen und Prototypen für Websites zu entwickeln.',
      games:
        'Im selben Jahr startete VKontakte einen Wiki-Code, und im Zuge des Studiums entschied ich mich, mehrere Spiele zu implementieren, die einige Kenntnisse in Photoshop erforderten, um sie zu vervollständigen. Einige Spiele sind noch teilweise in Arbeit, so dass Sie der Community beitreten und Spiele wie: Kreuzritter, Sims und Strafen ausprobieren können.',
      now: 'In letzter Zeit benutze ich Photoshop immer weniger, aber ich versuche, es nicht zu vergessen und meine Fähigkeiten zu erhalten, also bearbeite ich von Zeit zu Zeit Fotos, von denen Sie einige unten sehen können.',
    },
    projects: {
      message:
        'Oft bleiben die Ideen, die im Kopf geboren werden, nur eine Idee. Deshalb versuche ich, meine Ideen zum Leben zu erwecken, und einige von ihnen sind zu Großprojekten geworden.',
    },
    shown: 'Abgebildet auf Seite',
    timeline: {
      message:
        'ЗHier können Sie ein Band mit meinen beruflichen Erfolgen und den für mich wichtigsten Ereignissen sehen. Ich hoffe, dies ermutigt Sie, Ihren Träumen zu folgen und Ihre Errungenschaften auf dem Weg dorthin festzuhalten!',
    },
  },
  search: {
    label: 'Suche',
    placeholder: 'Beginnen Sie mit der Eingabe des Textes...',
    found: 'Gefundene Materialien auf Ihre Anfrage.',
    'not-found':
      'Es tut uns leid, aber es gibt keine Ergebnisse für Ihre Suche.',
  },
  settings: 'Einstellungen',
  site: {
    header: {
      name: 'Kopfzeile',
      sticky: 'Klebrig',
    },
    navbar: {
      name: 'Navigation',
    },
    page: {
      construction: 'Diese Seite befindet sich im Aufbau',
    },
  },
  size: {
    name: 'Größe',
    full: 'Vollständig',
    mini: 'Mini',
  },
  source: 'Quelle | Quellen',
  'table-of-contents': 'Inhaltsverzeichnis | table of contents',
  yes: 'Ja',
  works: {
    'works-not-found': 'Werke nicht gefunden',
    examples: 'Arbeitsbeispiele',
    rate: 'Arbeit bewerten mit',
    types: 'Art der Arbeiten',
  },
}
