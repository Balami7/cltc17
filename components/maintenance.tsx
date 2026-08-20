"use client";

const styles = {
  container: {
    width: '100%',
    backgroundColor: '#facc15',
    borderTop: '2px solid #000000',
    borderBottom: '2px solid #000000',
    overflow: 'hidden',
    padding: '40px 0',
  } as React.CSSProperties,

  track: {
    display: 'flex',
    whiteSpace: 'nowrap',
    width: 'max-content',
    animation: 'maintenance-marquee-loop 20s linear infinite',
  } as React.CSSProperties,

  item: {
    display: 'flex',
    alignItems: 'center',
  } as React.CSSProperties,

  text: {
    color: '#000000',
    fontWeight: 900,
    textTransform: 'uppercase' as const,
    fontSize: '0.75rem',
    letterSpacing: '0.1em',
    margin: '0 16px',
    fontFamily: 'sans-serif',
  } as React.CSSProperties,

  dot: {
    width: '8px',
    height: '8px',
    backgroundColor: '#000000',
    borderRadius: '50%',
    margin: '0 16px',
  } as React.CSSProperties,
};

const MaintenanceMarquee = () => {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes maintenance-marquee-loop {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}} />

      <div style={styles.container}>
        <div style={styles.track}>
          {[...Array(8)].map((_, i) => (
            <div key={i} style={styles.item}>
              <span style={styles.text}>
                Maintenance going on, we will be back online in 48hrs
              </span>
              <span style={styles.dot}></span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MaintenanceMarquee;
