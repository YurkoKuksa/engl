import { useState, useEffect, useCallback, useRef } from "react";
import phrases from "../data/Phrases/HeroPhrases";

export function useTypewriterEffect(options = {}) {
  const {
    typingSpeed = 150,
    deletingSpeed = 100,
    pauseAfterTyping = 2000,
    pauseBeforeRestart = 500,
  } = options;

  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const timeoutRef = useRef(null);

  const getRandomPhrase = useCallback(() => {
    // Якщо є тільки одна фраза, повертаємо її
    if (phrases.length <= 1) {
      return phrases[0] || "";
    }

    // Вибираємо випадкову фразу, відмінну від поточної
    const availablePhrases = phrases.filter(
      (_, index) => index !== currentPhraseIndex
    );
    const randomIndex = Math.floor(Math.random() * availablePhrases.length);
    const selectedPhrase = availablePhrases[randomIndex];

    // Знаходимо індекс вибраної фрази в оригінальному масиві
    const newIndex = phrases.indexOf(selectedPhrase);
    return { phrase: selectedPhrase, index: newIndex };
  }, [currentPhraseIndex]);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex] || "";

    if (!isDeleting && displayText.length < currentPhrase.length) {
      // Друкуємо по одній літері
      timeoutRef.current = setTimeout(() => {
        setDisplayText(currentPhrase.slice(0, displayText.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayText.length === currentPhrase.length) {
      // Пауза після повного тексту перед видаленням
      timeoutRef.current = setTimeout(() => {
        setIsDeleting(true);
      }, pauseAfterTyping);
    } else if (isDeleting && displayText.length > 0) {
      // Видаляємо по одній літері
      timeoutRef.current = setTimeout(() => {
        setDisplayText(displayText.slice(0, -1));
      }, deletingSpeed);
    } else if (isDeleting && displayText.length === 0) {
      // Пауза перед новим циклом та вибір нової фрази
      timeoutRef.current = setTimeout(() => {
        const { index } = getRandomPhrase();
        setCurrentPhraseIndex(index);
        setIsDeleting(false);
      }, pauseBeforeRestart);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [
    displayText,
    isDeleting,
    currentPhraseIndex,
    typingSpeed,
    deletingSpeed,
    pauseAfterTyping,
    pauseBeforeRestart,
    getRandomPhrase,
  ]);

  return displayText;
}
