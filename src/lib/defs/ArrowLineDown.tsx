import { Fragment } from 'react/jsx-runtime'
import type { CustomIconWeights } from '../types'

export const ArrowLineDownWeights: CustomIconWeights = new Map([
  [
    'thin',
    <path
      key="ArrowLineDownThin"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.17795 11.1401C7.39661 10.9364 7.73122 10.9573 7.92533 11.1867L14.8132 19.3288C15.4449 20.0756 16.5551 20.0756 17.1868 19.3288L24.0747 11.1867C24.2688 10.9573 24.6034 10.9364 24.822 11.1401C25.0407 11.3438 25.0606 11.6949 24.8665 11.9244L17.9787 20.0664C16.9257 21.3112 15.0743 21.3112 14.0213 20.0664L7.1335 11.9244C6.93939 11.6949 6.95929 11.3438 7.17795 11.1401Z"
    />,
  ],
  [
    'light',
    <path
      key="ArrowLineDownLight"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.2593 11.1991C7.57791 10.9096 8.06549 10.9393 8.34834 11.2654L15.0394 18.9789C15.5508 19.5684 16.4492 19.5684 16.9606 18.9789L23.6517 11.2654C23.9345 10.9393 24.4221 10.9096 24.7407 11.1991C25.0593 11.4885 25.0883 11.9875 24.8055 12.3136L18.1144 20.0271C16.9892 21.3243 15.0108 21.3243 13.8856 20.0271L7.19453 12.3136C6.91169 11.9875 6.94069 11.4885 7.2593 11.1991Z"
    />,
  ],
  [
    'regular',
    <path
      key="ArrowLineDownRegular"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.29289 11.3193C7.68342 10.8936 8.31658 10.8936 8.70711 11.3193L15.2929 18.5C15.6834 18.9258 16.3166 18.9258 16.7071 18.5L23.2929 11.3194C23.6834 10.8936 24.3166 10.8936 24.7071 11.3194C25.0976 11.7451 25.0976 12.4355 24.7071 12.8613L18.1213 20.042C16.9497 21.3193 15.0503 21.3194 13.8787 20.042L7.29289 12.8613C6.90237 12.4355 6.90237 11.7451 7.29289 11.3193Z"
    />,
  ],
  [
    'bold',
    <path
      key="ArrowLineDownBold"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.52997 10.4137C7.18173 9.81273 8.17974 9.87363 8.75908 10.5497L15.6066 18.5409C15.816 18.7852 16.184 18.7852 16.3934 18.5409L23.2409 10.5497C23.8203 9.87363 24.8183 9.81273 25.47 10.4137C26.1218 11.0147 26.1805 12.05 25.6012 12.7261L18.7536 20.7172C17.2881 22.4275 14.7119 22.4275 13.2464 20.7172L6.39884 12.7261C5.8195 12.05 5.87821 11.0147 6.52997 10.4137Z"
    />,
  ],
  [
    'fill',
    <path
      key="ArrowLineDownFill"
      d="M14.5309 21.3708L5.3065 11.8337C4.65201 11.157 5.11555 10 6.04114 10H25.9591C26.8847 10 27.3482 11.157 26.6937 11.8337L17.4694 21.3708C16.6579 22.2097 15.3423 22.2097 14.5309 21.3708Z"
    />,
  ],
  [
    'duotone',
    <Fragment key="ArrowLineDownDuotone">
      <path
        d="M14.5309 21.3708L5.3065 11.8337C4.65201 11.157 5.11555 10 6.04114 10H25.9591C26.8847 10 27.3482 11.157 26.6937 11.8337L17.4694 21.3708C16.6579 22.2097 15.3423 22.2097 14.5309 21.3708Z"
        fillOpacity="0.1"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.61067 12.629C3.30615 11.2898 4.23006 9 6.07494 9H25.9251C27.7699 9 28.6938 11.2898 27.3893 12.629L18.1964 22.0661C16.9834 23.3113 15.0166 23.3113 13.8036 22.0661L4.61067 12.629ZM25.9251 11.1258H6.07494L15.2679 20.5629C15.6722 20.978 16.3278 20.978 16.7321 20.5629L25.9251 11.1258L26.6572 11.8774L25.9251 11.1258Z"
      />
    </Fragment>,
  ],
])
