const CloseButton = (props:{handleClick: (e: {target: EventTarget, currentTarget: EventTarget})=>void, position: string}): JSX.Element => (
  <button
              onClick={props.handleClick}
              className={`w-7 h-7 rounded-full border-base border-2 flex bg-base transform items-center justify-center text-xl font-bold absolute ${props.position}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 pointer-events-none"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            
)

export default CloseButton