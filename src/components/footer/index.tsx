import { tw } from 'twind';
import Button from '@/components/button';

const productLinks = [`Specifications`, `Design`];

const resourceLinks = [`Instructions`];

const Footer = () => (
  <footer id="footer" className={tw(`bg-white border-t border-gray-400 pt-14 pb-16`)}>
    <div className={tw(`max-w-7xl mx-auto text-gray-400 px-8 lg:px-0 flex flex-wrap`)}>
      <div className={tw(`mb-14 flex items-center w-full`)}>
        <img
          className={tw(`h-12 w-12 mr-4`)}
          src="../../../images/bengal-cat-svgrepo-com.svg"
          alt="logo"
          width={48}
          height={48}
        />
        <p className={tw(`text-4xl text-indigo-500 font-bold`)}>Fast Flap</p>
      </div>
      <div className={tw(`w-full lg:w-1/2`)}>
        <ul className={tw(`text-lg font-light flex flex-wrap w-full`)}>
          <li className={tw(`w-1/2 md:w-1/3 lg:w-1/3`)}>
            <div>
              <h4 className={tw(`text-gray-900 text-base font-bold mb-1`)}>Product</h4>
              <ul>
                {productLinks.map((link) => (
                  <li className={tw(`text-gray-800 text-sm font-medium leading-6`)} key={link}>
                    <a href={`#${link}`}>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className={tw(`w-1/2 md:w-1/3 lg:w-1/3`)}>
            <div>
              <h4 className={tw(`text-gray-900 text-base font-bold mb-1`)}>Resources</h4>
              <ul>
                {resourceLinks.map((link) => (
                  <li className={tw(`text-gray-800 text-sm font-medium leading-6`)} key={link}>
                    <a href="#Instructions">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className={tw(`w-1/2 md:w-1/3 lg:w-1/3`)}>
            <div>
              <h4 className={tw(`text-gray-900 text-base font-bold mb-1`)}>Contact</h4>
              <div className="auto">
                <ul className="footer-stuff">
                  <svg
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20.000000pt"
                    height="20.000000pt"
                    viewBox="0 0 1280.000000 1280.000000"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <metadata>Created by potrace 1.15, written by Peter Selinger 2001-2017</metadata>
                    <g
                      transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                      fill="#000000"
                      stroke="none"
                    >
                      <path
                        d="M6145 12794 c-216 -13 -391 -28 -530 -45 -995 -122 -1927 -467 -2760
-1022 -907 -604 -1648 -1433 -2146 -2402 -395 -769 -615 -1549 -690 -2450 -17
-193 -17 -757 0 -950 75 -901 295 -1681 690 -2450 610 -1187 1579 -2156 2766
-2766 769 -395 1549 -615 2450 -690 193 -17 757 -17 950 0 901 75 1681 295
2450 690 1187 610 2156 1579 2766 2766 395 769 615 1549 690 2450 17 193 17
757 0 950 -75 901 -295 1681 -690 2450 -610 1187 -1579 2156 -2766 2766 -753
387 -1531 610 -2390 684 -164 15 -666 27 -790 19z m739 -779 c1310 -112 2519
-671 3464 -1599 980 -963 1561 -2210 1673 -3591 15 -193 15 -657 0 -850 -110
-1350 -664 -2567 -1605 -3523 -965 -981 -2206 -1559 -3591 -1673 -193 -16
-657 -16 -850 0 -1386 114 -2628 692 -3591 1672 -943 961 -1493 2167 -1605
3524 -16 193 -16 657 0 850 115 1388 693 2628 1672 3591 878 862 1988 1408
3189 1568 416 55 832 66 1244 31z"
                      />
                      <path
                        d="M5060 10738 c-54 -15 -679 -379 -716 -417 -83 -84 -102 -207 -50
-309 54 -105 1149 -1998 1175 -2032 58 -73 186 -116 276 -91 46 12 662 365
715 409 68 57 105 179 81 267 -6 22 -274 497 -596 1055 -474 822 -594 1023
-631 1057 -68 64 -164 87 -254 61z"
                      />
                      <path
                        d="M3942 9867 c-214 -130 -321 -208 -435 -317 -334 -319 -423 -636 -366
-1295 82 -942 549 -2201 1249 -3365 657 -1092 1446 -1996 2175 -2492 375 -255
608 -343 910 -343 202 0 370 40 606 145 110 50 365 185 374 199 3 6 -1137
1992 -1198 2088 -6 10 -17 8 -47 -7 -69 -35 -183 -69 -272 -80 -327 -40 -714
148 -1073 522 -444 462 -796 1143 -905 1753 -81 448 -20 809 175 1038 33 39
144 132 166 139 8 3 -217 401 -590 1049 -332 574 -606 1047 -610 1051 -4 5
-75 -34 -159 -85z"
                      />
                      <path
                        d="M8220 5330 c-55 -7 -46 -3 -413 -214 -164 -94 -314 -186 -333 -204
-72 -69 -102 -185 -72 -273 17 -50 1155 -2026 1197 -2078 71 -90 212 -117 326
-62 86 41 614 347 655 380 56 45 90 120 90 202 0 37 -5 81 -12 96 -34 80
-1175 2043 -1206 2075 -61 64 -141 91 -232 78z"
                      />
                    </g>
                  </svg>

                  <p className={tw(`text-gray-800 text-sm font-medium leading-6 mt-1`)}>1-864-520-4378</p>
                </ul>
                <ul className="footer-stuff">
                  <svg
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20.000000pt"
                    height="20.000000pt"
                    viewBox="0 0 1280.000000 914.000000"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <metadata>Created by potrace 1.15, written by Peter Selinger 2001-2017</metadata>
                    <g
                      transform="translate(0.000000,914.000000) scale(0.100000,-0.100000)"
                      fill="#000000"
                      stroke="none"
                    >
                      <path
                        d="M1195 9129 c-510 -65 -953 -428 -1121 -921 -71 -209 -65 100 -70
-3578 -2 -2270 0 -3345 7 -3410 26 -237 116 -468 257 -660 66 -91 204 -229
290 -290 144 -103 334 -190 511 -232 85 -20 117 -21 2261 -29 1196 -5 3552 -8
5235 -6 l3060 3 85 21 c137 34 207 60 335 123 409 202 684 594 744 1059 8 59
11 1079 11 3445 -1 2774 -3 3371 -14 3416 -42 173 -109 327 -202 467 -71 107
-203 246 -313 329 -88 67 -300 177 -399 208 -30 10 -95 27 -145 39 l-92 22
-5185 1 c-2961 1 -5215 -2 -5255 -7z m7845 -3165 c-1678 -1678 -2471 -2465
-2505 -2485 -69 -40 -150 -41 -217 -1 -29 17 -948 928 -2507 2485 l-2461 2457
5072 0 5073 0 -2455 -2456z m3070 -1326 l-5 -3423 -22 -77 c-58 -204 -153
-318 -326 -391 l-72 -30 -1727 1734 -1727 1734 1937 1938 c1065 1065 1939
1937 1942 1937 3 0 3 -1540 0 -3422z m-9430 1487 l1905 -1905 -1747 -1747
-1747 -1747 -62 29 c-123 59 -208 173 -246 330 -16 65 -18 301 -20 3508 -2
1890 0 3437 4 3437 5 0 865 -857 1913 -1905z m3005 -3000 c451 -455 620 -619
649 -631 50 -20 133 -20 182 1 28 11 207 184 634 610 l595 595 1503 -1503
c826 -826 1502 -1504 1502 -1507 0 -3 -1964 -5 -4365 -5 -2401 0 -4365 2
-4365 5 0 6 3043 3050 3050 3050 3 0 280 -276 615 -615z"
                      />
                    </g>
                  </svg>
                  <p className={tw(`text-gray-800 text-sm font-medium leading-6`)}>greenCatFastFlap@gmail.com</p>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
