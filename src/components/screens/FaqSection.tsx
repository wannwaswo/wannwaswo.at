export default function FaqSection() {
  return (
    <div className="bg-white" id="ELEMENT_faq">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Häufig gestellte Fragen
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            <div className="pt-6">
              <dt>
                <button
                  type="button"
                  className="flex w-full items-start justify-between text-left text-gray-900"
                  aria-controls="faq-0"
                  aria-expanded="false"
                >
                  <span className="text-base font-semibold leading-7">
                    Wann wird die App voraussichtlich veröffentlicht?
                  </span>
                </button>
              </dt>
              <dd className="mt-2 pr-12" id="faq-0">
                <p className="text-base leading-7 text-gray-600">
                  Wir sind momentan noch in der Entwicklungsphase, planen aber,
                  die App bis spätestens Anfang Sommer 2023 für die breite
                  Öffentlichkeit zu veröffentlichen.
                </p>
              </dd>
            </div>

            <div className="pt-6">
              <dt>
                <button
                  type="button"
                  className="flex w-full items-start justify-between text-left text-gray-900"
                  aria-controls="faq-0"
                  aria-expanded="false"
                >
                  <span className="text-base font-semibold leading-7">
                    Werden Events österreichweit angezeigt?
                  </span>
                </button>
              </dt>
              <dd className="mt-2 pr-12" id="faq-0">
                <p className="text-base leading-7 text-gray-600">
                  Anfänglich konzentrieren wir uns hauptsächlich auf Wien und
                  die Umgebung, werden aber im Laufe der Zeit immer mehr
                  Locations hinzufügen.
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
