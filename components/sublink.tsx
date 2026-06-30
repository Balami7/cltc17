import { notFound } from "next/navigation";
import styles from "./sublink.module.css";

// TypeScript props for App Router dynamic segments
interface PageProps {
  params: Promise<{
    sublink: string;
  }>;
}

// Data mapping for content customization based on the link clicked
const SUBLINK_DATA: Record<string, { title: string; }> = {
  sublink1: {
    title: "FMYD",
  },
  sublink2: {
    title: "NYSC",
 },
  sublink3: {
    title: "NYSC",
  },
};

export default async function SublinkPage({ params }: PageProps) {
  // Await the route parameters safely
  const resolvedParams = await params;
  const currentSlug = resolvedParams.sublink;

  // Validate that the path exists in our records, otherwise throw a 404
  const pageContent = SUBLINK_DATA[currentSlug];
  if (!pageContent) {
    notFound();
  }

  return (
    <main className={styles.container}>
      <section className={styles.card}>
        <span className={styles.badge}>Official Sub-Track</span>
        <h1 className={styles.title}>{pageContent.title}</h1>
        <div className={styles.divider}></div>
        <p className={styles.description}>{pageContent.description}</p>
        
        <div className={styles.actionGrid}>
          <button className={styles.primaryBtn}>
            Explore Documents <i className="fa-solid fa-arrow-right"></i>
          </button>
          <button className={styles.secondaryBtn}>View Guidelines</button>
        </div>
      </section>
    </main>
  );
}

// Optional: Generates static pages at build time for optimal speed performance
export async function generateStaticParams() {
  return [
    { sublink: "sublink1", target="_blank" },
    { sublink: "sublink2", target="_blank"  },
    { sublink: "sublink3", target="_blank"  },
  ];
}
