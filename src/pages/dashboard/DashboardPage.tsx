import { useTheme } from "../../context/ThemeContext";

export default function DashboardPage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-text flex flex-col items-center justify-center gap-6">

      <h1 className="text-5xl font-bold text-primary">
        Nexus
      </h1>

      <p>
        Tema actual: {theme}
      </p>

      <button
        onClick={toggleTheme}
        className="bg-primary text-white px-6 py-3 rounded-xl"
      >
        Cambiar Tema
      </button>

    </div>
  );
}