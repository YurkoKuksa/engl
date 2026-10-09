import { BackButton } from "./BackBtn.Styled.js";

/**
 * Універсальна кнопка «Назад».
 * - onClick  — свій обробник (наприклад, () => navigate(-1)).
 *              Якщо не передано, виконується window.history.back().
 * - label    — текст на кнопці (на екранах до 640px ховається, лишається стрілка).
 */
export function BackBtn({ onClick, label = "Back", ...rest }) {
  return (
    <BackButton
      type="button"
      aria-label={label}
      onClick={onClick ?? (() => window.history.back())}
      {...rest}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M19 12H5" />
        <path d="M12 19l-7-7 7-7" />
      </svg>
      <span>{label}</span>
    </BackButton>
  );
}

export default BackBtn;
