const THEME_STORAGE_KEY = 'swc-theme';

type ThemeMode = 'light' | 'dark';

export const useTheme = () => {
  const theme = useState<ThemeMode>('swc-theme', () => 'light');
  const isDark = computed(() => theme.value === 'dark');

  const applyTheme = (nextTheme: ThemeMode) => {
    theme.value = nextTheme;

    if (!import.meta.client) {
      return;
    }

    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  };

  const initTheme = () => {
    if (!import.meta.client) {
      return;
    }

    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    const resolvedTheme: ThemeMode =
      storedTheme === 'dark' || storedTheme === 'light'
        ? storedTheme
        : window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light';

    applyTheme(resolvedTheme);
  };

  const toggleTheme = () => {
    applyTheme(isDark.value ? 'light' : 'dark');
  };

  return {
    theme,
    isDark,
    initTheme,
    toggleTheme,
    applyTheme,
  };
};
