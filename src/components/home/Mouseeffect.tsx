import { CircleArrowDown } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface MouseEffectProps {
  containerRef: React.RefObject<HTMLElement>;
}

function MouseEffect({ containerRef }: MouseEffectProps) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const cursor = cursorRef.current;
    const icon = iconRef.current;

    if (!container || !cursor || !icon) return;

    // 1. Initial State: Hidden
    gsap.set(cursor, { opacity: 0 });

    // 2. Movement Logic
    const handleMouseMove = (event: MouseEvent) => {
      // Check if hovering over the navbar/overlay (id="overlay")
      const target = event.target as HTMLElement;
      const isHoveringOverlay = target.closest("#overlay");

      // Calculate position relative to the container
      const rect = container.getBoundingClientRect();
      const relX = event.clientX - rect.left;
      const relY = event.clientY - rect.top;

      // Logic: Show/Hide based on where we are
      if (
        relX >= 0 &&
        relY >= 0 &&
        relX <= rect.width &&
        relY <= rect.height &&
        !isHoveringOverlay
      ) {
        gsap.to(cursor, { opacity: 1, duration: 0.2 });

        // Move the Vertical Line (X-axis)
        gsap.to(cursor, {
          x: relX,
          duration: 0.1, // Faster for crisp line following
          ease: "power2.out",
        });

        // Move the Icon (Y-axis independent of line)
        gsap.to(icon, {
          y: relY,
          duration: 0.3, // Slight delay for smooth feel
          ease: "power2.out",
        });
      } else {
        // Hide if outside bounds or over overlay
        gsap.to(cursor, { opacity: 0, duration: 0.2 });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, { opacity: 0, duration: 0.2 });
    };

    // 3. Add Listeners to the CONTAINER, not window
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [containerRef]);

  return (
    <div
      ref={cursorRef}
      className="absolute top-0 left-0 h-full z-10 pointer-events-none will-change-transform"
      style={{ opacity: 0 }} // Start hidden to prevent flash
    >
      {/* The Vertical Line */}
      <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-white/60"></div>

      {/* The Icon Wrapper (Moves Y) */}
      <div
        ref={iconRef}
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"
      >
        <CircleArrowDown
          size={64}
          className="text-white font-light"
          strokeWidth={1}
        />
      </div>
    </div>
  );
}

export default MouseEffect;
