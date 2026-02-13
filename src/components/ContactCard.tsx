import type { Contact } from "@/data/contacts";

interface ContactCardProps {
  contact: Contact;
}

export function ContactCard({ contact }: ContactCardProps) {
  return (
    <div className="glass-card group flex items-center justify-between p-4 transition-all duration-200 hover:bg-white/10">
      <div className="flex flex-col gap-1">
        <h3 className="text-base font-semibold text-white/95">
          {contact.name}
        </h3>
      </div>
      
      <div className="flex items-center gap-2">
        <span className="font-mono text-2xl font-bold text-cyan-400">
          {contact.ext}
        </span>
      </div>
    </div>
  );
}
