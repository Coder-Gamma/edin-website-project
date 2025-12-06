import { CircleArrowDown } from "lucide-react";
import { useEffect } from "react";
import { gsap } from "gsap";
function Mouseeffect() {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      gsap.to("#cursor", {
        x: clientX - 2,
        y: clientY - 110,
        ease: "power4.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 z-10 pointer-events-none" id="cursor">
      <CircleArrowDown size={48} />
    </div>
  );
}

export default Mouseeffect;
