interface Props {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function Title({ title, subtitle, className }: Props) {
  return (
    <div className={`${className}`}>
      <h1 className="font-montserrat text-4xl font-semibold my-10">{title}</h1>
      {subtitle && <p className="text-lg">{subtitle}</p>}
    </div>
  );
}
