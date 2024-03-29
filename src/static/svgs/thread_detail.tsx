const ThreadDetailIcon = () => {
  return (
    <svg
      aria-label="View thread details"
      color="#262626"
      fill="#262626"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <circle
        cx="12.001"
        cy="12.005"
        fill="none"
        r="10.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      ></circle>
      <circle cx="11.819" cy="7.709" r="1.25"></circle>
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        x1="10.569"
        x2="13.432"
        y1="16.777"
        y2="16.777"
      ></line>
      <polyline
        fill="none"
        points="10.569 11.05 12 11.05 12 16.777"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      ></polyline>
    </svg>
  );
};

export default ThreadDetailIcon;
