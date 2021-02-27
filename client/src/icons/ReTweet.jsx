export default function Icon({ className, style, onClick }) {
  return (
    <svg className={className} style={style} onClick={onClick} viewBox='0 -80 512.001 512'>
      <path d='M178 20c0-11.047 8.953-20 20-20h168c44.113 0 80 35.89 80 80v163c0 11.047-8.953 20-20 20s-20-8.953-20-20V80c0-22.055-17.945-40-40-40H198c-11.047 0-20-8.953-20-20zm328.047 242.762c-7.863-7.754-20.527-7.668-28.285.195l-44.496 45.11c-1.883 1.89-4.371 2.933-7.012 2.933h-.008c-2.637 0-5.125-1.04-7.008-2.926L374.16 262.88c-7.8-7.824-20.465-7.84-28.285-.04-7.82 7.802-7.836 20.466-.035 28.286l45.078 45.2c9.441 9.464 21.988 14.675 35.328 14.675h.035c13.352-.008 25.906-5.238 35.403-14.785l44.554-45.168c7.758-7.863 7.672-20.527-.191-28.285zM312 312H146c-22.055 0-40-17.941-40-40V104c0-11.047-8.953-20-20-20s-20 8.953-20 20v168c0 44.113 35.887 80 80 80h166c11.047 0 20-8.953 20-20s-8.953-20-20-20zM85.746 40h.008c2.637 0 5.125 1.04 7.008 2.926l45.078 45.199A19.934 19.934 0 00152 94c5.11 0 10.219-1.945 14.125-5.84 7.82-7.797 7.836-20.46.035-28.281l-45.078-45.2C111.632 5.208 99.086-.054 85.719 0 72.367.012 59.813 5.238 50.316 14.785L5.762 59.957c-7.758 7.863-7.672 20.523.195 28.281 7.86 7.758 20.523 7.672 28.281-.191l44.5-45.11c1.88-1.89 4.367-2.933 7.008-2.937zm0 0' />
    </svg>
  );
}
