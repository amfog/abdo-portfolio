interface SkillBadgeProps {
  label: string;
  variant?: "default" | "primary" | "secondary";
}

export default function SkillBadge({ label, variant = "default" }: SkillBadgeProps) {
  const styles = {
    default:
      "bg-white/5 border border-white/10 text-white/70 hover:border-white/20 hover:text-white",
    primary:
      "bg-[#4f75ff]/10 border border-[#4f75ff]/30 text-[#4f75ff] hover:bg-[#4f75ff]/20",
    secondary:
      "bg-[#7b5cf6]/10 border border-[#7b5cf6]/30 text-[#7b5cf6] hover:bg-[#7b5cf6]/20",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 cursor-default ${styles[variant]}`}
    >
      {label}
    </span>
  );
}
