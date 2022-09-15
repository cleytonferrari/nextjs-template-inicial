export const GA_TRACKING_ID = "UA-XXXXXXXX-1" //id do google analytics
// no google analytics, Acesse Administrador > Informações de acompanhamento > Código de acompanhamento.

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}