export type scrollToElementNames =
| "ELEMENT_CTA"
| "ELEMENT_faq"
| "ELEMENT_features"
| "ELEMENT_team"

export const scrollToElement = (elementName: scrollToElementNames) => {
  document.getElementById(elementName)?.scrollIntoView()
}
