const THEME_STORAGE_KEY = 'swc-theme';

type ThemeMode = 'light' | 'dark';

export const useTheme = () => {
  // อ่าน theme จาก DOM ที่ inline script ใน <head> set ไว้แล้ว
  // ทำให้ Vue state sync กับ DOM ตั้งแต่ hydration แรก — ไม่มี color shift
  const theme = useState<ThemeMode>('swc-theme', () => {
    if (import.meta.client) {
      return (document.documentElement.dataset.theme as ThemeMode) ?? 'light';
    }
    return 'light';
  });

  const isDark = computed(() => theme.value === 'dark');

  const applyTheme = (nextTheme: ThemeMode): void => {
    theme.value = nextTheme;

    if (!import.meta.client) {
      return;
    }

    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  };

  const toggleTheme = (): void => {
    applyTheme(isDark.value ? 'light' : 'dark');
  };

  return {
    theme,
    isDark,
    toggleTheme,
    applyTheme,
  };
};
