const ServicesGrid = (): JSX.Element => {
  return (
    <section>
      <div className="flex p-3 w-screen max-w-5xl">
        <ul className="grid grid-cols-6 grid-rows-2 gap-6 w-full object-contain h-80 text-white font-jakartaBold">
          <li className="col-span-2 row-span-full bg-design-purple rounded-md">
            <div className="flex flex-col p-4 justify-between h-full">
              <div className="flex flex-row justify-end">
                <svg
                  width="128"
                  height="192"
                  viewBox="0 0 128 192"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="object-scale-down"
                >
                  <rect width="64" height="128" fill="#552049" />
                  <circle cx="32" cy="32" r="14" stroke="#FFF7F0" strokeWidth="4" />
                  <rect x="64" y="32" width="64" height="32" rx="16" fill="#F6A560" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M32 160L64 192V160H32Z"
                    fill="#61C4B7"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M64 128L96 160V128H64Z"
                    fill="#61C4B7"
                  />
                  <circle cx="112" cy="48" r="14" stroke="#FFF7F0" strokeWidth="4" />
                  <circle cx="112" cy="48" r="14" stroke="#FFF7F0" strokeWidth="4" />
                  <rect x="64" y="14" width="4" height="4" fill="#030303" />
                  <rect x="68" y="14" width="4" height="4" fill="#030303" />
                  <rect x="92" y="14" width="4" height="4" fill="#030303" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M96 0L128 32V0H96Z"
                    fill="#755CDE"
                  />
                  <rect x="96" y="14" width="4" height="4" fill="#030303" />
                  <rect x="120" y="14" width="4" height="4" fill="#030303" />
                  <rect x="124" y="14" width="4" height="4" fill="#030303" />
                  <circle cx="80" cy="80" r="14" stroke="#030303" strokeWidth="4" />
                  <rect x="96" y="64" width="32" height="32" fill="#EB7565" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M32 96L128 192V96H32Z"
                    fill="#FFF7F0"
                  />
                  <rect y="128" width="4" height="4" fill="#030303" />
                  <rect x="14" y="128" width="4" height="4" fill="#030303" />
                  <rect x="28" y="128" width="4" height="4" fill="#030303" />
                  <rect y="142" width="4" height="4" fill="#030303" />
                  <rect x="14" y="142" width="4" height="4" fill="#030303" />
                  <rect x="28" y="142" width="4" height="4" fill="#030303" />
                  <rect y="156" width="4" height="4" fill="#030303" />
                  <rect x="14" y="156" width="4" height="4" fill="#030303" />
                  <rect x="28" y="156" width="4" height="4" fill="#030303" />
                </svg>
              </div>
              <div className="text-xl">Graphic Design</div>
            </div>
          </li>
          <li className="col-span-1 row-span-1 bg-design-orange rounded-md">
            <div className="flex flex-col p-4 justify-between h-full">
              <div className="flex flex-row justify-end">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="48" cy="16" r="14" stroke="#030303" strokeWidth="4" />
                  <rect x="-3.05176e-05" width="32" height="32" fill="#EB7565" />
                  <rect x="-3.05176e-05" y="32" width="4" height="4" fill="#030303" />
                  <rect x="14" y="32" width="4" height="4" fill="#030303" />
                  <rect x="28" y="32" width="4" height="4" fill="#030303" />
                  <rect x="-3.05176e-05" y="46" width="4" height="4" fill="#030303" />
                  <rect x="14" y="46" width="4" height="4" fill="#030303" />
                  <rect x="28" y="46" width="4" height="4" fill="#030303" />
                  <rect x="-3.05176e-05" y="60" width="4" height="4" fill="#030303" />
                  <rect x="14" y="60" width="4" height="4" fill="#030303" />
                  <rect x="28" y="60" width="4" height="4" fill="#030303" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M32 32L64 64V32H32Z"
                    fill="#FFF7F0"
                  />
                </svg>
              </div>
              <div className="text-xl">UI/UX</div>
            </div>
          </li>
          <li className="col-span-1 row-span-1 bg-design-pink rounded-md">
            <div className="flex flex-col p-4 justify-between h-full">
              <div className="flex flex-row justify-end">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="1.52588e-05" y="32" width="64" height="32" rx="16" fill="#552049" />
                  <circle cx="48" cy="48" r="14" stroke="#FFF7F0" strokeWidth="4" />
                  <rect x="1.52588e-05" y="14" width="4" height="4" fill="#030303" />
                  <rect x="4.00002" y="14" width="4" height="4" fill="#030303" />
                  <rect x="28" y="14" width="4" height="4" fill="#030303" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M32 0L64 32V0H32Z"
                    fill="#755CDE"
                  />
                  <rect x="32" y="14" width="4" height="4" fill="#030303" />
                  <rect x="56" y="14" width="4" height="4" fill="#030303" />
                  <rect x="60" y="14" width="4" height="4" fill="#030303" />
                </svg>
              </div>
              <div className="text-xl">Apps</div>
            </div>
          </li>
          <li className="col-span-2 row-span-1 bg-design-cyan rounded-md">
            <div className="flex flex-col p-4 justify-between h-full">
              <div className="flex flex-row justify-end">
                <svg
                  width="160"
                  height="64"
                  viewBox="0 0 160 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="32" width="64" height="64" fill="#EB7565" />
                  <circle cx="16" cy="16" r="14" stroke="#030303" strokeWidth="4" />
                  <circle cx="64" cy="32" r="14" stroke="#FFF7F0" strokeWidth="4" />
                  <rect x="128" y="32" width="4" height="4" fill="#030303" />
                  <rect x="142" y="32" width="4" height="4" fill="#030303" />
                  <rect x="156" y="32" width="4" height="4" fill="#030303" />
                  <rect x="128" y="56" width="4" height="4" fill="#030303" />
                  <rect x="142" y="56" width="4" height="4" fill="#030303" />
                  <rect x="156" y="56" width="4" height="4" fill="#030303" />
                  <rect x="128" y="60" width="4" height="4" fill="#030303" />
                  <rect x="142" y="60" width="4" height="4" fill="#030303" />
                  <rect x="156" y="60" width="4" height="4" fill="#030303" />
                  <rect x="128" width="4" height="4" fill="#030303" />
                  <rect x="142" width="4" height="4" fill="#030303" />
                  <rect x="156" width="4" height="4" fill="#030303" />
                  <rect x="128" y="4" width="4" height="4" fill="#030303" />
                  <rect x="142" y="4" width="4" height="4" fill="#030303" />
                  <rect x="156" y="4" width="4" height="4" fill="#030303" />
                  <rect x="128" y="28" width="4" height="4" fill="#030303" />
                  <rect x="142" y="28" width="4" height="4" fill="#030303" />
                  <rect x="156" y="28" width="4" height="4" fill="#030303" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M96 32L128 64V32H96Z"
                    fill="#FFF7F0"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M96 32L128 64V32H96Z"
                    fill="#552049"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M32 64L0 32V64H32Z"
                    fill="#F39E9E"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M96 32L128 0V32H96Z"
                    fill="#FFF7F0"
                  />
                </svg>
              </div>
              <div className="text-xl">Photography</div>
            </div>
          </li>
          <li className="col-span-2 row-span-1 bg-design-red rounded-md">
            <div className="flex flex-col p-4 justify-between h-full">
              <div className="flex flex-row justify-end">
                <svg
                  width="128"
                  height="64"
                  viewBox="0 0 128 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="112" cy="16" r="14" stroke="#FFF7F0" strokeWidth="4" />
                  <rect x="64" width="32" height="32" fill="#755CDE" />
                  <rect x="96" y="32" width="4" height="4" fill="#030303" />
                  <rect x="110" y="32" width="4" height="4" fill="#030303" />
                  <rect x="124" y="32" width="4" height="4" fill="#030303" />
                  <rect x="96" y="46" width="4" height="4" fill="#030303" />
                  <rect x="110" y="46" width="4" height="4" fill="#030303" />
                  <rect x="124" y="46" width="4" height="4" fill="#030303" />
                  <rect x="96" y="60" width="4" height="4" fill="#030303" />
                  <rect x="110" y="60" width="4" height="4" fill="#030303" />
                  <rect x="124" y="60" width="4" height="4" fill="#030303" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M64 32L96 64V32H64Z"
                    fill="#F39E9E"
                  />
                  <rect x="32" y="32" width="4" height="4" fill="#030303" />
                  <rect x="46" y="32" width="4" height="4" fill="#030303" />
                  <rect x="60" y="32" width="4" height="4" fill="#030303" />
                  <rect x="32" y="56" width="4" height="4" fill="#030303" />
                  <rect x="46" y="56" width="4" height="4" fill="#030303" />
                  <rect x="60" y="56" width="4" height="4" fill="#030303" />
                  <rect x="32" y="60" width="4" height="4" fill="#030303" />
                  <rect x="46" y="60" width="4" height="4" fill="#030303" />
                  <rect x="60" y="60" width="4" height="4" fill="#030303" />
                  <rect x="32" width="4" height="4" fill="#030303" />
                  <rect x="46" width="4" height="4" fill="#030303" />
                  <rect x="60" width="4" height="4" fill="#030303" />
                  <rect x="32" y="4" width="4" height="4" fill="#030303" />
                  <rect x="46" y="4" width="4" height="4" fill="#030303" />
                  <rect x="60" y="4" width="4" height="4" fill="#030303" />
                  <rect x="32" y="28" width="4" height="4" fill="#030303" />
                  <rect x="46" y="28" width="4" height="4" fill="#030303" />
                  <rect x="60" y="28" width="4" height="4" fill="#030303" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M-3.05176e-05 32L32 64V32H-3.05176e-05Z"
                    fill="#61C4B7"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M32 0L-3.05176e-05 32V0H32Z"
                    fill="#FFF7F0"
                  />
                </svg>
              </div>
              <div className="text-xl">Illustrations</div>
            </div>
          </li>
          <li className="col-span-2 row-span-1 bg-design-violet rounded-md">
            <div className="flex flex-col p-4 justify-between h-full">
              <div className="flex flex-row justify-end">
                <svg
                  width="128"
                  height="64"
                  viewBox="0 0 128 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="80" cy="16" r="14" stroke="#F39E9E" strokeWidth="4" />
                  <circle
                    cx="48"
                    cy="16"
                    r="14"
                    stroke="#F39E9E"
                    strokeOpacity="0.5"
                    strokeWidth="4"
                  />
                  <circle
                    cx="16"
                    cy="16"
                    r="14"
                    stroke="#F39E9E"
                    strokeOpacity="0.25"
                    strokeWidth="4"
                  />
                  <circle cx="112" cy="16" r="14" stroke="#FFF7F0" strokeWidth="4" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M128 64L96 32V64H128Z"
                    fill="#F39E9E"
                  />
                  <rect x="32" y="32" width="64" height="32" rx="16" fill="#F6A560" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 46H0V50H4H8V46H4ZM28 46H32H36V50H32H28V46ZM56 46H60H64V50H60H56V46Z"
                    fill="#FFF7F0"
                  />
                </svg>
              </div>
              <div className="text-xl">Motion Graphics</div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ServicesGrid;
