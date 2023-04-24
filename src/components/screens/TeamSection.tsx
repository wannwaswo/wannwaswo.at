import EmilImage from "../../assets/WhatsApp Image 2023-04-19 at 19.15.52.jpeg";
import FabiImage from "../../assets/WhatsApp Image 2023-04-19 at 19.15.52 (1).jpeg";
import AlexImage from "../../assets/F95CDAD6-246A-43A1-8AE8-7A10898F7C02_1_102_a.jpeg";

const team = [
  {
    name: "Emil Jungmair",
    role: "Co-Founder / CEO",
    image: FabiImage
  },
  {
    name: "Fabian Jäger",
    role: "Co-Founder / CEO",
    image: EmilImage
  },
  {
    name: "Alexander Gauss",
    role: "Full Stack Developer",
    image: AlexImage
  },
];

export default function TeamSection() {
  return (
    <div className="bg-white py-24 md:py-32 lg:py-40" id="ELEMENT_team">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Unser Team
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Anfang des Jahres 2023 gründeten Emil Jungmair und Fabian Jäger das
            Start-up Wannwaswo. Wir informieren die Nutzer unserer App über alle
            neuen Ereignisse, unabhängig davon, ob es sich dabei um die Releases
            verschiedener Modemarken, neue Musik, neue Filme/Serien oder Events
            im Nacht- und Tag-Leben handelt.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
        >
          {team.map(({ name, role, image }) => (
            <li key={name}>
              <img
                className="aspect-[3/2] w-full rounded-2xl object-cover"
                src={image}
                alt=""
              />
              <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">
                {name}
              </h3>
              <p className="text-base leading-7 text-gray-600">{role}</p>
              <ul role="list" className="mt-6 flex gap-x-6">
                <li>
                  <a
                    href="https://www.instagram.com/wannwaswo/"
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.tiktok.com/@_wannwaswo_?lang=en"
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">TikTok</span>
                    <svg
                      fill="currentColor"
                      className="h-5 w-5"
                      viewBox="0 0 448 512"
                    >
                      <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
