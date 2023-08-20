export type ThemeType = {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
    switchTheme: () => void;
};
