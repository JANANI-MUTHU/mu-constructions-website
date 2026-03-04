import { Link, useNavigate } from "react-router-dom";

export default function BackLink({ fallback = "/" }) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate(fallback);
    }
  };

  return (
    <a
      href={fallback}
      onClick={handleClick}
      className="inline-flex items-center text-[#e8e3da] hover:text-white text-sm tracking-wide"
      aria-label="Go back"
    >
      <svg
        className="w-4 h-4 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 19l-7-7 7-7" />
      </svg>
      Back
    </a>
  );
}
