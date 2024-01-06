import {Path, Rect, Svg} from 'react-native-svg';

export const HomeIcon = ({fill, width, height}) => {
  return (
    <Svg
      width={width || 28}
      height={height || 28}
      viewBox="0 0 35 32"
      fill={fill || 'none'}
      xmlns="http://www.w3.org/2000/svg">
      <Rect
        width="32.309"
        height="30"
        transform="translate(1 1)"
        fill="white"
      />
      <Path
        d="M4.46168 12.8261V29.8461C4.46168 30.1521 4.58325 30.4456 4.79965 30.662C5.01605 30.8784 5.30955 31 5.61558 31H12.5389V21.1919C12.5389 20.7328 12.7213 20.2926 13.0459 19.968C13.3705 19.6434 13.8107 19.461 14.2698 19.461H20.0393C20.4983 19.461 20.9386 19.6434 21.2631 19.968C21.5877 20.2926 21.7701 20.7328 21.7701 21.1919V31H28.6935C28.9995 31 29.293 30.8784 29.5094 30.662C29.7258 30.4456 29.8474 30.1521 29.8474 29.8461V12.8261"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M33.309 15.9994L17.9399 1.28721C17.5793 0.906429 16.7362 0.902102 16.3692 1.28721L1 15.9994"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M27.5396 10.4462V2.15262H24.0779V7.12879"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const BasketIcon = ({fill, width, height}) => {
  return (
    <Svg
      width={width || 28}
      height={height || 28}
      viewBox="0 0 37 32"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M2.98357 11.5061C2.54219 11.5057 2.11851 11.6797 1.80487 11.9903C1.49123 12.3008 1.31305 12.7228 1.30915 13.1641C1.30736 13.3171 1.32952 13.4694 1.37482 13.6156L5.61831 28.5786C5.81499 29.2776 6.23532 29.8928 6.81494 30.3301C7.39456 30.7674 8.10153 31.0027 8.82761 31H27.9357C28.6631 31.0006 29.3711 30.7648 29.9529 30.3281C30.5348 29.8913 30.9589 29.2774 31.1614 28.5786L35.4049 13.6156L35.4541 13.1641C35.4502 12.7228 35.272 12.3008 34.9584 11.9903C34.6448 11.6797 34.2211 11.5057 33.7797 11.5061H2.98357ZM18.8511 24.6446C18.1689 24.6412 17.503 24.4358 16.9374 24.0543C16.3718 23.6728 15.9319 23.1323 15.6732 22.501C15.4145 21.8698 15.3486 21.176 15.4838 20.5073C15.6189 19.8386 15.9492 19.225 16.4328 18.7438C16.9164 18.2626 17.5317 17.9354 18.201 17.8036C18.8704 17.6717 19.5638 17.7411 20.1938 18.0029C20.8237 18.2648 21.362 18.7074 21.7407 19.2749C22.1193 19.8423 22.3214 20.5093 22.3214 21.1915C22.3171 22.109 21.9495 22.9873 21.2992 23.6345C20.6488 24.2816 19.7686 24.6448 18.8511 24.6446V24.6446Z"
        stroke="black"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <Path
        d="M10.502 11.5061L18.3817 1L26.2613 11.5061"
        stroke="black"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const StarIcon = ({fill, width, height, style, stroke}) => {
  return (
    <Svg
      style={style}
      width={width || 28}
      height={height || 28}
      viewBox="0 0 35 32"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M33.7618 12.5385H21.358L17.608 1L13.858 12.5385H1.45412L11.5503 19.4615L7.65604 31L17.608 23.7885L27.5599 31L23.6657 19.4615L33.7618 12.5385Z"
        stroke={stroke || 'black'}
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const UserIcon = ({fill, width, height}) => {
  return (
    <Svg
      width={width || 28}
      height={height || 28}
      viewBox="0 0 31 32"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M21.9543 7.92308C21.6716 11.7358 18.7812 14.8462 15.6081 14.8462C12.4351 14.8462 9.53962 11.7365 9.26198 7.92308C8.97352 3.95673 11.786 1 15.6081 1C19.4302 1 22.2427 4.02885 21.9543 7.92308Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.6081 19.4615C9.3341 19.4615 2.96631 22.9231 1.78795 29.4567C1.64588 30.2442 2.09155 31 2.91583 31H28.3004C29.1254 31 29.5711 30.2442 29.4291 29.4567C28.25 22.9231 21.8822 19.4615 15.6081 19.4615V19.4615Z"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
    </Svg>
  );
};

export const SearchIcon = ({fill, width, height}) => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 10C15 12.7614 12.7614 15 10 15C7.23858 15 5 12.7614 5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10ZM13.594 16.0082C12.5434 16.6379 11.314 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 11.8276 16.2996 13.4916 15.1526 14.7383L19.2071 18.7929C19.5976 19.1834 19.5976 19.8166 19.2071 20.2071C18.8166 20.5976 18.1834 20.5976 17.7929 20.2071L13.594 16.0082Z"
        fill="black"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 10C15 12.7614 12.7614 15 10 15C7.23858 15 5 12.7614 5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10ZM13.594 16.0082C12.5434 16.6379 11.314 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 11.8276 16.2996 13.4916 15.1526 14.7383L19.2071 18.7929C19.5976 19.1834 19.5976 19.8166 19.2071 20.2071C18.8166 20.5976 18.1834 20.5976 17.7929 20.2071L13.594 16.0082Z"
        fill="#2A59FE"
        fillOpacity="0.3"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 10C15 12.7614 12.7614 15 10 15C7.23858 15 5 12.7614 5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10ZM13.594 16.0082C12.5434 16.6379 11.314 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 11.8276 16.2996 13.4916 15.1526 14.7383L19.2071 18.7929C19.5976 19.1834 19.5976 19.8166 19.2071 20.2071C18.8166 20.5976 18.1834 20.5976 17.7929 20.2071L13.594 16.0082Z"
        fill="white"
        fillOpacity="0.5"
      />
    </Svg>
  );
};

export const CloseIcon = () => {
  return (
    <Svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M21 21L1 1"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21 1L1 21"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
