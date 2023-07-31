export default function Divider(props) {
  return (
    <>
      <div id={props.id}>
        <svg
          className="divider"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="166.61502"
          viewBox="0.4 0.2 200 44"
          preserveAspectRatio="none"
        >
          <g transform="translate(-9.2218046,-83.494585)">
            <path
              fill="#785af0"
              d="M 9.484815,89.716055 H 209.81018 V 126.90507 L 110.46368,93.705147 9.579391,127.39334 Z"
            />
            <path
              fill="#1a1a1a"
              d="M 9.3544335,83.626877 H 209.68181 V 120.29057 L 110.46368,93.705147 9.4490103,120.77195 Z"
            />
          </g>
        </svg>
      </div>
    </>
  );
}
